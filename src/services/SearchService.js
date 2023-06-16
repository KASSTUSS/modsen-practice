import axios from "axios";

const getUrlRequest = {
    startRequest: 'https://www.googleapis.com/books/v1/volumes',
    searchBooks(searchQuery, category, sorting) {
        const API_KEY = 'AIzaSyDetJf-7ci2jegrC-AREK-WuaZk9acOq1s'
        const MAX_RESULTS = 30
        const startIndex = 0

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
        console.log(urlRequest)
        const responce = await axios.get(urlRequest)
        
        return responce.data
    }
}

export default BookService