// ⚙️ Services
import { WhyChooseService } from "@/services/whyChoose";

// 🎨 Styles
import styles from "./whyChoose.module.css";

export function WhyChoose() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>

          {WhyChooseService && WhyChooseService.map((item, index) => (

            <div className={styles.services} key={index}>
              <div>
                <span>{item.icon}</span>
              </div>
              <div className={styles.details}>
                <label>{item.name}</label>
                <span>{item.details}</span>
              </div>
            </div>

          ))}

        </div>



      </section>
    </>
  );
}
