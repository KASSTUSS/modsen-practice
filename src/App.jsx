import Header from "@components/Header"
import BookPage from '@pages/BookPage'
import Home from '@pages/Home'
import BookService from "@services/SearchService"
import { useEffect,useState } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  
  const [foundedData, setFoundedData] = useState(null)
  const [searchData, setSearchData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [totalBooksCount, setTotalBooksCount] = useState(0)
  const [page, setPage] = useState(1)

  const getBooksList = (data) => {
       return data.map(book => ({
          bookId: book.id,
          bookEtag: book.etag,
          title: book.volumeInfo.title,
          category: book.volumeInfo.categories,
          authors: book.volumeInfo.title,
          urlImage: !book.volumeInfo.imageLinks ? '' : book.volumeInfo.imageLinks.smallThumbnail,
      }))
  }

  const navigate = useNavigate()

  const handleStartSearch = async (searchData) => {
      navigate('/')
      setIsLoading(true)
      setSearchData(searchData)

      const data = await BookService.getBooks(searchData.searchQuery, searchData.category, searchData.sorting)

      setFoundedData(data)
      setTotalBooksCount(data.totalItems)
      setCardsData(getBooksList(data.items))
  }

  const handleLoadMore = async () => {
    const data = await BookService.getBooks(searchData.searchQuery, searchData.category, searchData.sorting, page)

    setPage(prev => prev + 1)
    setCardsData([...cardsData, ...getBooksList(data.items)])
}

  useEffect(() => {
    setIsLoading(false)
  }, [foundedData])

  return (
    <>
      <Header onStartSearch={handleStartSearch}/>
      <Routes>
        <Route path="/" element={<Home totalBooksCount={totalBooksCount} handleLoadMore={handleLoadMore} cardsData={cardsData} isLoading={isLoading}/>}/>
        <Route path="/card/:id" element={<BookPage />}/>
      </Routes>
    </>
  )
}

export default App