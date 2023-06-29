import Options from '@constants/options';
import Input from '@ui/Input';
import Select from '@ui/Select';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  booksActions,
  BooksContext,
  dispatchBooks,
} from '@/contexts/BooksContext';

import styles from './styles.module.css';

function SearchForm() {
  const { searchParams } = useContext(BooksContext);

  const [searchData, setSearchData] = useState({
    searchQuery: '',
    category: Options.categories[0].value,
    sorting: Options.sortOptions[0].value,
  });

  const navigate = useNavigate();

  const handleStartSearch = async () => {
    navigate('/');

    if (searchParams !== searchData) {
      dispatchBooks(
        booksActions.setSearchParamsContext({
          searchParams: searchData,
        }),
      );
    }
  };

  return (
    <div className={styles.header__form}>
      <div className={styles.inputContainer}>
        <Input
          placeholder='Search'
          onChange={value =>
            setSearchData(prev => ({
              ...prev,
              searchQuery: value,
            }))
          }
          searchButton
          onClickButton={handleStartSearch}
        />
      </div>
      <div className={styles.selectsContainer}>
        <Select
          onChange={value =>
            setSearchData(prev => ({
              ...prev,
              category: value.value,
            }))
          }
          options={Options.categories}
          labelText='Categories'
        />
        <Select
          onChange={value =>
            setSearchData(prev => ({
              ...prev,
              sorting: value.value,
            }))
          }
          options={Options.sortOptions}
          labelText='Sorting by'
        />
      </div>
    </div>
  );
}

export default SearchForm;
