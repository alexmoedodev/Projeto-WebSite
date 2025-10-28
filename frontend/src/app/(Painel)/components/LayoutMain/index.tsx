"use client"

import React, { useState } from "react"
import styles from "./layouts.module.css"
import { Sidebar } from "../Sidebar"

type LayuotProps = {
    children: React.ReactNode
    
}

export default function LayuotMain({ children  }: LayuotProps) {

    const nameCompany = process.env.NEXT_PUBLIC_NAME_COMPANY
    const year = new Date().getFullYear()

    const [open, setOpen] = useState(true)
    function handleSidebar(){
        setOpen(!open)
    }

    return (
        <>
            <div className={open ? styles.layouts__grid : styles.layouts__grid__close}>

                <header className={styles.header__grid}>
                  
                </header>

                <aside className={styles.aside__grid}>
                    <Sidebar toogleSidebar={handleSidebar} open={open} />
                </aside>

                <main className={styles.main__grid}>
                    {children}
                </main>

                <footer className={styles.footer__grid}>
                    <label>@{year} {nameCompany} &copy; todos os direitos reservados.</label>
                </footer>

            </div>
        </>
    )
}