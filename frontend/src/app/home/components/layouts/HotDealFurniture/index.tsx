// 📦 React
import Image from "next/image";

// 🧩 Components
import { Button } from "@/components/ui/Button/Button";

// Image
import defaultLivingRoom from "../../../../../../public/defaultLivingRoom.jpg";

// 🎨 Styles
import styles from "./hotDealFurniture.module.css";

export function HotDealFurniture() {
  return (
    <>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.banner}>
            <div className={styles.card__details}>
              <div className={styles.details}>
                <label>hot deal furniture</label>
                <div>
                  <h1>Live Furniture</h1>
                  <h2>Your Love</h2>
                </div>
                <Button widthStyles="w-fit" variant="white">
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.image__background}>
            <Image
              src={defaultLivingRoom}
              alt="Foto ilustrando como ficaria o movel no ambiente."
            />
          </div>
        </div>
      </article>
    </>
  );
}
