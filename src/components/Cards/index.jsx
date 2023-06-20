import Card from "@components/Card"
import BookService from '@services/SearchService'
import Button from '@ui/Button'
import Loader from '@ui/Loader'
import { useEffect, useState } from "react"

import styles from './styles.module.css'

const Cards = ({ booksData, isLoading, searchData }) => {

    const [cardsData, setCardsData] = useState([])
    const [page, setPage] = useState(1)

    const getBooksList = (data) => {
         return data.items.map(book => ({
            bookId: book.id,
            bookEtag: book.etag,
            title: book.volumeInfo.title,
            category: book.volumeInfo.categories,
            authors: book.volumeInfo.title,
            urlImage: !book.volumeInfo.imageLinks ? '' : book.volumeInfo.imageLinks.smallThumbnail,
        }))
    }

    useEffect(() => {
        if (booksData) {
            setCardsData(getBooksList(booksData))
        }
    }, [isLoading])

    const handleLoadMore = async () => {
        const booksData = await BookService.getBooks(searchData.searchQuery, searchData.category, searchData.sorting, page)

        setPage(page + 1)

        setCardsData([...cardsData, ...getBooksList(booksData)])
    }

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