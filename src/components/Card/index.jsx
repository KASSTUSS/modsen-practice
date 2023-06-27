import Image from "@ui/Image";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Card({ info }) {
  return (
    <Link to={`/card/${info.bookId}`} className={styles.card}>
      <Image src={info.urlImage} alt={info.title} height="200px"/>
      <div className={styles.card__info}>
        <h2 className={styles.card__title}>{info.title}</h2>
        <h4 className={styles.card__category}>{info.category}</h4>
        <p className={styles.card__authors}>{info.authors}</p>
      </div>
    </Link>
  );
}

export default Card;
