import { useState, useEffect } from "react"
import Header from "./header/Header"
import Main from "./main/Main"
import BookService from "@/services/SearchService"

const Home = () => {
    const [foundedBooks, setFoundedBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleStartSearch = async (searchData) => {
        setIsLoading(true)

        const booksData = await BookService.getBooks(searchData.searchQuery, searchData.category, searchData.sorting)
        
        setFoundedBooks(booksData.items)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [foundedBooks])

    return (
        <div className={StyleSheet.homePage}> 
            <Header onStartSearch={handleStartSearch}/>
            <Main booksData={foundedBooks} isLoading={isLoading}/>
        </div>
    )
}

export default Home