import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Student Database</div>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
