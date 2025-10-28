import { apiCep } from "@/services/apiCep";


export type CepResponse = {
    cep: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;

}

export async function fetchCep(cep: string): Promise<CepResponse | null> {
    if (!cep || cep.length < 7 ){
         return null
        }
        
    try {
        const response = await fetch(`${apiCep}${cep}`)

        if (!response.ok) {
            throw new Error("Erro ao buscar cep.")
        }

        const data = await response.json()

        return {
            cep: data.cep || "",
            address: data.street || "",
            neighborhood: data.neighborhood || "",
            city: data.city || "",
            uf: data.state || "",
            complement: data.complement || "",
            number: data.number || "",
        };

    } catch (error) {
        console.error("Erro ao buscar CEP", error)
        return null

    }

}