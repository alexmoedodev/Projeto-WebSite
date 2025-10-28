import { FaRegWindowClose } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

type StatusProps = {
    icon: boolean

}

export function StatusTable({ icon }: StatusProps) {

    if (icon) {
        return <FaRegSquareCheck color="green" size={15} title="Ativo" />
    } else {
        return <FaRegWindowClose color="red" size={15} title="Inativo" />
    }


}