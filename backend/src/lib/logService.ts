import prismaClient from "../prisma";



interface CreateLogProps {
    action: string
    userId?: string | null | undefined
    companyId?: string | null | undefined
    category: "CADASTRO" | "EDIÇÃO" | "EXCLUSÃO" | "ERROR"
}

export async function createLog({ action, userId, companyId, category }: CreateLogProps) {
    try {
        await prismaClient.log.create({
            data: {
                category: category,
                action: action,
                userId: userId ?? null,
                companyId: companyId ?? null
            }
        })
    } catch (error) {
        console.error("Error ao criar log:", error)
    }
}