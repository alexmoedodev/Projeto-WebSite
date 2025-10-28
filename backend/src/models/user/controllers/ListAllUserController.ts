import { Request, Response, NextFunction } from "express";
import { ListAllUserService } from "../services/ListAllUserService";


export class ListAllUserController {
    async handle(req: Request, res: Response, next: NextFunction) {

        const services = new ListAllUserService()

        try {
            const users = await services.execute()

            return res.status(201).json(users)

        } catch (error) {
            next(error)
        }
    }
}