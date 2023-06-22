import { useRef } from "react";

import styles from "./styles.module.css";

function Input({ placeholder, onChange, searchButton, onClickButton }) {
  const inputRef = useRef(null);

  const handlerKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickButton();
      inputRef.current.blur();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder={placeholder || ""}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          handlerKeyDown(e);
        }}
      />
      {searchButton && (
        <button
          type="button"
          className={styles.searchButton}
          onClick={onClickButton}
        >
          <svg
            className={styles.searchButton__icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            height="96"
            width="96"
          >
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.92 11.34C8.91338 11.34 11.34 8.91338 11.34 5.92C11.34 2.92662 8.91338 0.5 5.92 0.5C2.92662 0.5 0.5 2.92662 0.5 5.92C0.5 8.91338 2.92662 11.34 5.92 11.34Z"
            />
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 13.5L9.75 9.75"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Input;
