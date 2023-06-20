import Main from "@components/Main"

const Home = ({ foundedData, isLoading, searchData }) => {
    return (
        <>
            <Main searchData={searchData} booksData={foundedData} isLoading={isLoading}/>
        </>
    )
}

export default Home