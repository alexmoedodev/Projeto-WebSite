import "express-async-errors"
import express, { json } from "express"
import cors from "cors"
import { router } from "../routes"
import { HanldeError } from "../error/HandleError"


export const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(HanldeError)