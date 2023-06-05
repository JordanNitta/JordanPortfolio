import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navLinks = [
        { title: 'Home', URL: '/' },
        { title: 'About', URL: '/about' },
        { title: 'Contact', URL: '/contact' },
        { title: 'Project', URL: '/project' },
    ]

    const personalLinks = [
        { logo: FaGithub, URL: 'https://github.com/JordanNitta' },
        { logo: FaLinkedinIn, URL: 'https://www.linkedin.com/in/jordan-nitta-rodrigues-824857238/' }
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleClosedRoutes = () => {
        setShowMenu(false)
    }

    return (
        <nav className='fixed w-full flex justify-between h-[68px] items-center sm:px-4 sm:py-2 z-50 bg-black lg:bg-transparent' >
            <h1 className='font-style w-[100%] text-main font-semibold text-[20px] ml-2 cursor-pointer sm:text-[20px]'>Jordan Nitta</h1>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.URL} className={({ isActive }) => isActive ? 'font-style text-primary-color text-[19px] px-4' : 'font-style text-main text-[19px] px-4'}>
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div onClick={handleMenu} className=''>
                {!showMenu ? <AiOutlineMenu size={35} className='cursor-pointer text-main ml-1 lg:hidden' /> : <AiOutlineClose size={35} className='cursor-pointer ml-2 text-main lg:hidden' />}
            </div>
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 10 }}
                        exit={{ y: 0, opacity: -0 }}
                        transition={{ duration: .8 }}
                        className='fixed top-0 left-0 h-screen w-full bg-opacity-90 bg-gray-800 flex justify-center items-center lg:hidden -z-30' >
                        <ul className='flex flex-col justify-center items-center -space-y-3 ' onClick={handleClosedRoutes}>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.URL} className={({ isActive }) => isActive ? 'font-style text-primary-color text-[50px] font-semibold hover:text-primary-color transition duration-500' : 'font-style text-main text-[60px] font-semibold hover:text-primary-color transition duration-500'} onClick={handleClosedRoutes}>
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                            <div className='flex space-x-10'>
                                {personalLinks.map((link, index) => {
                                    const IconLogo = link.logo;
                                    return (
                                        <li key={index} className="text-main mt-10  hover:text-primary-color transition duration-500">
                                            <a href={link.URL}>
                                                <IconLogo size={25} />
                                            </a>
                                        </li>
                                    );
                                })}
                            </div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>

    )
}


export default Navbar
