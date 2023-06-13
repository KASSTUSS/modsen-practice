import { useState, useRef, useEffect } from 'react'
import styles from './Select.module.css'
import { CSSTransition } from 'react-transition-group'

const Select = (props) => {
    const {
        options, 
        onChange,
        labelText
    } = props

    const [isActive, setIsActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])

    useEffect(() => {
        onChange(selectedOption)
    }, [selectedOption])

    const selectRef = useRef(null)
    document.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement != selectRef.current && e.target.parentElement != selectRef.current && e.target != selectRef.current && isActive) setIsActive(!isActive)
    })

    let optionKey = 1

    return (
        <div
            ref={selectRef}
            onClick={() => setIsActive(!isActive)}
            className={isActive ? styles.select + ' ' + styles.select_active : styles.select}
        >
            {labelText && (
                <div className={styles.select__label}>
                    {labelText + ':'}
                </div>
            )}
            <div
                className={styles.select__selectedOption}
            >
                {selectedOption.title}
            </div>
            <span className={styles.arrow}>
                <span></span><span></span>
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
                        {
                            options.map(option => (
                                <div 
                                    key={optionKey++}
                                    className={(option === selectedOption) ? styles.select__option + ' ' + styles.select__option_active : styles.select__option }
                                    value={option.value}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option.title}
                                </div>
                            ))
                        }
                    </div>
            </CSSTransition>
        </div>
    )
}

export default Select