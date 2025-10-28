
import { MESSAGE } from "@/utils/message";
import z from "zod";

export const schemaRegisterUser = z.object({
    name: z.string(MESSAGE.USER.NAME_REQUIRED).min(2, MESSAGE.USER.NAME_LENGTH).trim(),
    email: z.string(MESSAGE.USER.EMAIL_REQUIRED).email(MESSAGE.USER.EMAIL_INVALID),
    password: z.string(MESSAGE.USER.PASSWORD_REQUIRED).min(6, MESSAGE.USER.PASSWORD_LENGTH),
    confirmPassword: z.string(MESSAGE.USER.CONFIRM_PASSWORD_REQUIRED)
})

    .refine((data) => data.password === data.confirmPassword, {
    message: `${MESSAGE.USER.PASSWORD_MISMATCH}`,
        path: ["confirmPassword"]
} )


export type SchemaRegisterUserProps = z.infer<typeof schemaRegisterUser>