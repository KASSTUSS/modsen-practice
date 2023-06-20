import Card from "@components/Card"
import Button from '@ui/Button'
import Loader from '@ui/Loader'
import { useEffect, useState } from "react"

import styles from './styles.module.css'

const Cards = ({ booksData, isLoading }) => {

    const [cardsData, setCardsData] = useState([])

    const handleLoadMore = () => {

    }

    useEffect(() => {
        if (booksData) {
            setCardsData(booksData.items.map(book => ({
                bookId: book.id,
                bookEtag: book.etag,
                title: book.volumeInfo.title,
                category: book.volumeInfo.categories,
                authors: book.volumeInfo.title,
                urlImage: !book.volumeInfo.imageLinks ? '' : book.volumeInfo.imageLinks.smallThumbnail,
            })))
        }
    }, [isLoading])

    return (
        <>
            <h1 className={styles.countResults}>
                {booksData && (isLoading ? ''
                 : booksData ? 
                `Found ${booksData.totalItems} results` 
                : 'Start search any books!')}
            </h1>

            <div className={styles.cards}>
                {isLoading ? <Loader isActive={isLoading} />
                : cardsData.map((card) => <Card key={card.bookEtag} info={card}/>)}
            </div>

            {(booksData && (!!booksData && !isLoading)) && (<Button onClick={handleLoadMore} value={'Load more...'}/>)}
        </>
    )
}

export default Cards