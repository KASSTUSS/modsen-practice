import { useState, useEffect } from "react"
import Card from "./card/Card"
import styles from './Cards.module.css'
import Loader from '../../../../ui/loader/Loader'

const Cards = (props) => {
    const {
        data,
        isLoading
    } = props

    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        if (data) {
            setCardsData(data.map(book => ({
                bookId: book.id,
                bookEtag: book.etag,
                title: book.volumeInfo.title,
                category: book.volumeInfo.categories,
                authors: book.volumeInfo.title,
                urlImage: book.volumeInfo.imageLinks === undefined ? '' : book.volumeInfo.imageLinks.smallThumbnail,
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