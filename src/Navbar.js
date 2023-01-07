import { Link } from "react-router-dom";
import "./index.css";
const Navbar = () => {
    
    return (
        <div className="mainbar">
         <div className="navbar">
            <div className="navbar-elements">
             <Link to={"/ToDoList"}><div>Home</div></Link>
             <Link to={"NotesList"}><div>Notes</div></Link>
         </div>
        </div>
        </div>



     );
}
 
export default Navbar;