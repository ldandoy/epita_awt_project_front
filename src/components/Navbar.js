import { Link } from "react-router-dom";

import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
        <Link to="/" className="link">Home Page</Link> 
        <Link to="/todos" className="link">Todos</Link> 
    </div>
  );
}

export default Navbar;
