import Main from "@components/Main"

const Home = ({ cardsData, isLoading, handleLoadMore, totalBooksCount }) => {
    return (
        <>
            <Main totalBooksCount={totalBooksCount} handleLoadMore={handleLoadMore} cardsData={cardsData} isLoading={isLoading}/>
        </>
    )
}

export default Home