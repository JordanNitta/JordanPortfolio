import React from 'react'
import { useState } from 'react'
const Accoridan = () => {
    const [open, setOpen] = useState(false);
    const [openSection2, setOpenSection2] = useState(false);
    const [openSection3, setOpenSection3] = useState(false);
    const [openSection4, setOpenSection4] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleToggleSection2 = () => {
        setOpenSection2(!openSection2);
    };

    const handleToggleSection3 = () => {
        setOpenSection3(!openSection3);
    };

    const handleToggleSection4 = () => {
        setOpenSection4(!openSection4);
    };
    return (

        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={handleOpen} class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded={open} aria-controls="accordion-flush-body-1">
                    <span className='text-main'>Languages</span>
                    <svg data-accordion-icon className={`{${open ? 'w-6 h-6 rotate-180' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1" className={open ? 'overflow-hidden' : 'hidden'}>
                <div class="py-5 border-b border-gray-200 text-main ">
                    <ul className="text-main">
                        <li className='p-1'>
                            Javascript
                        </li>
                        <li className='p-1'>
                            Python
                        </li>
                        <li className='p-1'>
                            HTML
                        </li>
                        <li className='p-1'>
                            CSS
                        </li>
                    </ul>
                </div>
            </div>
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={handleToggleSection2} class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded={open} aria-controls="accordion-flush-body-1">
                    <span className='text-main'>Frameworks</span>
                    <svg data-accordion-icon className={`{${openSection2 ? 'w-6 h-6 rotate-180' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1" className={openSection2 ? 'overflow-hidden' : 'hidden'}>
                <div class="py-5 border-b border-gray-200 text-main ">
                    <ul className="text-main">
                        <li className='p-1'>
                            React
                        </li>
                        <li className='p-1'>
                            Express.js
                        </li>
                        <li className='p-1'>
                            Flask
                        </li>
                        <li className='p-1'>
                            Vite
                        </li>
                        <li className='p-1'>
                            Tailwind
                        </li>
                        <li className='p-1'>
                            Material UI
                        </li>
                        <li className='p-1'>
                            Boostrap
                        </li>
                    </ul>
                </div>
            </div>
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={handleToggleSection3} class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded={open} aria-controls="accordion-flush-body-1">
                    <span className='text-main'>Database</span>
                    <svg data-accordion-icon className={`{${openSection3 ? 'w-6 h-6 rotate-180' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1" className={openSection3 ? 'overflow-hidden' : 'hidden'}>
                <div class="py-5 border-b border-gray-200 text-main ">
                    <ul className="text-main">
                        <li className='p-1'>
                            MongoDB
                        </li>
                        <li className='p-1'>
                            MySQL
                        </li>
                    </ul>
                </div>
            </div>
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={handleToggleSection4} class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded={open} aria-controls="accordion-flush-body-1">
                    <span className='text-main'>Tools</span>
                    <svg data-accordion-icon className={`{${openSection4 ? 'w-6 h-6 rotate-180' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1" className={openSection4 ? 'overflow-hidden' : 'hidden'}>
                <div class="py-5 border-b border-gray-200 text-main ">
                    <ul className="text-main">
                        <li className='p-1'>
                            AWS
                        </li>
                        <li className='p-1'>
                            Git
                        </li>
                        <li className='p-1'>
                            Github
                        </li>
                        <li className='p-1'>
                            VS Code
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accoridan
