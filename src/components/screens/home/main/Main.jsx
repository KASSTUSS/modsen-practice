import { useState, useEffect } from "react"
import Cards from "./cards/Cards"
import styles from './Main.module.css'

const Main = (props) => {
    const {
        booksData
    } = props

    return (
        <main className={styles.main}>
            <Cards data={booksData}/>
        </main>
    )
}

export default Main