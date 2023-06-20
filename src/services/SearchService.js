import axios from "axios";

const getUrlRequest = {
    startRequest: 'https://www.googleapis.com/books/v1/volumes',
    searchBooks(searchQuery, category, sorting, page=0) {
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
        const MAX_RESULTS = 30
        const startIndex = MAX_RESULTS * page

        const url = `${this.startRequest}?q="${searchQuery}"${(category != 'all') ? (`+subject:${category}`) : ''}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sorting}&projection=lite&key=${API_KEY}`
        
        return url
    },
    getBook(bookId) {
        const url = `${this.startRequest}/${bookId}`
        
        return url
    }
}


const BookService = {
    async getBooks(searchQuery, category, sorting) {
        const urlRequest = getUrlRequest.searchBooks(searchQuery, category, sorting)
        
        const responce = await axios.get(urlRequest)
        
        return responce.data
    },
    async getBook(id) {
        const urlRequest = getUrlRequest.getBook(id)
        console.log(urlRequest)
        
        const responce = await axios.get(urlRequest)
        
        return responce.data
    }
}

export default BookService