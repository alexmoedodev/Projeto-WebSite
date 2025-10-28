
import { Request, Response, NextFunction } from "express";

export function AuthenticationToken (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authToken = req.headers?.authorization

    console.log("Passou aqui")
    console.log(authToken)
}