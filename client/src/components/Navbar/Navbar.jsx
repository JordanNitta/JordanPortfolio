import React from 'react'
import { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const navLinks = [
        { title: 'Home', URL: '/' },
        { title: 'about', URL: '/about' },
        { title: 'Skills', URL: '/skills' },
        { title: 'Project', URL: '/project' },
        { title: 'Contact', URL: '/contact' },

    ]
    return (
        <nav className=''>
            <h3 className='font-style text-main font-semibold text-[20px] cursor-pointer'>Jordan Nitta-Rodrigues</h3>
            {/* <ul className="navbar-links">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.URL}>{link.title}</a>
                    </li>
                ))}
            </ul> */}
        </nav>
    )
}

export default Navbar
