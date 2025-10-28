"use client";
// 📦 React
import Link from "next/link";

// 👤 Icon
import { GiHamburgerMenu } from "react-icons/gi";

// 🧩 Components
import { ImageLogoCompany } from "@/components/ui/ImageLogoCompany/ImageLogo";

// 🎨 styles
import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.container__logo__company}>
            <ImageLogoCompany />
          </div>
          <nav>
            <Link href={""} title="Home">
              Home
            </Link>
            <Link href={""} title="About">
              About
            </Link>
            <Link href={""} title="Shop">
              Shop
            </Link>
            <Link href={""} title="Blog">
              Blog
            </Link>
            <Link href={""} title="Contact">
              Contact
            </Link>
          </nav>

          <div className={styles.menuMoblie}>
            <GiHamburgerMenu />
          </div>
        </div>
      </header>
    </>
  );
}
