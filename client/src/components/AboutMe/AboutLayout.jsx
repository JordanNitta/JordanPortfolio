import React from 'react'
import { useState, useEffect } from 'react'
import { motion, } from "framer-motion";
import Readmore from './Readmore';
import './Aboutme.css'
import ProfilePic from '../../assets/img/profile.png'
const AboutLayout = () => {
    const [isVisible, setIsVisble] = useState(false);
    const [jobTitle, setJobTitle] = useState('Frontend Engineer');

    const handleClosePopup = () => {
        setIsVisble(false);
    }

    const handleOpenPopup = () => {
        setIsVisble(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setJobTitle((prevTitle) =>
                prevTitle === 'Frontend Engineer' ? 'Full Stack Developer' : 'Frontend Engineer'
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-main-color w-full h-screen flex justify-center items-center box-border overflow-hidden sm:justify-start'>
            <div className="flex justify-center items-center sm:ml-60">
                <div className="flex flex-col items-center sm:flex-col sm:items-center sm:justify-center">
                    {/* <div className=''> */}
                    <img src={ProfilePic} className='absolute bottom-0  h-[300px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20 overflow-hidden sm:absoulte sm:bottom-0 sm:left-0 sm:h-[600px]'
                    />
                    {/* </div> */}
                    <div className='flex justify-center items-center mb-40 sm:mb-0 sm:ml-40 sm:justify-start sm:w-[50%] '>
                        <div className='flex flex-col justify-center items-center mb-20 sm:justify-center sm:items-start'>
                            <h2 className='text-main font-poppins font-semibold text-[4rem] sm:text-[68px]'>About <span className='text-primary-color font-poppins font-semibold text-[68px]'>Me</span></h2>
                            <motion.h2
                                initial={{ opacity: 4 }}
                                animate={{ opacity: 4 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className='text-main font-style font-semibold text-[32px]'>
                                {jobTitle}
                            </motion.h2>

                            <p className='text-main font-poppins font-medium text-[15px] leading-6 text-center sm:text-left'>As a front-end developer, I possess the skills to create user-friendly websites that prioritize a seamless user experience. I have a keen eye for detail and strive to achieve pixel-perfect designs, ensuring that every element is precisely implemented. Additionally, I specialize in creating responsive websites that seamlessly adapt to different screen sizes and devices, providing an optimal experience for users.</p>
                            <button className='btn' onClick={handleOpenPopup}>Read More</button>
                            {isVisible && (
                                <Readmore onClose={handleClosePopup}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLayout
