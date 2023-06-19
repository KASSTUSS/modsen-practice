import Cards from "./cards/Cards"
import styles from './Main.module.css'

const Main = ({ booksData, isLoading }) => {
    return (
        <main className={styles.main}>
            <Cards data={booksData} isLoading={isLoading}/>
        </main>
    )
}

export default Main