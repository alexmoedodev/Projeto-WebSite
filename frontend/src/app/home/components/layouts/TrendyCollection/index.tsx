"use client"
// 📦 React
import Image from "next/image";
import { useState } from "react";

// 🎨 Styles
import styles from "./trendyCollection.module.css";

// ⚙️ Services
import { products, ProductsProps } from "@/services/products";

export function TrendyCollection() {
  const [filtersProducts, setFiltersProducts] = useState<ProductsProps[]>(products)


  function handleProductsOff() {
    const off = products.filter((item) => item.off)
    if (off) {
      setFiltersProducts(off)
    }
  }

  function handleFilters(filters: ProductsProps["filters"]) {
    if (filters === "All") {
      setFiltersProducts(products)
    }
    else {
      setFiltersProducts(products.filter((item) => item.filters === filters))
    }

  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <div>
            <label>This month</label>
            <h1>Trendy Collection</h1>

            <p>All filtered products: {filtersProducts.length}</p>
          </div>

          <nav>
            <ul>
              <li>
                <button onClick={() => handleFilters("All")}>All Collection</button>
              </li>
              <li>
                <button onClick={() => handleFilters("New In")}>New In</button>
              </li>
              <li>
                <button onClick={() => handleFilters("Top Rated")}>Top Rated</button>
              </li>
              <li>
                <button onClick={() => handleFilters("Tensing Items")}>Tensing Items</button>
              </li>
              <li>
                <button onClick={handleProductsOff}>Discounted off
</button>
              </li>
            </ul>
          </nav>
        </div>



        <div className={styles.content}>

          {filtersProducts.map((item, index) => (
            <div className={styles.product} key={index}>
              <div className={styles.image__product}>
                <Image
                  src={item.img}
                  alt="Foto do produto"
                  width={150}
                  height={150}
                  priority
                  title={item.name}

                />
              </div>

              {filtersProducts && item.off && (
                <div className={styles.off}>
                  <span>{item.off}</span>
                </div>
              )}


              <div className={styles.details__product}>
                <label>{item.name}</label>
                <div className={styles.stars}>
                  {item.stars}
                </div>
                <span>{item.price}</span>
              </div>
            </div >
          ))}
        </div>
      </section>
    </>
  );
}
