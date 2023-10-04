import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWraper}>
        <div className={styles.footerText}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className={styles.iconsContainer}>
          <a className={styles.iconsBtn} href="#">
            <i
              className="fa-brands fa-instagram fa-2xl"
              style="color: #ffffff"
              title="Odwiedź nasz Instagram"
              alt="Profil firmy na Instagram"
            ></i>
          </a>

          <a className="icons-btn" href="#">
            <i
              className="fa-brands fa-square-facebook fa-2xl"
              style="color: #ffffff"
              title="Odwiedź nasz Facebook"
              alt="Profil firmy na Facebook"
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
