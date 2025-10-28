import { TableUser } from "./tableUser"

export const metadata = {
    title: "Usuários",
    description: "Lista de usuários cadastrados no sistema."
}

export default function User(){
    return(
        <>
        <TableUser/>
        </>
    )
}