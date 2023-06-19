import { useEffect, useState } from "react"

import Loader from '@/components/ui/loader/Loader'
import Card from "./card/Card"
import styles from './Cards.module.css'

const Cards = ({ data, isLoading }) => {

    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        if (data) {
            setCardsData(data.map(book => ({
                bookId: book.id,
                bookEtag: book.etag,
                title: book.volumeInfo.title,
                category: book.volumeInfo.categories,
                authors: book.volumeInfo.title,
                urlImage: !!!book.volumeInfo.imageLinks ? '' : book.volumeInfo.imageLinks.smallThumbnail,
            })))
        }
    }, [data])

    return (
        <div className={styles.cards}>
            {isLoading ? <Loader isActive={isLoading} />
            : cardsData.map((card) => <Card key={card.bookEtag} info={card}/>)}
        </div>
    )
}

export default Cards