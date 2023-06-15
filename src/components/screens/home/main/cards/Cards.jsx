import { useState, useEffect } from "react"
import Card from "./card/Card"
import styles from './Cards.module.css'

const Cards = (props) => {
    const {
        data
    } = props

    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        if (data) {
            setCardsData(data.map(book => ({
                bookId: book.etag,
                title: book.volumeInfo.title,
                category: book.volumeInfo.categories,
                authors: book.volumeInfo.title,
                urlImage: book.volumeInfo.imageLinks === undefined ? '' : book.volumeInfo.imageLinks.smallThumbnail
            })))
        }
    }, [data])

    return (
        <div className={styles.cards}>
            {cardsData.map((card) => {
                return (<Card key={card.bookId} info={card}/>)
            })}
        </div>
    )
}

export default Cards