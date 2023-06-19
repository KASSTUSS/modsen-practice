import Cards from "./cards/Cards"
import Button from '@/components/ui/button/Button'
import styles from './Main.module.css'

const Main = ({ booksData, isLoading }) => {
    return (
        <main className={styles.main}>
            <h1 className={styles.countResults}>
                {isLoading ? ''
                 : !!booksData.items ? 
                `Found ${booksData.totalItems} results` 
                : 'Start search any books!'}
            </h1>
            <Cards data={booksData.items} isLoading={isLoading}/>
            {(!!booksData.items && !isLoading) && (<Button value={'Load more...'}/>)}
        </main>
    )
}

export default Main