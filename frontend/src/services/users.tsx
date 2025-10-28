
export type UserProps = {
    code: number
    name: string
    email: string
    status:boolean
    createdAt: string
}

export const users: UserProps[] = [
    {
        code: 1,
        name: "João Silva",
        email: "joao.silva@example.com",
        status: true,
        createdAt: "2025-10-01T10:00:00Z"
    },
    {
        code: 2,
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        status: false,
        createdAt: "2025-10-02T14:30:00Z"
    },
    {
        code: 3,
        name: "Carlos Souza",
        email: "carlos.souza@example.com",
        status: true,
        createdAt: "2025-10-03T09:45:00Z"
    },
    {
        code: 4,
        name: "Ana Costa",
        email: "ana.costa@example.com",
        status: false,
        createdAt: "2025-10-04T16:20:00Z"
    },
    {
        code: 5,
        name: "Pedro Lima",
        email: "pedro.lima@example.com",
        status: true,
        createdAt: "2025-10-05T08:10:00Z"
    }
];
