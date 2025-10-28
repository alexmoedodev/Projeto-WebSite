"use client"
//📦 React
import Link from "next/link"

// icon 
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// 🧩 Components
import { ImageLogoCompany } from "@/components/ui/ImageLogoCompany/ImageLogo";

// 🎨 Styles
import styles from "./footer.module.css"


export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.content__footer}>
                    <div className={styles.logo__company}>
                        <ImageLogoCompany />
                    </div>
                    <div className={styles.social__media}>
                        <Link
                            href={"https://facebook.com.br"}
                            title="Faceboock"
                            aria-label="Link Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare />
                        </Link>
                        <Link
                            href={"https://instagram.com.br"}
                            title="Instagram"
                            aria-label="Link Instagram"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaSquareInstagram />
                        </Link>
                        <Link
                            href={"https://twitter.com.br"}
                            title="Twiter"
                            aria-label="Link Twitter"
                            target="_blank"
                            rel="noopener noreferrer">
                            < FaTwitter />
                        </Link>
                        <Link
                            href={"https://youtube.com.br"}
                            title="Youtube"
                            aria-label="Link Youtube"
                            target="_blank"
                            rel="noopener noreferrer">

                            < IoLogoYoutube />
                        </Link>

                    </div>

                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Blog</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.data__company}>
                        <div className={styles.document__name__company}>
                            <span >CNPJ : 22.013.394/0001-55</span>
                            <span>LA SOLUÇÕES COMERCIAIS</span>
                        </div>


                        <Link
                            href={"https://www.google.com.br/maps/search/?api=1&query=Av.+Paulista,+1285+Bela+Vista,+São+Paulo,+SP"}
                            title="Abrir no google maps"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            < FaLocationDot />Av. Paulista, 1285
                        </Link >
                        <span>Bela Vista - São Paulo - SP</span>
                        <span>Email: email@email.com</span>

                        <div className={styles.contact}>


                            <Link href={"https://wa.me/5511992619304?text=Olá,+vim+pelo+do+site!"}>
                                < FaWhatsapp />(11) 94045-1410
                            </Link>
                            <Link href={"tel:+5511992619304"}>
                                < FaPhoneAlt />(11) 2735-2897
                            </Link>
                        </div>

                    </div>



                </div>

            </footer>
        </>
    )
}