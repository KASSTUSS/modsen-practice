import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import uuid from "react-uuid";

import styles from "./styles.module.css";

function Select({ options, onChange, labelText }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  const selectRef = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!selectRef.current.contains(e.target) && isActive) {
        setIsActive(!isActive);
      }
    });
  }, []);

  return (
    <div
      ref={selectRef}
      onClick={handleClick}
      className={
        isActive ? `${styles.select} ${styles.select_active}` : styles.select
      }
    >
      {labelText && (
        <div className={styles.select__label}>{`${labelText}:`}</div>
      )}

      <div className={styles.select__selectedOption}>
        {selectedOption.title}
      </div>

      <span className={styles.arrow}>
        <span />
        <span />
      </span>

      <CSSTransition
        in={isActive}
        timeout={250}
        classNames={{
          enterActive: styles.select__options_entering,
          exitActive: styles.select__options_exiting,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={`${styles.select__options}`}>
          {options.map((option) => (
            <div
              key={uuid()}
              className={
                option === selectedOption
                  ? `${styles.select__option} ${styles.select__option_active}`
                  : styles.select__option
              }
              value={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Select;
