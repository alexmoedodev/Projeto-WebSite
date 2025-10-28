import styles from "./titlePage.module.css";

type TitlePageProps = {
  titlePage: string;
  label: boolean;
};

export function TitlePage({ titlePage, label = true }: TitlePageProps) {
  const requiredFields =
    "Campos com (*) são campos obrigatórios de preenchimento.";

  return (
    <>
      <div className={styles.container__title__page}>
        <div className={styles.content}>
          <h1>{titlePage}</h1>
          {label && <label>{requiredFields}</label>}
        </div>
        <hr />
      </div>
    </>
  );
}
