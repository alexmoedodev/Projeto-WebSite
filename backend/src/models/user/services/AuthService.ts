import { compare } from "bcryptjs";
import { schemaAuth } from "../../../schema/SchemaAuth";
import prismaClient from "../../../prisma";
import { AppError } from "../../../error/AppError";
import { MESSAGE } from "../../../lib/message";
import { sign } from "jsonwebtoken";
import { createLog } from "../../../lib/logService";


export class AuthService {
    async execute(rawData: unknown) {

        const data = schemaAuth.parse(rawData)

        const auth = await prismaClient.user.findFirst({
            where: {
                email: data.email
            },
            include: {
                company: true
            }
        })

        if (!auth) {

            await createLog({
                category: "CADASTRO",
                action: `Tenattiva de ${auth.email}`
            })
            throw new AppError(MESSAGE.USER.CREDENTIAL_INVALID, 400)
        }

        const passowrdCompare = await compare(data.password, auth.password)

        if (!passowrdCompare) throw new AppError(MESSAGE.USER.CREDENTIAL_INVALID, 400)

        try {
            const token = sign({
                name: auth.name,
                email: auth.email
            },
                process.env.SECRET_JWT,
                {
                    subject: auth.id,
                    expiresIn: "30d"
                }
            )

            await createLog({
                action: `${MESSAGE.LOG_ACTIONS.USER_LOGGED_IN(auth.name)}`,
                category:"CADASTRO",
                userId: auth.id,
                companyId: auth.companyId
            }) 

            return {
                id: auth.id,
                code: auth.code,
                name: auth.name,
                email: auth.email,
                token: token,
                company: auth.companyId
            }

        } catch (error) {
            console.error("Error ao validar token:", error)
        }

    }
}