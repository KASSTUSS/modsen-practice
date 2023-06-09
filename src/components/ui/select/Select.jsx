import styles from './Select.module.css'

const Select = ({ name, id, options }) => {
    return (
        <select className={styles.select} name={name || ''} id={id || ''}>
            {
                options.map(option => <option value={option.value} >{option.content}</option>)
            }
        </select>
    )
}

export default Select