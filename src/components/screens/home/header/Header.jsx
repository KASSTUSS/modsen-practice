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

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Search for books</h1>
            <div className={styles.header__form}>
                <div className={styles.inputContainer}>
                    <Input />     
                </div>
                <div className={styles.selectsContainer}>
                    <Select 
                        onChange={(value) => {
                            // executed on change category
                        }}
                        options={categories}
                    />
                    <Select 
                        onChange={(value) => {
                            // executed on change sort option
                        }}
                        options={sortOptions}
                    />
                </div>
                <div>
                    <Button>Search</Button>
                </div>
            </div>
        </header>
    )
}

export default Header