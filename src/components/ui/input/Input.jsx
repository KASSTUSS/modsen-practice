import { useState, useRef } from 'react'
import styles from './Input.module.css'

const Input = (props) => {
    const {
        placeholder,
        onChange,
        searchButton,
        onClickButton
    } = props

    const inputRef = useRef(null)

    return (
        <div className={styles.inputContainer}>
            <input 
                ref={inputRef}
                className={styles.input}
                type="text" 
                placeholder={placeholder || ''}
                onChange={() => {
                    onChange(inputRef.current.value)
                }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        onClickButton()
                    }
                }}
            />
            {searchButton && (
                <button 
                    className={styles.searchButton}
                    onClick={onClickButton}
                >
                    <img className={styles.searchButton__icon} src="../../../../public/img/search.svg" alt="" />
                </button>
            )}
        </div>
    )
}

export default Input