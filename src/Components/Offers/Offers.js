import styles from "./Offers.module.css";
import offers from "../../data/offers";

const Offers = () => {
  return (
    <section className={styles.secondaryMainContainer}>
      <div className={styles.secondaryContentWraper}>
        <h2 className={styles.secondaryMainHeading}>
          Czym zajmuje się nasza firma?
        </h2>
        <section className={styles.offerSection} id="offer">
          <div className={styles.offerContainer}>
            {offers.map((item) => {
              return (
                <div className={styles.offerItem}>
                  <p className={styles.paragraphs}>{item.name}</p>
                  {item.isNew === true ? (
                    <p className={styles.paragraphs}>(nowość)</p>
                  ) : null}
                  {item.isNew === true ? (
                    <div className={styles.redDot}></div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Offers;
