import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs') //pass in the actual endpoint here and name the data blog

    return ( 
        <div className="home"> 
        { error && <div> {error} </div>} {/*only if we have a value for the error will the div message run and display */}
        { isLoading && <div>Loading...</div>}
        { blogs && <BlogList blogs={blogs} title ="All Blogs"/> } 
        </div>
     );
}
 
export default Home;