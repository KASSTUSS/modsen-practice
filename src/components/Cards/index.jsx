import Card from "@components/Card"
import CardsStatus from "@components/CardsStatus"
import Button from '@ui/Button'
import Loader from '@ui/Loader'

import styles from './styles.module.css'

const Cards = ({ cardsData, totalBooksCount, isLoading, handleLoadMore }) => {

    return (
        <>
            <CardsStatus 
                isLoading={isLoading}
                totalBooksCount={totalBooksCount}
            />

            <div className={styles.cards}>
                {isLoading ? <Loader isActive={isLoading} />
                : cardsData.map((card) => <Card key={card.bookEtag} info={card}/>)}
            </div>

            {cardsData && (!isLoading && 
            <Button onClick={handleLoadMore} value={'Load more...'}/>)}
        </>
    )
}

export default Cards