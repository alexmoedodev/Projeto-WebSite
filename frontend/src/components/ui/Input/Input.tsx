import styles from "./input.module.css";
import React, { forwardRef } from "react";

type InputPrpos = {
  title: string;
  widthStyles: "w-full" | "w-fit" | "w-sm" | "w-md" | "w-lg";
  heigthStyles: "h-sm" | "h-md" | "h-lg";
  label?: string;
  requiredField?: boolean;
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputPrpos>(
  (
    {
      title,
      widthStyles = "w-fit",
      heigthStyles = "h-md",
      label,
      requiredField = false,
      error,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div className={styles.field__label}>
          {label && (
            <label
              className={`${styles.label} 
            ${requiredField ? "required" : ""}`}>
              {label}
            </label>
          )}

          <input
            className={`${styles.input} 
            ${styles[widthStyles]}
             ${styles[heigthStyles]}
             ${error ? styles.error : ""}
              ${className ?? ""}`}
            ref={ref}
            title={title}
            aria-invalid={!!error}
            {...props}
          />
          {error && (
            <p className={styles.errorMessage}>{error}</p>

          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
