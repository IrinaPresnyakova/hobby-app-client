import React, { useEffect, useState }  from "react";
import './Header.scss'



function Header() {
    return (
        <div className="header-container">
            <p>About this project | Contact | Log in</p>
            <h2 className="title"> I am the header of the hobby management app!</h2>
        </div>
        
    )
}


export default Header;