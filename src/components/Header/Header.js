import React, { useEffect, useState }  from "react";
import './Header.scss'



function Header() {
    return (
        <div className="header-container">
            <p>About this project | Contact | Log in</p>
            <a href="/"><h2 className="title"> HobScotch</h2></a>
            
        </div>
        
    )
}


export default Header;