import styles from "./Experts.module.css";

const Experts = () => {
  return (
    <section className={styles.primaryMainContainer}>
      <div className={styles.primaryContentWraper}>
        <h2 className={styles.primaryMainHeading}>Nasi specjaliści</h2>
        <section className={styles.specialistsContainer} id="about">
          <div className={styles.firstSpecjalist}>
            <div className={styles.specjalistPicMarekItem}></div>
            <div className={styles.specjalistTextMarek}>
              <h3 className={styles.specialistsHeading}>
                Marek Nowak DZIAŁ SPRZEDAŻY
              </h3>
              <p className={styles.secondaryParagraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                similique quisquam quis asperiores quo at doloribus ex officia
                maxime, porro eaque tenetur quod facilis magni quos illo velit
                ab explicabo.
              </p>
            </div>
          </div>
          <div className={styles.secondSpecjalist}>
            <div className={styles.specjalistPicPiotrItem}></div>
            <div className={styles.specjalistTextPiotr}>
              <h3 className={styles.specialistsHeading}>
                Piotr Kowalski DZIAŁ ZAMÓWIEŃ
              </h3>
              <p className={styles.secondaryParagraph}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, quas. Illo quo quidem aspernatur quod esse ullam
                magnam. Itaque enim optio cumque saepe inventore laboriosam
                voluptates sunt veniam beatae accusantium!
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experts;
