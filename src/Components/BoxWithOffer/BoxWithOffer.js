import styles from "./BoxWithOffer.module.css";

const BoxWithOffer = ({ item }) => {
  return (
    <div className={styles.offerItem}>
      <p className={styles.paragraphs}>{item.name}</p>
      {item.isNew ? <p className={styles.paragraphs}>(nowość)</p> : null}
      {item.isNew ? <div className={styles.redDot}></div> : null}
    </div>
  );
};

export default BoxWithOffer;
