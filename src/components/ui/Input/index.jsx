import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

import styles from './styles.module.css';

function Input({ placeholder, onChange, searchButton, onClickButton }) {
  const inputRef = useRef(null);

  const handlerKeyDown = e => {
    if (e.keyCode === 13) {
      onClickButton();
      inputRef.current.blur();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={inputRef}
        type='text'
        className={styles.input}
        placeholder={placeholder || ''}
        onChange={e => {
          onChange(e.target.value);
        }}
        onKeyDown={e => {
          handlerKeyDown(e);
        }}
      />
      {searchButton && (
        <button
          type='button'
          className={styles.searchButton}
          onClick={onClickButton}
        >
          <BiSearch color='#ffffff' size='18px' />
        </button>
      )}
    </div>
  );
}

export default Input;
