import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController{
    async handle(req: Request, res: Response , next: NextFunction){

        const services = new AuthService()

        try{
            const auth = await services.execute(req.body)
            return res.status(201).json(auth)

        }catch(error){
            console.error("Erro ao tentar logar usuários:", error)
            next(error)
        }
    }
}