/* 
* Objetivo desse service e registar somente o primeiro usuários do painel
* Os demais usuários seram registrados por outra rota protegida e solicitando o id da company
* Vamos fazer um middleware vefirificando se existe algum usuário cadastrado no banco.
* Se exister 1 usuário ou mais vamos bloqueiar a rota que era publica de registre-se.
* Esse middleware será responsavel por proteger a rota publica caso já exista 1 ou mais usuários cadastrados no banco.
*/

import { hash } from "bcryptjs";
import prismaClient from "../../../prisma";
import { schemaRegisterUser } from "../../../schema/SchemaRegisterUser";
import { AppError } from "../../../error/AppError";
import { MESSAGE } from "../../../lib/message";
import { createLog } from "../../../lib/logService";

export class RegisterUserService {
      async execute(data: unknown) {

            const parsedData = schemaRegisterUser.parse(data);

            const alreadyExistsUserRegitered = await prismaClient.user.count()
            if (alreadyExistsUserRegitered >= 1) {
                  await createLog({
                        action: MESSAGE.LOG_ACTIONS.USER_TRIED_TO_REGISTER(parsedData.name, parsedData.email),
                        category:"ERROR"
                  })
                  throw new AppError(MESSAGE.USER.ALREADY_EXISTS_USER_REGISTARED, 401)
            }

            const alreadyExists = await prismaClient.user.findUnique({
                  where: {
                        email: parsedData.email
                  }
            })
            if (alreadyExists) throw new AppError(MESSAGE.USER.ALREADY_EXISTS_EMAIL, 400)

            const passwordHash = await hash(parsedData.password, 12)

            const user = await prismaClient.user.create({
                  data: {
                        name: parsedData.name,
                        email: parsedData.email,
                        password: passwordHash,
                        image: null,
                        companyId: null
                  }, select: {
                        id: true,
                        code: true,
                        name: true,
                        email: true,
                        createdAt: true,
                        companyId: true
                  }
            })

            await createLog({
                  category: "CADASTRO",
                  action: `${MESSAGE.LOG_ACTIONS.USER_REGISTERED(user.name)}`,
                  userId: user.id,

            })

            return user
      }
}