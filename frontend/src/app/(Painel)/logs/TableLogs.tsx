"use client"

import Input from "@/components/ui/Input/Input";
import LayuotMain from "../components/LayoutMain";
import { TitlePage } from "../components/TitlePage";
import { Select } from "@/components/ui/Select/select";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { FormatedDate } from "@/utils/formatedDate";

type logsProps = {
    id: number
    category: string
    action: string
    createdAt: string
    user: {
        name: string
    }
}

export default function TableLogs() {

    const [logs, setLogs] = useState<logsProps[] | null>(null)
    useEffect(() => {
        async function handleListAllLogs() {
            const response = await api.get("/logs")
            if (!response.data) {
                return
            }

            try {
                setLogs(response.data)
            } catch (error) {
                console.log("Erro ao listar logs:", error)
            }
        }
        handleListAllLogs()
    }, [])


    return (
        <>
            <LayuotMain>

                <TitlePage label={false} titlePage="Logs do Sistema" />

                <div className="group__fields">
                    <Input
                        label="Pesquisar"
                        heigthStyles="h-md"
                        widthStyles="w-md"
                        title=""

                    />

                    <Select
                        label="Categoria"
                        heigthStyles="h-md"
                        widthStyles="w-fit"
                        title=""

                    >

                        <option value="">Todos Registros</option>
                    </Select>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                            <th>Usuário</th>
                            <th>Data do Registros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs && (
                            logs.map((log, index) => (
                                <tr key={index}>
                                    <td data-label={"#"}>{log.id}</td>
                                    <td data-label={"Categoria"}>{log.category}</td>
                                    <td data-label={"Ações"}>{log.action}</td>
                                    <td data-label={"Usuário"}>{log.user?.name || "Nome não identificado"}</td>
                                    <td data-label={"Data do Registro"}>{FormatedDate(log.createdAt)}</td>
                                </tr>

                            ))
                        )}
                    </tbody>
                </table>

            </LayuotMain>

        </>
    )
}