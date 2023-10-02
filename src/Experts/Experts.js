import styles from "./Experts.module.css";
const Experts = () => {
  return (
    <section className={styles.primaryMainContainer}>
      <div className="primary-content-wraper">
        <h2 className="primary-main-heading">Nasi specjaliści</h2>
        <section className="specialists-container" id="about">
          <div className="first-specjalist">
            <div className="specjalist-pic-Marek-item"></div>
            <div className="specjalist-text-Marek">
              <h3 className="specialists-heading">
                Marek Nowak DZIAŁ SPRZEDAŻY
              </h3>
              <p className="secondary-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                similique quisquam quis asperiores quo at doloribus ex officia
                maxime, porro eaque tenetur quod facilis magni quos illo velit
                ab explicabo.
              </p>
            </div>
          </div>
          <div className="second-specjalist">
            <div className="specjalist-pic-Piotr-item"></div>
            <div className="specjalist-text-Piotr">
              <h3 className="specialists-heading">
                Piotr Kowalski DZIAŁ ZAMÓWIEŃ
              </h3>
              <p className="secondary-paragraph">
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
