import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

   const toggleMobileNav = () => {
  setShowMobileMenu(ele => !ele); // toggle menu visibility
   }
    return (
        <>
            <nav className='fixed top-0 text-xl text-white w-full px-3 flex justify-between items-center h-12'>

                <div className='hidden lg:block text-gray-300 font-bold hover:rotate-2'>
                    <Link to='/'>MyPortfolio</Link>
                </div>

                {/* Hamburger Button - only for small screens */}
                <div onClick={toggleMobileNav} className='sm:block flex justify-center lg:hidden bg-white  text-black h-9 w-5 rounded-3xl my-2'>
                    <button>&#9776;</button>
                </div>

                {/* Mobile Menu */}
                <div id='mobilebtn' className={`${showMobileMenu ? 'block' : 'hidden'} translate-3d text-white  flex justify-around items-start w-full rounded-r-2xl lg:w-fit  lg:flex lg:gap-6 bg-gray-900 lg:rounded-b-full px-10 py-2`}>
                    <Link className='hover:text-blue-400' to='/'>Home</Link>{' '}
                    <Link className='hover:text-blue-400' to='/about'>About</Link>{' '}
                    <Link className='hover:text-blue-400' to='/contect'>Contact</Link>{' '}
                </div>

            </nav>
        </>
    );
}

export default Navbar;
