// NAVBAR COMPONTENT 

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";
import './Navbar.css'

// IMPORT IMAGES
import NavIcon from "../../assets/images/beelogo.jpg"

export default function Navbar({ currentPath }) {
    
    return (
        <nav>
            <div className="hex hex_row">
                <span className="text">Home</span>
            </div>
            <div className="hex hex_row even">
                <span className="text">Projects</span>
                <div className="sub_hex hex sub_top">
                    <span className="text">Current</span>
                </div>
                <div className="sub_hex hex">
                    <span className="text">All</span>
                    <div className="sub_hex hex sub_top">
                    <span className="text">Front-End</span>
                </div>
                <div className="sub_hex hex">
                    <span className="text">Back-End</span>
                </div>
                <div className="sub_hex hex sub_bottom">
                    <span className="text">Full Stack</span>
                </div>
                </div>
                <div className="sub_hex hex sub_bottom">
                    <span className="text">Past</span>
                </div>
            </div>
            <div className="hex hex_row">
                <span className="text">Resume</span>
            </div>
            <div className="hex hex_row even">
                <span className="text">Contact</span>
            </div>
        </nav>
    );
};