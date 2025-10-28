

import React from "react";
import styles from "./Button.module.css";

import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io"; 
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

type ButtonProps = {
  children?: React.ReactNode;
  variant: "golden" | "white" | "violet" | "success" | "danger"| "new" | "edit" | "delete"
  widthStyles?: "w-full" | "w-fit" | "w-sm" | "w-md" | "w-lg";
  heigthStyles?: "h-sm" | "h-md" | "h-lg";
  icon?: boolean;
 
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  widthStyles = "w-fit",
  heigthStyles = "h-md",
  icon = false,

  className,
  ...props
}: ButtonProps) {
  const iconStyles = {
    golden: <IoIosArrowForward />,
    white: <IoIosArrowForward />,
    success: <FaCheck />,
    violet: "",
    danger: "",
    new: < IoMdAdd />,
    edit: < MdEdit />,
    delete: < MdDeleteForever />,

  };

  return (
    <>
      <button
        className={`${styles.button}
         ${styles[variant]}
          ${styles[widthStyles]}
           ${styles[heigthStyles]} 
           ${className}`}
          
        {...props}
      >
        {icon && <span className={styles.icon}>{iconStyles[variant]}</span>}
        {children}
      </button>
    </>
  );
}
