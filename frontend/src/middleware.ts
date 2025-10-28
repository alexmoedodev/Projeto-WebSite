// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Protege somente a página de registro caso já exista algum usuário cadastrado no sistema.
    if (pathname === "/registrar-se") {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/users`)

        const data = await response.json()

        const res = data.length > 0
        if (res) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`)
        }

    }

    return NextResponse.next();


}
