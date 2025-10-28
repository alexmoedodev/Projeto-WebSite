import { Button } from "@/components/ui/Button/Button";
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import styles from "./buttonFooterAction.module.css";

type ButtonsFooterActionProps = {
  titleButtonSave: string;
  titleButtonLinkCancel: string;
  href: string;
 
};

export function ButtonsFooterActions({
  titleButtonSave,
  titleButtonLinkCancel,
  href,

}: ButtonsFooterActionProps) {
  return (
    <>
      <div className={styles.container__footer__form}>
        <hr />
        <div className={styles.btn__footer__actions}>
          <Button
            variant="success"
            icon={true}
            title={TITLE_BUTTON.SAVE(titleButtonSave)}
            type="submit"
       

          >
            Salvar
          </Button>

          <ButtonLink
            title={titleButtonLinkCancel}
            href={href}
            heigthStyles="h-md"
            widthStyles="w-fit"
            variant="danger"
            icon={true}
          >
            Voltar
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
