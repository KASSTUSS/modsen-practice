import { useState } from "react"
import Button from "../../../ui/button/Button"
import Input from "../../../ui/input/Input"
import Select from "../../../ui/select/Select"
import styles from './Header.module.css'

const categories = [
    {
        value: 'all',
        title: 'All'
    },
    {
        value: 'art',
        title: 'Art'
    },
    {
        value: 'biography',
        title: 'Biography'
    },
    {
        value: 'computers',
        title: 'Computers'
    },
    {
        value: 'history',
        title: 'History'
    },
    {
        value: 'medical',
        title: 'Medical'
    },
    {
        value: 'poetry',
        title: 'Poetry'
    },
]
const sortOptions = [
    {
        value: 'relevance',
        title: 'Relevance'
    },
    {
        value: 'newest',
        title: 'Newest'
    }
]

const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0])
    const [searchValue, setSearchValue] = useState('')

    const searchBooks = async () => {
        
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Search for books</h1>
            <div className={styles.header__form}>
                <div className={styles.inputContainer}>
                    <Input
                        placeholder='Search'
                        onChange={(value) => { setSearchValue(value) }}
                        searchButton
                        onClickButton={searchBooks}
                    />     
                </div>
                <div className={styles.selectsContainer}>
                    <Select 
                        onChange={(value) => { setSelectedCategory(value) }}
                        options={categories}
                        labelText='Categories'
                    />
                    <Select 
                        onChange={(value) => { setSelectedSortOption(value) }}
                        options={sortOptions}
                        labelText='Sorting by'
                    />
                </div>
            </div>
        </header>
    )
}

export default Header