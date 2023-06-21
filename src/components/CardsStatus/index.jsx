import styles from './styles.module.css'

const CardsStatus = ({ booksData, isLoading }) => {

    return (
        <h1 className={styles.cards__status}>
            {isLoading ? ''
            : booksData ? 
            `Found ${booksData.totalItems} results` 
            : 'Start search any books!'}
        </h1>
    )
}

export default CardsStatus