import Cards from "./cards/Cards"
import Button from '@/components/ui/button/Button'
import styles from './Main.module.css'

const Main = ({ booksData, isLoading }) => {
    return (
        <main className={styles.main}>
            <h1 className={styles.countResults}>{`Found ${booksData.totalItems} results`}</h1>
            <Cards data={booksData.items} isLoading={isLoading}/>
            <Button value={'Load more...'}/>
        </main>
    )
}

export default Main