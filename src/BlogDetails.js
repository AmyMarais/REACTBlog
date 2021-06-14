import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id }  = useParams(); //if the id in the url is 5, this method allows us to show the data for the user with the id 5
    //if the url says "localhost:8000/blogs/4" - we need this component to display the details of the object of with an id of 4
    const { data : blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id ); //re-suing the custom hook we created again
    const history = useHistory();

    //create a delete function
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, { //delete from the homepage
            method: 'DELETE'
        }).then(() => {
            history.push('/') //once it's been deleted redirect user back to homepage
        })
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div> Loading... </div> } 
            { error && <div> {error} </div> }
            { blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <p> Written by: { blog.author }</p>
                    <div> { blog.body } </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;