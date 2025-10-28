import styles from "./alertMessage.module.css"
import { FaCheck } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

type AlertMessageProps = {
    children: React.ReactNode
    variant: "error" | "success"
    widthStyles: "w-full"
}

export function AlertMessage({ children, variant, widthStyles = "w-full" }: AlertMessageProps) {


    const icon = {
        error: <MdOutlineErrorOutline size={20}/>,
        success: <FaCheck size={20} />
    }

    return (
        <div className={`${styles.alert} ${styles[variant]} ${styles[widthStyles]}`}>
            <p>{icon[variant]} {children}</p>
        </div>
    )
}