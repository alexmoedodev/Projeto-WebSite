"use client"
// 📦React
import { redirect } from "next/navigation"


// 🧩 Componentes
import { StatusTable } from "@/components/ui/StatusTable"
import { Button } from "@/components/ui/Button/Button"
import { Select } from "@/components/ui/Select/select"
import { TitlePage } from "../components/TitlePage"
import LayuotMain from "../components/LayoutMain"
import Input from "@/components/ui/Input/Input"

// utils 
import { TITLE_BUTTON } from "@/utils/buttonTitles"
import { TITLE } from "@/utils/formTitles"

// 🎨 Styles
import styles from "./tableUser.module.css"

// Services
/* import { users } from "@/services/users" */
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { FormatedDate } from "@/utils/formatedDate"


type UsersProps = {
    id: string
    code: number
    name: string
    email: string
    status: boolean
    createdAt: string
}


export function TableUser() {
    const [users, setUsers] = useState<UsersProps[] | null>(null)

    //Button create new user
    function createNewUser() {
        redirect("/usuarios/novo")
    }

    //List all User registred
    useEffect(() => {
        async function ListAllUserRegistred() {
            const response = await api.get("/users")
            try {
                const data = response.data
                setUsers(data)

            } catch (error) {
                console.error("Erro ao lista usuários:", error)
            }
        }
        ListAllUserRegistred()
    }, [])

    return (
        <>
            <LayuotMain>
                <div className={styles.container__table}>

                    <TitlePage
                        titlePage="Usuários"
                        label={false}
                    />

                    <div className={styles.content__header}>
                        <Button
                            variant="new"
                            icon={true}
                            title={TITLE_BUTTON.NEW_O("usuário")}
                            onClick={createNewUser}

                        >
                            Novo Usuário
                        </Button>

                        <div className={styles.search}>
                            <div className="group__fields">
                                <Input
                                    label="Pesquisa"
                                    title=""
                                    heigthStyles="h-md"
                                    widthStyles="w-md"
                                />

                                <Select
                                    label="Ativo"
                                    heigthStyles="h-md"
                                    widthStyles="w-fit"
                                    title={TITLE.OTHERS.FILTER_STATUS("usuários")}
                                >
                                    <option value="all">Todos</option>
                                    <option value="active">Ativo</option>
                                    <option value="inactive">Inativo</option>
                                </Select>


                            </div>


                            <p>Total de usuários cadastrados: {10}</p>
                            <p>Total de usuários filtrados: {5}</p>
                        </div>
                        <hr />

                    </div>
                    <div className="table__wrapper">

                        <table>
                            <thead>
                                <tr>
                                    <th>Ações</th>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Ativo</th>
                                    <th>Data do Cadastro</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users && (
                                    users.map((user, index) => (

                                        <tr key={index}>
                                            <td
                                                data-label={"Ações"}
                                            >
                                                <span className="btns__actions__table">
                                                    <Button variant="edit" icon={true} />
                                                    <Button variant="delete" icon={true} />
                                                </span>
                                            </td>
                                            <td data-label={"#"}>{user.code}</td>
                                            <td data-label={"Nome"}>{user.name}</td>
                                            <td data-label={"Email"}>{user.email}</td>
                                            <td data-label={"Ativo"}><StatusTable icon={user.status} /> </td>
                                            <td data-label={"Data do Cadastro"}>{FormatedDate(user.createdAt)}</td>
                                        </tr>

                                    )))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </LayuotMain>
        </>
    )
}