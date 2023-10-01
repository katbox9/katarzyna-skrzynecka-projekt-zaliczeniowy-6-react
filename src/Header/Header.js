import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <p>moja firma</p>
          <ul className={styles.navItemContainer}>
            <div className={styles.navItem}>
              <a
                className={styles.navItemBtn}
                href="#about"
                title="Idź do sekcji O NAS"
              >
                o nas
              </a>
            </div>
            <div className={styles.navItem}>
              <a
                className={styles.navItemBtn}
                href="#offer"
                title="Idź do sekcji OFERTA"
              >
                oferta
              </a>
            </div>
            <div className={styles.navItem}>
              <a
                className={styles.navItemContactBtn}
                title="
            kontakt"
              >
                kontakt
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <div className={styles.shadow}>
        <section
          className={styles.landingPage}
          style={{ backgroundImage: "url(/assets/section-background.png)" }}
        >
          <div className={styles.landinPageContainer}>
            <h1 className={styles.headingLandingPage}>
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className={styles.primaryParagraph}>
              Nie wierz nam na słowo - sprawdź
            </p>
            <a className={styles.offerBtn} href="#offer">
              oferta
            </a>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
