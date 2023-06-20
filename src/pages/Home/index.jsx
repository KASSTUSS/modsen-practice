import Main from "@components/Main"

const Home = ({ foundedData, isLoading }) => {
    return (
        <>
            <Main booksData={foundedData} isLoading={isLoading}/>
        </>
    )
}

export default Home