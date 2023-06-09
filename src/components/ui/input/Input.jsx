import styles from './Input.module.css'

const Input = ({ name, id, placeholder }) => {
    return (
        <input 
            className={styles.input} 
            type="text" 
            name={name || '1'} 
            id={id || ''} 
            placeholder={placeholder || '1'}
        />
    )
}

export default Input