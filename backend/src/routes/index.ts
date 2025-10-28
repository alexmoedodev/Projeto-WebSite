import Router from "express"
import { AppError } from "../error/AppError"
import { RegisterUserController } from "../models/user/controllers/RegisterUserController"
import { ListAllLogsController } from "../models/logs/controllers/ListAllLogsController"
import { AuthController } from "../models/user/controllers/AuthController"
import { AuthenticationToken } from "../middleware/Authentication"
import { ListAllUserController } from "../models/user/controllers/ListAllUserController"

export const router = Router()

router.get("/teste" , ()=> {
    throw new AppError("Tratamento de erros.", 400)
})


// -- USERS -- //
router.post("/register" , new RegisterUserController().handle)
router.post("/session"  , new AuthController().handle )
router.get("/users" , new ListAllUserController().handle)


// -- COMPANY -- //


// -- LOGS -- //
router.get("/logs" , new ListAllLogsController().handle)