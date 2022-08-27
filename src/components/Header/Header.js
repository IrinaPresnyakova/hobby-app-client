import React, { useEffect, useState }  from "react";
import './Header.scss'
import '../../styles/partials/_typekit.scss'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        
        <div className="header-container">
            <nav className="navBar">
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                </button>
                <div 
                    id="myLinks"
                    className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                        <a onClick={() => closeMenu()} href="/current"><h2 className="aux-text nav-link">Current projects</h2></a>
                        <a onClick={() => closeMenu()} href="/archive"><h2 className="aux-text nav-link">Archive</h2></a>
                        <a onClick={() => closeMenu()} href="/bucket-list"><h2 className="aux-text nav-link">Bucket List</h2></a>
                </div>
            </nav>
            
            <div className="header">
                 <a href="/"><h2 className="header__title"> Hobby Tracker</h2></a>
            </div>
            
           
        </div>
        
    )
}


export default Header;