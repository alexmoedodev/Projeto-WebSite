
// Icons 
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// 🎨 Styles
import styles from "./testimonials.module.css";

export function Testimonials() {
  return (
    <>
      <article className={styles.container__background}>
        <div className={styles.container}>
          <div className={styles.title}>
            <label>Testimonials</label>
            <h1>Client Feedback</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.feedback}>
              <div className={styles.avaliation__header}>
                <div className={styles.assessment}>
                  <div className={styles.stars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <label>Ralph Edwards</label>
                  <span>UI/UX Designer</span>
                </div>

                <div className={styles.quote__right}>
                  <FaQuoteRight />
                </div>
              </div>
              <div className={styles.testimony}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor, deleniti excepturi. Eum ut distinctio cumque neque unde
                  saepe atque repellendus consectetur minus quibusdam, dolor
                  maxime blanditiis. Earum at dolore tempora.
                </p>
              </div>
            </div>

            {/* Remover : Dados vem do banco de dados */}

            <div className={styles.feedback}>
              <div className={styles.avaliation__header}>
                <div className={styles.assessment}>
                  <div className={styles.stars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <label>Jerome Bell</label>
                  <span>Web Designer</span>
                </div>

                <div className={styles.quote__right}>
                  <FaQuoteRight />
                </div>
              </div>
              <div className={styles.testimony}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor, deleniti excepturi. Eum ut distinctio cumque neque unde
                  saepe atque repellendus consectetur minus quibusdam, dolor
                  maxime blanditiis. Earum at dolore tempora.
                </p>
              </div>
            </div>

            <div className={styles.feedback}>
              <div className={styles.avaliation__header}>
                <div className={styles.assessment}>
                  <div className={styles.stars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <label>Annette Black</label>
                  <span>Dog Trainer</span>
                </div>

                <div className={styles.quote__right}>
                  <FaQuoteRight />
                </div>
              </div>
              <div className={styles.testimony}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor, deleniti excepturi. Eum ut distinctio cumque neque unde
                  saepe atque repellendus consectetur minus quibusdam, dolor
                  maxime blanditiis. Earum at dolore tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
