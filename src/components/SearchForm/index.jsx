import Options from '@constants/options';
import Input from '@ui/Input';
import Select from '@ui/Select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { booksActions, dispatchBooks } from '@/contexts/BooksContext';

import styles from './styles.module.css';

function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    searchQuery: '',
    category: Options.categories[0].value,
    sorting: Options.sortOptions[0].value,
  });

  const navigate = useNavigate();

  const handleStartSearch = async () => {
    navigate('/');

    dispatchBooks(
      booksActions.setSearchParamsContext({
        searchParams,
      }),
    );
  };

  return (
    <div className={styles.header__form}>
      <div className={styles.inputContainer}>
        <Input
          placeholder='Search'
          onChange={value =>
            setSearchParams(prev => ({
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
            setSearchParams(prev => ({
              ...prev,
              category: value.value,
            }))
          }
          options={Options.categories}
          labelText='Categories'
        />
        <Select
          onChange={value =>
            setSearchParams(prev => ({
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
