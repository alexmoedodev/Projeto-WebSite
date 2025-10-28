import { FormForgotPassword } from "./FormForgotPassword"

export const metadata = {
    title: "Redefirnir senha",
    description:"Preencha seu email para receber uma nova senha no email cadastrado no sistema."
}


export default function Register(){
    return(
        <FormForgotPassword />
    )
}