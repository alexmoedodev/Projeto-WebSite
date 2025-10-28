// 🎨 Styles
import styles from "./recordsCount.module.css";

type RecordsCoutsProps = {
  totalRecords: number;
  totalFiltereds: number;
};

export function RecordsCouts({
  totalFiltereds,
  totalRecords,
}: RecordsCoutsProps) {
  return (
    <>
      <div className={styles.container__records}>
        <p>Total de registros Cadastrados: <strong>{totalRecords}</strong> </p>
        <p>Total de registros Filtrados: <strong>{totalFiltereds}</strong></p>
      </div>
    </>
  );
}
