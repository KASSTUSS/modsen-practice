import Header from "@components/Header"
import Home from '@pages/Home'
import BookService from "@services/SearchService"
import { useEffect,useState } from "react"
import { Route, Routes } from 'react-router-dom'

import BookPage from "./pages/BookPage"

function App() {
  
  const [foundedData, setFoundedData] = useState(null)
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
    <>
      <Header onStartSearch={handleStartSearch}/>
      <Routes>
        <Route path="/" element={<Home foundedData={foundedData} isLoading={isLoading}/>}/>
        <Route path="/card/:id" element={<BookPage />}/>
      </Routes>
    </>
  )
}

export default App