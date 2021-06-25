import React, {useState} from 'react';
// import { useStoreContext } from "../../utils/GlobalState";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-container">
             <Link to='/' className='navbar-logo'>
                Pinder <i className='fa-solid fa-paw' />      
            </Link>   
            </div>      
        </nav>
    )
}

export default Navbar;