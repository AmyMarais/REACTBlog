import { Link } from "react-router-dom";

//stateless functional component
const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2> { title } </h2>
        {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
             {/* this allows us to click on one of the blogs and then output that specific blog's id to the url */}
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList ;