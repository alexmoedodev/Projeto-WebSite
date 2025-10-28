import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";

export const HanldeError = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    if (res.headersSent) {
        return
    }
    // ✅ Tratamento para erros de aplicação (AppError)
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            message: err.message
        })
        return
    }

    // ✅ Tratamento para erros de validação (Zod)
    if (err instanceof ZodError) {
        res.status(400).json({
            message: "Erro de validação",
            errors: err.issues.map((issues) => ({
                field: issues.path.join("."),
                message: issues.message
            }

            ))

        });
        return;
    }
    /* Fins para desenvolvimento */
    console.log("Internal server error", err)

    res.status(500).json({
        message: "Internal server error", Error
    })
}