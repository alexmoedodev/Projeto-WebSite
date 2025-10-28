import z from "zod";
import { normalizeEmail } from "../lib/nomalize";
import { MESSAGE } from "../lib/message";

export const schemaAuth = z.object({
    email: z.string(MESSAGE.USER.EMAIL_REQUIRED).email(MESSAGE.USER.EMAIL_INVALID).transform(normalizeEmail),
    password: z.string(MESSAGE.USER.PASSWORD_REQUIRED).min(6, MESSAGE.USER.PASSWORD_LENGTH),
})

export type SchemaAuth = z.infer<typeof schemaAuth>