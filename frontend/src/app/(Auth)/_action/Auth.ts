import { api } from "@/services/api"
import { schemaAuth } from "../schemas/SchemaAuth"
import { ZodError } from "zod"
import { AxiosError } from "axios"

type AuthActionProps = {
    fieldsErros?: Record<string, string>
    success?: string | null
    error?: string | null

}

export async function AuthAction(
    prevState: AuthActionProps | undefined,
    formData: FormData
): Promise<AuthActionProps | undefined> {

    try {
        const formValues = {
            email: formData.get("email")?.toString() || "",
            password: formData.get("password")?.toString() || ""
        }

        const result = schemaAuth.safeParse(formValues)

        if (!result.success) {
            const fieldsErros = Object.fromEntries(
                result.error.issues.map((issue) => [issue.path[0], issue.message])
            )
            return { fieldsErros }            
        }

        await api.post("/session" , result.data)
        return {success: "Bem vindo"}

    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const fieldsErros = Object.fromEntries(
                error.issues.map((issue)=> [issue.path[0], issue.message])
            )
            return { fieldsErros }
        }

        if (error instanceof AxiosError) {
            const message = error.response?.data.message || "Erro de comunicação."

            return {error: message}
        }

        return{error: "Erro interno. Tente novamente mais tarde."}
    }


}