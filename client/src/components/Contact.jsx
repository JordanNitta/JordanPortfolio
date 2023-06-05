import React, { useRef, useState } from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Readmore from './AboutMe/Readmore'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    // const publicKey = process.env.PUBLIC_KEY;
    // const serviceId = process.env.SERVICE_ID;
    // const templateId = process.env.TEMPLATE_ID;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value < 2) {
            setNameError("Name must be longer than 2 character");
        } else {
            setNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email")
        } else {
            setEmailError("")
        }
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
        if (e.target.value < 5) {
            setMessageError("Message needs to be longer than 5 characters")
        } else {
            setMessageError("")
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (nameError && emailError && messageError) {
            navigate('/contact')
        }
        emailjs.sendForm('service_b04fb8k', 'template_c53d4q8', form.current, 'IXaEV43lANvgd0vOR')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                setName("")
                setMessage("")
                setEmail("")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-main-color h-screen w-full flex flex-col justify-center items-center box-border overflow-hidden'>
            <div className='flex justify-center items-center w-[98%] mb-4 sm:justify-center sm:items-center sm:w-[70%] lg:p-3'>
                <h2 className='text-main text-[30px] font-bold font-style sm:md:text-bigFontSize'>
                    Contact <span className='text-primary-color text-[30px] font-bold font-style sm:md:text-bigFontSize'>Me</span>
                </h2>
                {/* <p>Fill out thr form below to get in touch. Let's connect</p> */}
            </div>
            <div className='flex flex-col items-center justify-center w-[90%] lg:flex-row lg:w-[70%] lg:items-start lg:space-x-10 lg:p-10'>
                <div className='flex flex-col items-start justify-start w-[100%]'>
                    <ul className='flex flex-col w-full'>
                        <li className='my-3'>
                            <div className='bg-gray-800 h-10 flex p-2 rounded-main-radius'>
                                <MdLocationOn size={25} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="#" className='text-main font-semibold  hover:text-primary-color transition duration-500'>San Jose, CA</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-3'>
                            <div className='bg-gray-800 h-10 flex p-2 rounded-main-radius'>
                                <HiPhone size={25} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="tel:8082825825" className='text-main font-semibold font-style  hover:text-primary-color transition duration-500'>+1 808 282 5825</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-3'>
                            <div className=' bg-gray-800 h-10 flex p-2 rounded-main-radius'>
                                <MdEmail size={25} className='text-primary-color' />
                                <span className='ml-3'>
                                    <a href="mailto:jordannittarodrigues@gmail.com" className='text-main font-semibold font-style  hover:text-primary-color transition duration-500'>Jordannittarodrigues@gmail.com</a>
                                </span>
                            </div>
                        </li>
                        <li className='my-3'>
                            <div className='bg-gray-800 h-10 flex p-2 rounded-main-radius'>
                                <AiFillLinkedin size={25} className='text-primary-color' />
                                <span className='ml-3'>
                                    <Link to="https://www.linkedin.com/in/jordan-nitta-rodrigues-824857238/" className='text-main font-semibold font-style hover:text-primary-color transition duration-500 '>Jordan Nitta-Rodrigues</Link>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col w-full my-3 sm:justify-start'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col space-y-6 '>
                            <input type="text" name='name'
                                placeholder="Enter Name"
                                onChange={handleName}
                                value={name}
                                className='text-main rounded-main-radius bg-gray-800 h-10 outline-none pl-3 p-[20px]' />
                            <input type="email" name='email'
                                placeholder="Enter Email"
                                onChange={handleEmail}
                                value={email}
                                className='text-main rounded-main-radius bg-gray-800 h-10 focus:outline-none pl-3 p-[20px]' />
                        </div>
                        <div className='mt-7'>
                            <textarea name="message" placeholder='Description'
                                onChange={handleMessage}
                                value={message}
                                className=' text-main rounded-main-radius bg-gray-800 resize-none focus:outline-none pl-3 h-[100px] w-full p-[20px]'></textarea>
                        </div>
                        <div className='flex justify-center items-center sm:justify-start mt-3'>
                            <button className='text-main font-style bg-primary-color rounded-main-radius p-3 w-full sm:w-auto flex justify-center items-center md:p-3'>Send message
                                <FiSend size={20} className='ml-3' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact
