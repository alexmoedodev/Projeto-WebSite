import { FormUser } from "./FormUser";

export const metadata = {
    title: "Novo usuário",
    description: "Lista de usuários cadastrados"
}

export default function User(){
    return(
        <>
        <FormUser/>
        </>
    )
}