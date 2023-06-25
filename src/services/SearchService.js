import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const getUrlRequest = {
  startRequest: "https://www.googleapis.com/books/v1/volumes",
  startRequestWithoutVPN:
    "https://modsen-practice-backend-production.up.railway.app",
  searchBooks(searchData, page) {
    const MAX_RESULTS = 30;
    const startIndex = MAX_RESULTS * page;

    const { searchQuery, category, sorting } = searchData;

    const url = `${
      this.startRequestWithoutVPN
    }/books?q="${searchQuery.trim()}"${
      category !== "all" ? `+subject:${category}` : ""
    }&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sorting}&key=${API_KEY}`;

    return url;
  },
  getBook(bookId) {
    const url = `${this.startRequestWithoutVPN}/book?${bookId}`;

    return url;
  },
};

const BookService = {
  async getBooks(searchData, page = 0) {
    const urlRequest = getUrlRequest.searchBooks(searchData, page);

    const responce = await axios.get(urlRequest);

    return responce.data.responceFromBooksApi;
  },
  async getBook(id) {
    const urlRequest = getUrlRequest.getBook(id);

    const responce = await axios.get(urlRequest);

    return responce.data.responceFromBooksApi;
  },
};

export default BookService;
