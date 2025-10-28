import { Request, Response, NextFunction } from "express";
import { RegisterUserService } from "../services/RegisterUserService";
import { SchemaUserRegister } from "../../../schema/SchemaRegisterUser";


export class RegisterUserController {
    async handle(req: Request, res: Response, next: NextFunction) {


        const services = new RegisterUserService()
        try {
            const user = await services.execute(req.body as SchemaUserRegister)

            return res.status(201).json(user)

        } catch (error) {
            console.log("error:", error)
            next(error)

        }

    }
}