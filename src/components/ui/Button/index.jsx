import styles from './styles.module.css'

const Button = ({ onClick, value }) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Button