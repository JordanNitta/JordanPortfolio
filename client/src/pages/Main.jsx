import React, { useEffect } from 'react'
import ProfilePic from '../assets/img/profile.png'
import { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { motion, } from "framer-motion";
import { Link } from 'react-router-dom'
const Main = () => {
    const [hover, setHover] = useState(true);

    const handleHover = () => {
        setHover(hover)
    }



    return (
        <div className='bg-main-color h-screen flex justify-center  items-center box-border overflow-hidden sm:justify-start'>
            <div className="flex justify-center items-center h-screen 0 sm:ml-60">
                <div className="flex flex-col items-center sm:flex-col sm:items-start sm:justify-start">
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6, ease: 'easeIn', }}
                        className='text-main text-large font-bold font-playfair sm:md:text-bigFontSize'>
                        Hello, I'm Jordan
                    </motion.h1>
                    <motion.div
                        className='z-10'
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6, delay: 0.3, ease: 'easeIn' }}>
                        
                        <TypeAnimation
                            sequence={[
                                'Front End Developer',
                                2000,
                                'React',
                                1000,
                                'NodeJs',
                                1000,
                                'Express',
                                1000,
                            ]}
                            speed={50}
                            className='text-primary-color font-bold font-playfair text-large md:text-bigFontSize'
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeIn'  }}
                        className='text-primary-color z-10'>Developer</motion.h2>

                    {/* Contact resume */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeIn'  }}
                        className='flex item-center justify-between w-[327px] h-[50px] mt-1'>
                        <button
                            className='rounded main-radius h-[100%] w-main-button-width relative bg-primary-color z-10' >
                            <Link to="#" className='text-main-color font-semibold font-style text-medium tracking-tighter'>Contact Me</Link>
                        </button>

                        <button className='h-[50px] w-main-button-width border-primary-color rounded-md border-2  flex justify-center items-center z-10'>
                            <Link to='#' className='text-medium font-style tracking-tighter text-primary-color'>View Resume</Link>
                        </button>
                    </motion.div>

                    {/* Links */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeIn'  }}
                        className='flex justify-between item-center w-[150px] sm:absolute bottom-[40px]'>
                        <button className='flex items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] border-primary-color z-10'>
                            <a href="" className='flex items-center justify-center w-[150px] h-[100%] '>
                                <FaGithub className='text-primary-color text-[25px]' />
                            </a>
                        </button>
                        <button className='flex items-center w-[50px] h-[50px] rounded-full border-[2px] border-primary-color z-10'>
                            <a href="" className='flex items-center justify-center w-[150px] h-[100%]'>
                                <FaLinkedinIn className='text-primary-color text-[25px]' />
                            </a>
                        </button>
                    </motion.div>
                    <div className=''>
                        <img src={ProfilePic} alt='Profile pic'className='absolute bottom-0 right-0 h-[600px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20 overflow-hidden '
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
