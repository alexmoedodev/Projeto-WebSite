"use server"


import { api } from "@/services/api";
import { schemaRegisterUser } from "../schemas/SchemaRegisterUser";
import { ZodError } from "zod";
import { AxiosError } from "axios";

 export interface RegisterProps {
    fieldsErrors?: Record<string, string>
    success?: string;
    error?: string;
}


export async function registerUser(
    prevState: RegisterProps | undefined,
    formData: FormData
): Promise<RegisterProps | undefined> {

    try {
        const formValues = {
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            password: formData.get("password")?.toString() || "",
            confirmPassword: formData.get("confirmPassword")?.toString() || "",
        }


        const result = schemaRegisterUser.safeParse(formValues)

        if (!result.success) {
            const fieldsErrors = Object.fromEntries(
                result.error.issues.map((issue) => [issue.path[0], issue.message])
            )
            return {fieldsErrors}
        }

        await api.post("/register", result.data)
        return { success: "Usuário criado com sucesso !" }

    } catch (error: unknown) {
        if(error instanceof ZodError){
            const fieldsErrors = Object.fromEntries(
                error.issues.map((issues)=> [issues.path[0], issues.message])
            )
            return {fieldsErrors}
        }

        if (error instanceof AxiosError) {
            const message = error.response?.data.message || "Erro de comunicação"
    
            return{error: message}
        }

        return { error: "Erro interno. Tente novamente mais tarde." }
    }






}