import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollBg, setScrollBg] = useState(false);
    const navLinks = [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'about' },
        { title: 'Project', id: 'project' },
        { title: 'Contact', id: 'contact' },
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

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrollBg(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full flex justify-between h-[68px] items-center sm:px-4 sm:py-2 z-50 ${scrollBg ? 'bg-black' : 'bg-transparent'}`} >
            <h1 className='font-style w-[100%] text-main font-semibold text-[20px] ml-2 cursor-pointer sm:text-[20px]'>Jordan Nitta</h1>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navLinks.map((link, index) => (
                    <li key={index} >
                        <Link
                            activeClass="text-primary-color"
                            to={link.id}
                            spy={true}
                            smooth={true}
                            offset={2}
                            duration={500}
                            className="font-style text-main text-[19px] px-4"
                            activeClassName="text-primary-color"
                        >
                            {link.title}
                        </Link>
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
                                    <Link
                                        activeClass="text-primary-color"
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={2}
                                        duration={500}
                                        className="font-style text-main text-[60px] font-semibold hover:text-primary-color transition duration-500"
                                        activeClassName="text-primary-color"
                                        onClick={handleClosedRoutes}
                                    >
                                        {link.title}
                                    </Link>
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
