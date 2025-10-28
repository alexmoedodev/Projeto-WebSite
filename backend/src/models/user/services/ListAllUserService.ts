import { AppError } from "../../../error/AppError";
import prismaClient from "../../../prisma";


export class ListAllUserService {
    async execute() {

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                code: true,
                name: true,
                email: true,
                status: true,
                createdAt: true,
            }
        })

        if (!users) {
            throw new AppError("Nenhum usuário enconstrado.", 400)
        }

        return users


    }
}