import styles from "./Header.module.css";
import background from "../../assets/section-background.png";

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
                href="/#"
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
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className={styles.landingPageContainer}>
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
