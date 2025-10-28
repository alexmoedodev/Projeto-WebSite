import { MESSAGE } from "@/utils/message";
import z from "zod";

export const schemaAuth = z.object({
    email: z.email(MESSAGE.USER.CREDENTIAL_INVALID),
    password: z.string(MESSAGE.USER.CREDENTIAL_INVALID)
})


export type SchemaAuth = z.infer<typeof schemaAuth>

