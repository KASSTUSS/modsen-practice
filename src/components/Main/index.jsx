import Cards from "@components/Cards"

import styles from './styles.module.css'

const Main = ({ booksData, isLoading, searchData }) => {
    return (
        <main className={styles.main}>
            <Cards searchData={searchData} booksData={booksData} isLoading={isLoading}/>
        </main>
    )
}

export default Main