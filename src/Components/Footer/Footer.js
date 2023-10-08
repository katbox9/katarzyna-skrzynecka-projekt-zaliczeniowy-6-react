import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWraper}>
        <div className={styles.footerText}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className={styles.iconsContainer}>
          <a className={styles.iconsBtn} href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              title="Odwiedź nasz Instagram"
              aria-label="Instagram"
              size={25}
            />
          </a>

          <a className={styles.iconsBtn} href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              title="Odwiedź nasz Facebook"
              aria-label="Facebook"
              size={25}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
