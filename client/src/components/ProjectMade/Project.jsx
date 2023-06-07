import React from 'react'
import StarbucksProject from '../../assets/img/StarbuckClone.png'
import { Link } from 'react-router-dom'
const Project = () => {
    return (
        <>
            <div className='bg-main-color w-full flex justify-center items-center h-screen border-b-[1px] border-primary-color'>
                <div className='flex-col justify-center items-center w-[90%] lg:flex px-20 lg:flex-row lg:w-[88%]'>
                    <div className='flex justify-center lg:w-full'>
                        <img src={StarbucksProject} alt="Starbucks Project" className='h-[200px] md:w-[500px] md:h-[320px] rounded-md ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-8 sm:mt-0 '>
                        <h4 className='text-[30px] text-main font-semibold font-style'>Starbucks Clone</h4>
                        <h4 className='text-main text-[20px] pt-2 font-semibold font-style'>Full Stack Development</h4>
                        <p className='text-center text-main pt-2 text-[17px] lg:w-[70%] font-style'>Collaborated with a developer to develop a Starbucks Clone application where users can order and create an account utilizing React, MongoDB, Tailwind CSS.</p>
                        <div className='flex space-x-10 w-[300px] justify-center'>
                            <button className='h-[40px] w-[40%] border-primary-color rounded-md border-2 flex justify-center items-center mt-4'>
                                <Link to='https://github.com/abrarhussain-00/starbucksClone' className='text-medium font-style tracking-tighter text-primary-color'>Github</Link>
                            </button>
                            <button className='h-[40px] w-[40%] border-primary-color rounded-md border-2 flex justify-center items-center mt-4'>
                                <Link to='#' className='text-medium font-style tracking-tighter text-primary-color'>Demo</Link>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Project
