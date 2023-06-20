import Cards from "@components/Cards"

import styles from './styles.module.css'

const Main = ({ booksData, isLoading }) => {
    return (
        <main className={styles.main}>
            <Cards booksData={booksData} isLoading={isLoading}/>
        </main>
    )
}

export default Main