import { useState, useEffect } from "react"
import Header from "./header/Header"
import Main from "./main/Main"

const Home = () => {
    const [booksData, setBooksData] = useState([])
    const onSearchBooks = (books) => {
        setBooksData(books)
    }

    return (
        <div className={StyleSheet.homePage}> 
            <Header onSearch={(data) => {onSearchBooks(data)}}/>
            <Main booksData={booksData}/>
        </div>
    )
}

export default Home