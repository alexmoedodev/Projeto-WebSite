
// 📦React
import Image from "next/image";

// Image
import defaultPromotion1 from "../../../../../../public/defaultProduct1.png";
import defaultPromotion2 from "../../../../../../public/defaultProduct2.png";

// 🧩 Components
import { Button } from "@/components/ui/Button/Button";

// 🎨 Styles
import styles from "./promotion.module.css";

export function Promotion() {
  return (
    <>
      <section className={styles.container}>

        <div className={styles.content}>
          <div className={styles.banner}>
            <div className={styles.details}>
              <label>Get 30% off</label>
              <h2>
                Whicker Hanging <br />
                Chairs
              </h2>
              <Button
                variant="golden"
                widthStyles="w-fit"
                heigthStyles="h-lg"
                icon={true}
              >
                By Now
              </Button>
            </div>

            <div>
              <Image
                src={defaultPromotion1}
                alt="Foto do produto da promoção"
                className={styles.image}
                quality={100}
              />
            </div>
          </div>

          {/*
           * ***********APAGAR DADOS VEM DO BANCO*********
           */}

          <div className={styles.banner}>
            <div className={styles.details}>
              <label>Get 15% off</label>
              <h2>
                Brasslegged
                <br />
                Armchair
              </h2>
              <Button
                variant="golden"
                widthStyles="w-fit"
                heigthStyles="h-lg"
                icon={true}
              >
                By Now
              </Button>
            </div>

            <div>
              <Image
                src={defaultPromotion2}
                alt="Foto do produto da promoção"
                className={styles.image}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
