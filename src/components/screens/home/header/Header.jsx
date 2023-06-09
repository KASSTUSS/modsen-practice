import Button from "../../../ui/button/Button"
import Input from "../../../ui/input/Input"
import Select from "../../../ui/select/Select"
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Search for books</h1>
            <div className={styles.header__form}>
                <div className={styles.inputContainer}>
                    <Input />     
                </div>
                <div className={styles.selectsContainer}>
                    <Select 
                        options={[
                            {
                                value: 'all',
                                content: 'All'
                            },
                            {
                                value: 'art',
                                content: 'Art'
                            },
                            {
                                value: 'biography',
                                content: 'Biography'
                            },
                            {
                                value: 'computers',
                                content: 'Computers'
                            },
                            {
                                value: 'history',
                                content: 'History'
                            },
                            {
                                value: 'medical',
                                content: 'Medical'
                            },
                            {
                                value: 'poetry',
                                content: 'Poetry'
                            },
                        ]}
                    />
                    <Select 
                        options={[
                            {
                                value: 'relevance',
                                content: 'Relevance'
                            },
                            {
                                value: 'newest',
                                content: 'Newest'
                            }
                        ]}
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