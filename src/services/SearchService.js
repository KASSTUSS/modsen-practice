import axios from "axios";

const getUrlRequest = {
    startRequest: 'https://www.googleapis.com/books/v1/volumes',
    searchBooks(searchQuery, category, sorting) {
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
        const MAX_RESULTS = 30
        const startIndex = 0

        console.log(API_KEY)

        const url = `${this.startRequest}?q="${searchQuery}"${(category != 'all') ? (`+subject:${category}`) : ''}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sorting}&key=${API_KEY}`
        
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
    }
}

export default BookService