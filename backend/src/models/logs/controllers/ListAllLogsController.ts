import { Request, Response, NextFunction } from "express";
import { ListAllLogsService } from "../services/ListAllLogsService";


export class ListAllLogsController {
    async handle(req: Request, res: Response, next: NextFunction) {
      
        const services = new ListAllLogsService()

        try {
            const allLogs = await services.execute()
            return res.status(201).json(allLogs)
            
        } catch (error) {
            next(error)
            console.error("Erro ao tentar listar logs:", error)
        }
    }
}