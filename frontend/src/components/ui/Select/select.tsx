import React from "react";
import styles from "./select.module.css";

type SelectProps = {
  title: string;
  widthStyles: "w-full" | "w-fit" | "w-sm" | "w-md" | "w-lg";
  heigthStyles: "h-sm" | "h-md" | "h-lg";
  label?: string;
  requiredSelect?: boolean
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  title,
  widthStyles = "w-fit",
  heigthStyles = "h-md",
  label,
  requiredSelect = false,
  className,
  ...props
}: SelectProps) {
  return (
    <>
      <div className={styles.field__label}>
        {label && <label className={`${styles.label} ${ requiredSelect ? "required" : ""}`}>{label}</label>}
        <select
          title={title}
          className={`${styles.select} ${styles[widthStyles]} ${styles[heigthStyles]} ${className}`}
          {...props}
        ></select>
      </div>
    </>
  );
}
