import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './styles.module.css'

const Select = ({ options, onChange, labelText }) => {

    const [isActive, setIsActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleSelectOption = (option) => {
        setSelectedOption(option)
    }

    const handleClick = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        onChange(selectedOption)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption])

    const selectRef = useRef(null)
    document.addEventListener('click', (e) => {
        if (!selectRef.current.contains(e.target) && isActive) {
            setIsActive(!isActive)
        }
    })

    let optionKey = 1

    return (
        <div
            ref={selectRef}
            onClick={handleClick}
            className={
                isActive ? 
                styles.select + ' ' + styles.select_active 
                : styles.select
            }
        >
            {labelText && (
                <div className={styles.select__label}>
                    {labelText + ':'}
                </div>
            )}

            <div className={styles.select__selectedOption}>
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
                                className={
                                    (option === selectedOption) ? 
                                    styles.select__option + ' ' + styles.select__option_active 
                                    : styles.select__option 
                                }
                                value={option.value}
                                onClick={() => handleSelectOption(option)}
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