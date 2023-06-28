const getBooksList = data => {
  if (!data) return [];

  return data.map(book => ({
    bookId: book.id,
    bookEtag: book.etag,
    title: book.volumeInfo.title,
    category: book.volumeInfo.categories,
    authors: book.volumeInfo.title,
    urlImage: !book.volumeInfo.imageLinks
      ? ''
      : book.volumeInfo.imageLinks.smallThumbnail,
  }));
};

export default getBooksList;
