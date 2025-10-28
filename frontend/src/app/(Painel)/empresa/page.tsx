import { FormCompany } from "./FormCompany"

export const metadata = {
    title: "Empresa",
    description: "Preencha o formulario com os dados da empresa."
} 

export default function Company(){
    return(
        <>
        <FormCompany/>
        </>
    )
}