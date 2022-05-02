import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './../../Style/Icons/logo.svg';
const Header = () => {
   
    let history = useHistory()
    const LogoutFun =()=>{
       
    }
    return (
        <header className='navbar navbar-expand-lg shadow-sm  headerBg bg-light' >
            <nav className="navbar navbar-light container-fluid ">
                <div className='d-flex gap-2'>
                <img src={Logo} width="42px" />
             <h5 className='text-dark mt-2'>  User Manager</h5>
                </div>
 <h6 className='text-secondary mt-3'>Hi, Buddy</h6>
            </nav>
        </header>
    );
};

export default Header;