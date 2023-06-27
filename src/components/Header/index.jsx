import Options from "@constants/options";
import Input from "@ui/Input";
import Select from "@ui/Select";
import { useState } from "react";

import styles from "./styles.module.css";

function Header({ onStartSearch }) {
  const [searchData, setSearchData] = useState({
    searchQuery: "",
    category: Options.categories[0].value,
    sorting: Options.sortOptions[0].value,
  });

  const handleStartSearch = () => {
    onStartSearch(searchData);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Search for books</h1>
      <div className={styles.header__form}>
        <div className={styles.inputContainer}>
          <Input
            placeholder="Search"
            onChange={(value) =>
              setSearchData((prev) => ({
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
            onChange={(value) =>
              setSearchData((prev) => ({
                ...prev,
                category: value.value,
              }))
            }
            options={Options.categories}
            labelText="Categories"
          />
          <Select
            onChange={(value) =>
              setSearchData((prev) => ({
                ...prev,
                sorting: value.value,
              }))
            }
            options={Options.sortOptions}
            labelText="Sorting by"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
