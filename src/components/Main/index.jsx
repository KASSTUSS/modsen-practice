import Cards from "@components/Cards"

import styles from './styles.module.css'

const Main = ({ cardsData, isLoading, handleLoadMore, totalBooksCount }) => {
    return (
        <main className={styles.main}>
        <Cards totalBooksCount={totalBooksCount} handleLoadMore={handleLoadMore} cardsData={cardsData} isLoading={isLoading}/>
        </main>
    )
}

export default Main