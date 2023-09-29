import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav class="nav">
        <div class="nav-container">
          <p>moja firma</p>
          <ul class="nav-item-container">
            <div class="nav-item">
              <a class="nav-item-btn" href="#about" title="Idź do sekcji O NAS">
                o nas
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-item-btn"
                href="#offer"
                title="Idź do sekcji OFERTA"
              >
                oferta
              </a>
            </div>
            <div class="nav-item">
              <a
                class="nav-item-contact-btn"
                title="
            kontakt"
              >
                kontakt
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <div class="shadow">
        <section
          class="landing-page"
          style={{ backgroundImage: "url(/assets/section-background.png)" }}
        >
          <div class="landing-page-container">
            <h1 class="heading-landing-page">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p class="primary-paragraph">Nie wierz nam na słowo - sprawdź</p>
            <a class="offer-btn" href="#offer">
              oferta
            </a>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
