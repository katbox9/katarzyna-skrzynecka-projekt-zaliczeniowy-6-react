import styles from "./Offers.module.css";
import offers from "../../data/offers";
import BoxWithOffer from "../BoxWithOffer/BoxWithOffer";

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
              return <BoxWithOffer item={item} />;
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Offers;
