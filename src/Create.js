import { useState } from "react";
import { useHistory } from 'react-router-dom'

//function to create a new blog
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('High School Musical 1');
    const [isLoading, setIsLoading] = useState(false) //create a new state to show a loading message once we've added a new blog object
    const history = useHistory(); //gives us several methods such as redirecting user to history

    //create a function that handles the submit event 
    //we automatically have access to the event object 
    const handleSubmit = (e) => {
        e.preventDefault(); //this prevents the page from refreshing as it does so whenever a button is clicked
        const blog = {title, body, author} //our blog object 
        
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', { //we want the new object to be added into the home page
            method: 'POST', //specify what kind of method you're using
            headers: {"Content-Type": "application/json"}, //telling the server what kind of data we're sending with this request
            body: JSON.stringify(blog) //we pass in the data we want to turn into json
        }).then (() => { //once the new data object has been added we make sure it's been done by console.logging it
            console.log('new blog added');
            setIsLoading(false)
            history.push('/') //redirect the user back to the home page once a new object has been submitted
        })
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit} > 
                <label > Blog Title</label>
                <input
                 type="text" 
                 required
                 value={title}
                 /* the event object allow you to access the target and then the value */
                 onChange={(e) => setTitle(e.target.value)} 
                 />
                  <label > Blog Body</label>
                <textarea 
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                > </textarea>
                 <label>Blog Author</label>
                 <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)} >
                     <option value="High School Musical 1">High School Musical 1</option>
                     <option value="High School Musical 2">High School Musical 2</option>
                 </select>
                 {/* if the left side is false is will show the button (we use ! if something is not true) - if it isn't loading and the 
                 submit action was successful */}
                 { !isLoading && <button>Add Blog</button>} 
                 {/*If it is still loading then show the adding blog button */}
                 { isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;