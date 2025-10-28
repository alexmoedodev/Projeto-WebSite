// 📦 React
import Image from "next/image";

// 🧩 Components
import { Button } from "@/components/ui/Button/Button";

// 🖼️ Image Default
import defaultChair from "../../../../../../public/defaultChair.png";

// 🎨 Styles
import styles from "./hero.module.css";

export function Hero() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.container__details}>
              <div className={styles.details}>
                <span>New arrival..</span>
                <h1>
                  Elevate Your <br />Business To<br />The Next Leval
                </h1>
                <p>
                  Elevate your business to the next level by strengthening your online presence and brand identity. Gain visibility, credibility, and trust while standing out in the digital world. It’s more than just being online—it’s about building a lasting impression that connects, inspires, and drives your success.
                </p>
                <div className={styles.navegation}>
                  <Button
                    widthStyles="w-fit"
                    heigthStyles="h-lg"
                    variant="golden"
                    icon={true}
                  >
                    Buy now
                  </Button>
                  <Button
                    widthStyles="w-fit"
                    heigthStyles="h-lg"
                    variant="white"
                    icon={true}
                  >
                    Viwer details
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.image}>
              <div className={styles.image__hero}>
                <Image src={defaultChair} alt="Imagem do produto" priority />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
