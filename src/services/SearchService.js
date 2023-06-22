import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const getUrlRequest = {
  startRequest: "https://www.googleapis.com/books/v1/volumes",
  searchBooks(searchData, page) {
    const MAX_RESULTS = 30;
    const startIndex = MAX_RESULTS * page;

    const { searchQuery, category, sorting } = searchData;

    const url = `${this.startRequest}?q="${searchQuery}"${
      category !== "all" ? `+subject:${category}` : ""
    }&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sorting}&key=${API_KEY}`;

    return url;
  },
  getBook(bookId) {
    const url = `${this.startRequest}/${bookId}`;

    return url;
  },
};

const BookService = {
  async getBooks(searchData, page = 0) {
    const urlRequest = getUrlRequest.searchBooks(searchData, page);
    
    const responce = await axios.get(urlRequest);

    return responce.data;
  },
  async getBook(id) {
    const urlRequest = getUrlRequest.getBook(id);

    const responce = await axios.get(urlRequest);

    return responce.data;
  },
};

export default BookService;
