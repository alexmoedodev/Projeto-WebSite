import { AppError } from "../../../error/AppError";
import prismaClient from "../../../prisma";


export class ListAllLogsService {
    async execute() {
        const allLogs = await prismaClient.log.findMany({
           include:{
            user:{
              select:{
                name: true
              }
            }
           }
        })

        if (!allLogs) {
            throw new AppError("Nenhum log encontrado.", 400)
        }

        return allLogs
    }
}