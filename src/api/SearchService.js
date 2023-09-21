import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const getUrlRequest = {
  startRequestWithoutVPN:
    'https://practice-back-bbkr.onrender.com',
  searchBooks(searchData, indexBooks) {
    const MAX_RESULTS = 30;
    const responceFields =
      'fields=totalItems,items(id,etag,volumeInfo(title,authors,categories,description,imageLinks))';

    const { searchQuery, category, sorting } = searchData;

    const url = `${this.startRequestWithoutVPN}/books?q=intitle:${searchQuery
      .trim()
      .split(' ')
      .join('+intitle:')}${
      category !== 'all' ? `+subject:${category}` : ''
    }&maxResults=${MAX_RESULTS}&startIndex=${indexBooks}&orderBy=${sorting}&${responceFields}&key=${API_KEY}`;

    return url;
  },
  getBook(bookId) {
    const url = `${this.startRequestWithoutVPN}/book?${bookId}`;

    return url;
  },
};

const BookService = {
  async getBooks(searchData, indexBooks = 0) {
    const urlRequest = getUrlRequest.searchBooks(searchData, indexBooks);

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
