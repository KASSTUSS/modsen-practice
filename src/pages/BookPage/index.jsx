import BookService from '@api/SearchService';
import useFetching from '@hooks/useFetching';
import Image from '@ui/Image';
import Loader from '@ui/Loader';
import { useEffect, useState } from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './styles.module.css';

function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    image: '',
    title: '',
    categories: '',
    authors: '',
    description: '',
  });
  const [fetchBook, isLoading, error] = useFetching(async idBook => {
    const fetchedBookData = await BookService.getBook(idBook);

    if (!error) {
      const bookInfo = fetchedBookData.volumeInfo;

      setBookData({
        image: bookInfo.imageLinks
          ? bookInfo.imageLinks.medium ||
            bookInfo.imageLinks.small ||
            bookInfo.imageLinks.smallThumbnail
          : '',
        title: bookInfo.title ? bookInfo.title : '',
        categories: bookInfo.categories ? bookInfo.categories.join(', ') : '',
        authors: bookInfo.authors ? bookInfo.authors.join(', ') : '',
        description: bookInfo.description ? bookInfo.description : '',
      });
    }
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchBook(id);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div style={{ marginTop: '50px' }}>
          <Loader isActive={isLoading} />
        </div>
      ) : (
        <>
          <div className={styles.bookPage__goBack__container}>
            <div className={styles.bookPage__goBack} onClick={handleGoBack}>
              <BsBoxArrowLeft
                size='20px'
                className={styles.bookPage__goBack_icon}
              />
              Back
            </div>
          </div>
          <div className={styles.bookPage__container}>
            <div className={styles.bookPage__image}>
              <Image src={bookData.image} width='100%' />
            </div>
            <article className={styles.bookPage__data}>
              <h1 className={styles.bookPage__title}>{bookData.title}</h1>
              <div className={styles.bookPage__categories}>
                {bookData.categories}
              </div>
              <h3 className={styles.bookPage__authors}>{bookData.authors}</h3>
              <div className={styles.bookPage__description}>
                <h4>About books</h4>
                {bookData.description}
              </div>
            </article>
          </div>
        </>
      )}
    </div>
  );
}

export default BookPage;
