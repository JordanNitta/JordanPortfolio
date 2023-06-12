import ProfilePic from '../../assets/img/profile.png'
import JordanUpdatedResume from '../../assets/img/JordanUpdatedResume.pdf'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, } from "framer-motion";
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div id="home" className='bg-main-color h-screen flex justify-center items-center z-50 box-border sm:border-b-[1px] sm:border-primary-color md:justify-center md:items-center lg:justify-start '>
            <div className="flex justify-center items-center h-screen mb-10 lg:ml-40 xl:ml-60 ">
                <div className="flex flex-col items-center sm:flex-col sm:items-center sm:justify-center md:justify-start md:items-center lg:justify-start lg:items-start">
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6, ease: 'easeIn', }}
                        className='text-main font-bold font-style text-[44px] sm:md:text-bigFontSize'>
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
                                '',
                                0.1,
                                'Front End Developer',
                                1000,
                                
                            ]}
                            speed={50}
                            className='text-primary-color font-bold font-style text-[30px] sm:text-[44px] md:text-bigFontSize'
                            repeat={Infinity}
                        />
                    </motion.div>

                    {/* <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeIn'  }}
                        className='text-primary-color z-10'>Developer</motion.h2> */}

                    {/* Contact resume */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeIn' }}
                        className='flex item-center justify-between w-[327px] h-[50px] mt-1'>
                        <button className='rounded main-radius h-[100%] w-main-button-width relative bg-primary-color z-10'>
                            <Link
                                to="contact" // Set the target section's id or name here
                                smooth={true}
                                duration={500}
                                className='text-main-color font-semibold font-style text-medium tracking-tighter'
                            >
                                Contact Me
                            </Link>
                        </button>
                        <button onClick={() => window.open(JordanUpdatedResume, '_blank')}className='h-[50px] w-main-button-width border-primary-color rounded-md border-2  text-medium font-style tracking-tighter text-primary-color flex justify-center items-center z-10'>
                            View Resume
                        </button>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeIn' }}
                        className='flex justify-between item-center w-[150px] lg:absolute bottom-[40px] mt-4'>
                        <button className='flex items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] border-primary-color z-10'>
                            <a href="https://github.com/JordanNitta" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[150px] h-[100%] '>
                                <FaGithub className='text-primary-color text-[25px]' />
                            </a>
                        </button>
                        <button className='flex items-center w-[50px] h-[50px] rounded-full border-[2px] border-primary-color z-10'>
                            <a href="https://www.linkedin.com/in/jordan-nitta-rodrigues-824857238/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[150px] h-[100%]'>
                                <FaLinkedinIn className='text-primary-color text-[25px]' />
                            </a>
                        </button>
                    </motion.div>
                    <div className='flex justify-center items-center '>
                        <img src={ProfilePic} alt='Profile pic' className='absolute bottom-0 right-50 left-50 h-[200px] mix-blend-overlay filter brightness-125 contrast-60 saturate-20 
                        md:absolute md:bottom-0 md:right-0 md:h-[400px] md:mix-blend-overlay contrast-60 saturate-20 overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:h-[500px]
                        xl:absolute xl:bottom-0 xl:right-0 xl:h-[600px]'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
