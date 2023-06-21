import BookService from '@services/SearchService'
import Loader from '@ui/Loader'
import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"

import styles from './styles.module.css'

const BookPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [bookData, setBookData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleGoBack = () => {
        navigate(-1)
    }

    const getBookData = async (id) => {
        setIsLoading(true)

        const data = await BookService.getBook(id)
        setBookData(data)
    }
  
    useEffect(() => {
        getBookData(id)
    }, [])

    useEffect(() => {
        if(bookData) {
            setIsLoading(false)
        }
    }, [bookData])

    return (
        <>
        {
            isLoading ? <Loader isActive={true}/> : (
                <>
                <div className={styles.bookPage__goBack__container}>
                    <div 
                        className={styles.bookPage__goBack}
                        onClick={handleGoBack}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="15" width="15"><g id="arrow-up-1--arrow-up-keyboard"><path id="Vector" stroke="#3e3e3e" strokeLinecap="round" strokeLinejoin="round" d="M7 13.5V0.5"></path><path id="Vector_2" stroke="#3e3e3e" strokeLinecap="round" strokeLinejoin="round" d="M10.5 4L7 0.5L3.5 4"></path></g></svg>
                        Back
                    </div>
                </div>
                <div className={styles.bookPage__container}>
                    <div className={styles.bookPage__image}>
                        <img src={ bookData && bookData.volumeInfo.imageLinks.smallThumbnail} alt="book" />
                    </div>
                    <article className={styles.bookPage__data}>
                        <h1 className={styles.bookPage__title}>
                            { bookData && bookData.volumeInfo.title }
                        </h1>
                        <div className={styles.bookPage__categories}>
                            { (bookData && bookData.volumeInfo.categories) && bookData.volumeInfo.categories.join(', ') }
                        </div>
                        <h3 className={styles.bookPage__authors}>
                            { (bookData && bookData.volumeInfo.authors) && bookData.volumeInfo.authors.join(', ') }
                        </h3>
                        <div className={styles.bookPage__description}>
                            <h4>About books</h4>
                            { bookData && bookData.volumeInfo.description }
                        </div>
                    </article>
                </div>
                </>
            )
        }
        </>
    )
}

export default BookPage