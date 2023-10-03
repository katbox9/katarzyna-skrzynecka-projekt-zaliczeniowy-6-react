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
                  <p>{item.name}</p>
                  {item.isNew === true ? <p>(nowość)</p> : null}
                  {item.isNew === true ? (
                    <div className={styles.redDot}></div>
                  ) : null}
                </div>
              );
            })}
            {/* <div className="offer-item">
              <p>Usługa 1</p>
              <p>(nowość)</p>
              <div className="red-dot"></div>
            </div>
            <div className="offer-item">Usługa 2</div>
            <div className="offer-item">Usługa 3</div>
            <div className="offer-item">Usługa 4</div>
            <div className="offer-item">Usługa 5</div>
            <div className="offer-item">Usługa 6</div> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Offers;
