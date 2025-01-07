// NAVBAR COMPONTENT 

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";
import './Navbar.css'

// IMPORT IMAGES
import NavIcon from "../../assets/images/beelogo.jpg"

export default function Navbar({ currentPath }) {
    
    return (
        <nav>
            <Link to="/" className="hex hex_row">
                <span className="text">Home</span>
            </Link>
            <div className="hex hex_row even">
                <span className="text">Projects</span>
                <Link to="/current" className="sub_hex hex sub_top">
                    <span className="text">Current</span>
                </Link>
                <div className="sub_hex hex">
                    <span className="text">All</span>
                    <Link to="/frontend" className="sub_hex hex sub_top">
                        <span className="text">Front-End</span>
                    </Link>
                    <Link to="/backend" className="sub_hex hex">
                        <span className="text">Back-End</span>
                    </Link>
                    <Link to="/fullstack" className="sub_hex hex sub_bottom">
                        <span className="text">Full Stack</span>
                    </Link>
                </div>
                <Link to="/past" className="sub_hex hex sub_bottom">
                    <span className="text">Past</span>
                </Link>
            </div>
            <Link to="/resume" className="hex hex_row">
                <span className="text">Resume</span>
            </Link>
            <Link to="/contact" className="hex hex_row even">
                <span className="text">Contact</span>
            </Link>
        </nav>
    );
};