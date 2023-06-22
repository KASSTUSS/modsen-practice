import styles from "./styles.module.css";

function Button({ onClick, value }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
