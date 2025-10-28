"use client"
// 📦 React
import Image from "next/image";

// 🎨 Styles
import styles from "./topSale.module.css";

// ⚙️ Services
import { products } from "@/services/products";


export function TopSale() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title__top__sale}>
            <label>Top sale</label>
            <h1>Feactured Product</h1>
          </div>

          <div className={styles.carrocel}>
            <div className={styles.group}>

              {products && products.map((item, index) => (

                <div className={styles.products} key={index}>
                  <div className={styles.image__product}>
                    <Image src={item.img} alt={item.name} width={200} height={200}/>
                  </div>

                  <div className={styles.details}>
                    <label>{item.name}</label>
                    <div className={styles.avaliation}>
                      {item.stars}
                    </div>
                    <span>{item.price}</span>
                  </div>
                </div>

              ))}

            </div>
            <div aria-hidden className={styles.group}>

              {products && products.map((item, index) => (

                <div className={styles.products} key={index}>
                  <div className={styles.image__product}>
                    <Image src={item.img} alt={item.name} width={200} height={200} quality={100} priority />
                  </div>

                  <div className={styles.details}>
                    <label>{item.name}</label>
                    <div className={styles.avaliation}>
                      {item.stars}
                    </div>
                    <span>{item.price}</span>
                  </div>
                </div>

              ))}

            </div>
          </div>
        </div>
      </section >
    </>
  );
}
