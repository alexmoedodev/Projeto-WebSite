// 📦 React
import Link from "next/link";
import Image from "next/image";

// Icon
import { FaHome } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";
import { BiSolidEditAlt } from "react-icons/bi";

// 🎨 Styles
import styles from "./sidebar.module.css";

// Image avatar ---> Remover image vem do banco
import AvatarUser from "../../../../../public/avatar.jpg";

type SidebarProps = {
  open: boolean;
  toogleSidebar: () => void;
};

export function Sidebar({ open, toogleSidebar }: SidebarProps) {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.header__sidebar}>
          <div className={styles.avatar__user}>
            <Image
              src={AvatarUser}
              alt="Foto do usuário"
              width={50}
              height={50}
            />
          </div>

          <div className={styles.toogle__sidebar}>
            <button
              onClick={toogleSidebar}
              aria-label="Fechar e Abrir sidebar"
              title={open ? "Fechar Menu Lateral" : "Abrir Menu Lateral"}
              className={open ? "" : styles.toogle__open}
            >
              <HiOutlineMenuAlt1 />
            </button>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link
                href="/dashboard"
                className={open ? "" : styles.li__close}
                title="Navegar para home"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>

            <li className={styles.li}>
              <Link
                href="/usuarios"
                className={open ? "" : styles.li__close}
                title="Usuários"
              >
                <FaUserAlt /> <span>Usuários</span>
              </Link>
            </li>

            <li className={styles.li}>
              <Link
                href="/empresa"
                className={open ? "" : styles.li__close}
                title="Dados da empresa"
              >
                <IoStorefrontSharp /> <span>Empresa</span>
              </Link>
            </li>

            <li className={styles.li}>
              <Link
                href="/editar-site"
                className={open ? "" : styles.li__close}
                title="Editar site"
              >
                <BiSolidEditAlt /> <span>Editar site</span>
              </Link>
            </li>

            <li className={styles.li}>
              <Link
                href="/"
                className={open ? "" : styles.li__close}
                title="Abrir o site em uma nova aba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiWorld /> <span>Ver site</span>
              </Link>
            </li>

            <li className={styles.li}>
              <Link
                href="/logs"
                className={open ? "" : styles.li__close}
                title="Registros do sistema"
              >
                <HiArrowPath /> <span>Logs</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
