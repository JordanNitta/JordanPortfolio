import React from 'react'
import ProfilePic from '../../assets/img/profile.png'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Readmore = ({ onClose, titleChange }) => {
    return (
        <div className="fixed top-0 mt-[68px] left-4 right-4 h-full bg-gray-800 z-40 overflow-y-hidden rounded-main-radius sm:fixed sm:inset-0 sm:flex sm:w-[50%] sm:mx-auto sm:h-[90%]">
            {/* fixed inset-0 flex items-center justify-center sm:max-w-lg mx-auto bg-gray-800 z-50 overflow-hidden rounded-main-radius */}
            <div className='flex flex-col justify-start'>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <img src={ProfilePic} alt="Profile Img" className='w-[250px] rounded-main-radius bg-black' />
                    <h2 className='text-[19px] text-main font-style font-semibold mt-3'>Jordan <span className='text-[19px] text-primary-color'>Nitta-Rodrigues</span></h2>
                    <h3 className='text-[19px] font-style font-semibold mt-3 text-primary-color'>{titleChange}</h3>
                </div>
                <div className=''>
                    <ul className='flex flex-col w-full'>
                        <li className='my-2'>
                            <div className='bg-gray-800 h-5 flex p-4 rounded-main-radius '>
                                <MdLocationOn size={20} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="#" className='text-main font-semibold  hover:text-primary-color transition duration-500'>San Jose, CA</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-2'>
                            <div className='bg-gray-800 h-5 flex p-4 rounded-main-radius'>
                                <HiPhone size={20} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="tel:8082825825" className='text-main font-semibold font-style  hover:text-primary-color transition duration-500'>+1 808 282 5825</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-2'>
                            <div className=' bg-gray-800 h-5 flex p-4 rounded-main-radius'>
                                <MdEmail size={20} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="mailto:jordannittarodrigues@gmail.com" className='text-main font-semibold font-style  hover:text-primary-color transition duration-500'>Jordannittarodrigues@gmail.com</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-2'>
                            <div className='bg-gray-800 h-10 flex p-4 rounded-main-radius'>
                                <AiFillLinkedin size={20} className='text-primary-color' />
                                <span className='ml-3'>
                                    <Link to="https://www.linkedin.com/in/jordan-nitta-rodrigues-824857238/" className='text-main font-semibold font-style hover:text-primary-color transition duration-500 '>Jordan Nitta-Rodrigues</Link>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <button className='h-[50px] w-[95%] border-primary-color rounded-md border-2 flex justify-center items-center'>
                        <Link to='#' className='text-medium font-style tracking-tighter text-primary-color'>View Resume</Link>
                    </button>
                </div>
                <button className="text-white absolute top-2 right-2 " onClick={onClose}>
                        Close
                </button>
            </div>
            
        </div>
    )
}

export default Readmore