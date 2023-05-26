import React from 'react'
import { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.screenY >= 90) {
            setColor(true);
        } else {
            setColor(false)
        }
    }

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleClosedRoutes = () => {
        setShowMenu(false)
    }
    return (
        <div className='flex justify-between items-center w-full z-50 fixed h-20 mx-2'>
            <h3 className='font-style text-main font-semibold text-[20px] cursor-pointer'>Jordan Nitta-Rodrigues</h3>
            <div className='flex justify-end items-center mx-2' onClick={handleMenu}>
                {
                    !showMenu ?
                        <AiOutlineMenu size={35} className=" text-main cursor-pointer" />
                        :
                        <AiOutlineClose size={35} className="text-main cursor-pointer" />
                }
            </div>
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 10 }}
                        exit={{ y: 0, opacity: 0 }}
                        transition={{ duration: .8 }}
                        className='fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-90 flex justify-center items-center -z-50'
                    >
                        <div className='flex flex-col justify-center items-center cursor-pointer'>
                            <NavLink to="/" className={({isActive}) => isActive ? 'font-style text-primary-color text-[60px]' :'font-style text-main text-[60px]'} onClick={handleClosedRoutes} >Home</NavLink>
                            <NavLink to="/about" className={({isActive}) => isActive ? 'font-style text-primary-color text-[60px]' :'font-style text-main text-[60px]'} onClick={handleClosedRoutes}>About</NavLink>
                            <NavLink to='/contact' className={({isActive}) => isActive ? 'font-style text-primary-color text-[60px]' :'font-style text-main text-[60px]'} onClick={handleClosedRoutes}>Skills</NavLink>
                            <NavLink to='/contact' className={({isActive}) => isActive ? 'font-style text-primary-color text-[60px]' :'font-style text-main text-[60px]'} onClick={handleClosedRoutes}>Projects</NavLink>
                            <NavLink to='/contact' className={({isActive}) => isActive ? 'font-style text-primary-color text-[60px]' :'font-style text-main text-[60px]'} onClick={handleClosedRoutes}>Contact</NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}


export default Navbar
