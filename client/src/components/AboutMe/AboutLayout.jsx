import React from 'react'
import { useState, useEffect } from 'react'
import { motion, } from "framer-motion";
import Readmoreabout from './Readmoreabout';
import './Aboutme.css'
import ProfilePic from '../../assets/img/profile.png'
const AboutLayout = () => {
    const [isVisible, setIsVisble] = useState(false);
    const [jobTitle, setJobTitle] = useState('Frontend Developer');

    const handleClosePopup = () => {
        setIsVisble(false);
    }

    const handleOpenPopup = () => {
        setIsVisble(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setJobTitle((prevTitle) =>
                prevTitle === 'Frontend Developer' ? 'Full Stack Developer' : 'Frontend Developer'
            );
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        // <div className='bg-main-color w-full h-screen flex justify-center items-center box-border overflow-hidden sm:justify-start'>
        //     <div className="flex justify-center items-center sm:ml-60">
        //         <div className="flex flex-col items-center sm:flex-col sm:items-center sm:justify-center">
        //             {/* <div className=''> */}
        //             {/* <img src={ProfilePic} className='absolute bottom-0 h-[300px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20 overflow-hidden sm:absoulte sm:bottom-0 sm:left-0 sm:h-[400px] md:h-[600px]'
        //             /> */}
        //             {/* </div> */}
        //             <div className='flex justify-center items-center'>
        //                 <img src={ProfilePic} alt='Profile pic'className='absolute bottom-0 right-50 left-50 h-[300px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20 overflow-hidden 
        //                 md:absolute md:bottom-0 md:left-0 md:h-[400px] md:mix-blend-overlay filter brightness-125 contrast-60 saturate-20 overflow-hidden lg:absolute lg:bottom-0 lg:left-0 lg:h-[500px]
        //                 xl:absolute xl:bottom-0 xl:left-0 xl:h-[600px]'
        //             />
        //             </div>
        //             <div className='flex justify-center items-center mb-40 sm:mb-0 sm:justify-center sm:items-center md:ml-40 md:justify-start md:w-[40%]'>
        //                 <div className='flex flex-col justify-center items-center mb-20 sm:justify-center sm:items-start'>
        //                     <h2 className='text-main font-poppins font-semibold text-[48px] sm:text-[55px] md:text-[68px]'>About <span className='text-primary-color font-poppins font-semibold text-[48px] sm:text-[55px] md:text-[68px]'>Me</span></h2>
        //                     <motion.h2
        //                         initial={{ opacity: 4 }}
        //                         animate={{ opacity: 4 }}
        //                         exit={{ opacity: 0 }}
        //                         transition={{ duration: 1 }}
        //                         className='text-main font-style font-semibold text-[28px]'>
        //                         {jobTitle}
        //                     </motion.h2>

        //                     <p className='text-main font-poppins font-medium text-[15px] leading-6 text-center sm:text-left'>As a front-end developer, I possess the skills to create user-friendly websites that prioritize a seamless user experience. I have a keen eye for detail and strive to achieve pixel-perfect designs, ensuring that every element is precisely implemented. Additionally, I specialize in creating responsive websites that seamlessly adapt to different screen sizes and devices, providing an optimal experience for users.</p>
        //                     <button className='btn' onClick={handleOpenPopup}>Read More</button>
        //                     {isVisible && 
        //                         <Readmoreabout onClose={handleClosePopup}/>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="about" className='bg-main-color h-screen flex justify-center items-center box-border overflow-hidden border-b-[1px] border-primary-color'>
            <div className="flex justify-center items-center h-screen mb-10 lg:mr-40 xl:mr-60  ">
                <div className="flex flex-col items-center sm:flex-col sm:items-center sm:justify-center md:justify-start md:items-center lg:justify-end lg:items-end">
                    <div className='flex justify-center items-center'>
                        <img src={ProfilePic} alt='Profile pic' className='absolute -bottom-[832px] right-50 left-50 h-[300px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20  
                        md:absolute md:-bottom-[832px] md:left-0 md:h-[400px] md:mix-blend-overlay contrast-60 saturate-20 overflow-hidden lg:absolute lg:-bottom-[832px] lg:left-0 lg:h-[500px]
                        xl:absolute xl:-bottom-[832px] xl:left-0 xl:h-[600px] '
                        />

                    </div>
                    <div className='flex flex-col items-center justify-center mb-[200px] w-[90%] md:justify-end md:items-center md:w-[80%] md:mb-[200px] lg:mb-0 lg:justify-start lg:items-start lg:w-[50%] '>
                        <h1 className='text-main font-bold font-style text-[44px] sm:md:text-bigFontSize'>
                            About <span className='text-primary-color font-bold font-style text-[44px] sm:md:text-bigFontSize'>Me</span>
                        </h1>
                        <br />
                        <p className='text-main font-semi-bold font-style text-center text-[19px] sm:text-[19px] sm:text-center md:text-[19px] md:text-left'>
                            Hi I'm Jordan Nitta-Rodrigues and I am a passionate frontend developer with a passion for creating an intuitive user experience on the web. With an eye for design I strive to craft visually appealing and functional websites. My journey as a frontend developer has allowed me to combine my creativity and technical skills to bring ideads to life.
                        </p>
                        <button className='btn mt-4' onClick={handleOpenPopup}>Read More</button>
                        {isVisible &&
                            <Readmoreabout onClose={handleClosePopup} titleChange={jobTitle} />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutLayout
