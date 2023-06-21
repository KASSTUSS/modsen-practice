import styles from './styles.module.css'

const CardsStatus = ({ totalBooksCount, isLoading }) => {

    return (
        <h1 className={styles.cards__status}>
            {isLoading ? ''
            : totalBooksCount ? 
            `Found ${totalBooksCount} results` 
            : 'Start search any books!'}
        </h1>
    )
}

export default CardsStatus