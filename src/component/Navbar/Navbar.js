import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../../Assets/Untitled-1.png'
import logo1 from '../../Assets/Untitled-2.png'

const Navbar = () => {

    const menuItem = (
       <>
          <li className="text-black">
            <Link to="/" className='text- uppercase'>Home</Link>
          </li>
          <li className="text-black">
            <Link to="#about" className='text- uppercase'>About</Link>
          </li>
          <li className="text-black">
            <Link to="#services" className='text- uppercase'>Services</Link>
          </li>
          <li className="text-black">
            <Link to="#projects" className='text- uppercase'>Projects</Link>
          </li>
          <li className="text-black">
            <Link to="#contact" className='text- uppercase'>Contact</Link>
          </li>
         
       </>
    )
         


    return (
      <div className=' sticky top-0 z-40'>
        <div className="navbar py-5 lg:justify-center">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
        </div>
      </label> */}
            <Link to="" className="btn btn-ghost  text-xl uppercase font-bold">
            
              <img src={logo1} alt=''/>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;