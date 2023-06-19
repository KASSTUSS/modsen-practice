import Cards from "@components/Cards"
import Button from '@ui/Button'
import styles from './styles.module.css'

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