import Cards from "./cards/Cards"
import styles from './Main.module.css'

const Main = (props) => {
    const {
        booksData,
        isLoading
    } = props

    return (
        <main className={styles.main}>
            <Cards data={booksData} isLoading={isLoading}/>
        </main>
    )
}

export default Main