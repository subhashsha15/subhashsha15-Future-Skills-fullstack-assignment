import React, { useState } from 'react';
import './Navbar.css';
import { TbBrandAbstract } from "react-icons/tb";
import NewCardDialog from '../NewCardDialog/NewCardDialog';

const Navbar = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className='navbar-container'>
                <div className="navbar-container-items">
                    <div className='navbar-item'>
                        <span className='navbar-item-icon'>
                            <TbBrandAbstract />
                        </span>
                        <span>
                            Abstract
                        </span>
                    </div>
                    <div>|</div>
                    <div>Help Center</div>
                </div>
                <div className="navbar-container-btn">
                    <button onClick={handleOpenDialog}>Submit a request</button>
                </div>
            </div>
            <NewCardDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
        </>
    )
}

export default Navbar;
