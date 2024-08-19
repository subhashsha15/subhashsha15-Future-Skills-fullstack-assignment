import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header-container">
                <Navbar />
                <Search />
            </div>
        </>
    )
}

export default Header