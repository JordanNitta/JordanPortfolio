import React from 'react'
import { useState } from 'react'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navLinks = [
        { title: 'Home', URL: '/' },
        { title: 'About', URL: '/about' },
        { title: 'Skills', URL: '/skills' },
        { title: 'Project', URL: '/project' },
        { title: 'Contact', URL: '/contact' },

    ]
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleClosedRoutes = () => {
        setShowMenu(false)
    }

    return (
        <nav className='fixed w-full flex justify-between h-[68px] items-center sm:px-4 sm:py-2' >
            <h3 className='font-style text-main font-semibold text-[20px] cursor-pointer sm:text[20px]'>Jordan Nitta-Rodrigues</h3>


            <AiOutlineMenu size={35} className=" text-main cursor-pointer sm:hidden" />

            <div className='justify-center items-center hidden sm:flex' onClick={handleMenu}>
                <ul className="flex justify-center items-center">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.URL} className='text-[19px] text-main px-4 font-style font-medium'>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
