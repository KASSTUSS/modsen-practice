import BookService from "@api/SearchService";
import useFetching from "@hooks/useFetching";
import Image from "@ui/Image";
import Loader from "@ui/Loader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.css";

function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    image: "",
    title: "",
    categories: "",
    authors: "",
    description: "",
  });
  const [fetchBook, isLoading, error] = useFetching(async (idBook) => {
    const fetchedBookData = await BookService.getBook(idBook);

    if (!error) {
      const bookInfo = fetchedBookData.volumeInfo;

      setBookData({
        image: bookInfo.imageLinks
          ? bookInfo.imageLinks.medium ||
            bookInfo.imageLinks.small ||
            bookInfo.imageLinks.smallThumbnail
          : "",
        title: bookInfo.title ? bookInfo.title : "",
        categories: bookInfo.categories ? bookInfo.categories.join(", ") : "",
        authors: bookInfo.authors ? bookInfo.authors.join(", ") : "",
        description: bookInfo.description ? bookInfo.description : "",
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
    <div>
      {isLoading ? (
        <Loader isActive />
      ) : (
        <>
          <div className={styles.bookPage__goBack__container}>
            <div className={styles.bookPage__goBack} onClick={handleGoBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                height="15"
                width="15"
              >
                <g id="arrow-up-1--arrow-up-keyboard">
                  <path
                    id="Vector"
                    stroke="#3e3e3e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 13.5V0.5"
                  />
                  <path
                    id="Vector_2"
                    stroke="#3e3e3e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 4L7 0.5L3.5 4"
                  />
                </g>
              </svg>
              Back
            </div>
          </div>
          <div className={styles.bookPage__container}>
            <div className={styles.bookPage__image}>
              <Image src={bookData.image} width="100%"/>
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
