// 📦 React
import Image from "next/image";

// Image
import BlogRecent from "../../../../../../public/blog-recent.jpg";
import BlogRecent2 from "../../../../../../public/blog-recent2.jpg";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";

// 🎨 Styles
import styles from "./readBlog.module.css";

export function ReadBlog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <label> Read Blog</label>
          <h1>Recent Blog</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.recentBlog}>
            <div className={styles.details}>
              <label className={styles.nameProduct}>Chair Design</label>

              <div className={styles.testimony}>
                <label htmlFor="">By Alex Manie</label>
                <span>07 jan, 2025</span>
              </div>

              <h2>
                Arrangement Thats&apos;s <br />
                Nearly Perfect
              </h2>

              <Button variant="golden">See details</Button>
            </div>

            <div className={styles.containerImage}>
              <Image src={BlogRecent} alt="Imagem do produto" 
              quality={100}/>
            </div>
          </div>

          {/* Remover :  Daddos viram do banco de dados. */}
          <div className={styles.recentBlog}>
            <div className={styles.details}>
              <label className={styles.nameProduct}>Sofa Desing</label>

              <div className={styles.testimony}>
                <label htmlFor="">By Cris Nelson</label>
                <span>12 jan, 2025</span>
              </div>

              <h2>
                Eworkstation
                <br />
                Arrangement Thats&apos;s
              </h2>

              <Button variant="golden">See details</Button>
            </div>

            <div className={styles.containerImage}>
              <Image src={BlogRecent2} alt="Imagem do produto" quality={100}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
