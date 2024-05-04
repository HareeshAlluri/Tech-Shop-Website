import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { Link } from 'react-router-dom';


function Header({size}) {
  return (
    <>
    <header >
        
        <Link to="/" ><h2 className="title">Tech-Shop</h2></Link>
        <ul className='headerIcons'>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <Link to="/cart" className='cart'><li><FontAwesomeIcon icon={faCartShopping} /><span className='count'>{size}</span></li></Link>
        <li><FontAwesomeIcon icon={faUser} /></li>

        </ul> 
        

    </header>
      
    </>
  )
}

export default Header
