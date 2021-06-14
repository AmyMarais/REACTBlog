import {Link } from 'react-router-dom';

//stateless component because the original state never has to change
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The TikTok Blog</h1>
            <div className="links">
                <Link to="/"> Home </Link> {/* The <Link> allows react to intercept a request - that would've gone to the server previously */}
                <Link to="/create"> Create Blog </Link> {/*<Link> makes switching between pages faster + it's a special feature of React */}
            </div>
        </nav>
      );
}
 
export default Navbar;