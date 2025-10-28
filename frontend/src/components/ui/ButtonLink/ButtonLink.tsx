import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./buttonLink.module.css";
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { IoMdAdd } from "react-icons/io"; 


type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  variant: "danger" | "new"
  widthStyles?: "w-full" | "w-fit" | "w-sm" | "w-md" | "w-lg";
  heigthStyles?: "h-sm" | "h-md" | "h-lg";
  icon?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  children,
  href,
  title,
  variant,
  widthStyles = "w-fit",
  heigthStyles = "h-md",
  icon = false,
  className,
  ...props
}: ButtonLinkProps) {
  const IconStyles = {
    danger: <FaArrowLeft />,
    new: <IoMdAdd />,

  };

  return (
    <>
      <Link
        className={`
     ${styles.button__link}
     ${styles[variant]}
      ${styles[widthStyles]}
      ${styles[heigthStyles]}
      ${className}
      `}
        href={href}
        title={TITLE_BUTTON.CANCEL(title)}
        {...props}
      >
        {icon && <span>{IconStyles[variant]}</span>}

        {children}
      </Link>
    </>
  );
}
