import React, { useEffect, useState }  from "react";
import './Header.scss'
import '../../styles/partials/_typekit.scss'



function Header() {
    return (
        <div className="header-container">
            
            <a href="/"><h2 className="header-title"> Hobby Tracker</h2></a>
            
        </div>
        
    )
}


export default Header;