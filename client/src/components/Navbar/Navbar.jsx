import React from 'react'
import { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navLinks = [
        { title: 'Home', URL: '/' },
        { title: 'about', URL: '/about' },
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
        <nav className='fixed w-full flex justify-between h-[68px] items-center'>
            <h3 className='font-style text-main font-semibold text-[20px] cursor-pointer sm:text[20px]'>Jordan Nitta-Rodrigues</h3>
            <div className='flex justify-center items-center' onClick={handleMenu}>
                {
                    !showMenu ?
                        <AiOutlineMenu size={35} className="text-main cursor-pointer sm:hidden" />
                        :
                        <AiOutlineClose size={35} className="text-main cursor-pointer sm:hidden" />
                }
                {/* <AiOutlineMenu size={35} className="text-main cursor-pointer sm:hidden" /> */}
                <ul className="sm:flex justify-center items-center hidden">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.URL} className='text-[19px]'>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
