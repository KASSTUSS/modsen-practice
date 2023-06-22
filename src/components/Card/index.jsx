import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Card({ info }) {
  return (
    <Link to={`/card/${info.bookId}`} className={styles.card}>
      {!info.urlImage ? (
        <div className={styles.card__noImage}>No images</div>
      ) : (
        <img className={styles.card__image} src={info.urlImage} alt="" />
      )}
      <div className={styles.card__info}>
        <h2 className={styles.card__title}>{info.title}</h2>
        <h4 className={styles.card__category}>{info.category}</h4>
        <p className={styles.card__authors}>{info.authors}</p>
      </div>
    </Link>
  );
}

export default Card;
