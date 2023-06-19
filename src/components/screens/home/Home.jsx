import { useState, useEffect } from "react"
import Header from "./header/Header"
import Main from "./main/Main"
import BookService from "@/services/SearchService"

const Home = () => {
    const [foundedData, setFoundedData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleStartSearch = async (searchData) => {
        setIsLoading(true)

        const booksData = await BookService.getBooks(searchData.searchQuery, searchData.category, searchData.sorting)
        
        setFoundedData(booksData)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [foundedData])

    return (
        <div className={StyleSheet.homePage}> 
            <Header onStartSearch={handleStartSearch}/>
            <Main booksData={foundedData} isLoading={isLoading}/>
        </div>
    )
}

export default Home