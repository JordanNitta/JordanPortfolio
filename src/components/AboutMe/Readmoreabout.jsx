import Accoridan from './Accoridan'
import ProfilePic from '../../assets/img/profile.png'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import JordanUpdatedResume from '../../assets/img/JordanUpdatedResume.pdf'
import { AiFillLinkedin, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Readmore = ({ onClose, titleChange}) => {
    return (
        <div className="fixed top-0 mt-[68px] left-4 right-4 h-screen bg-gray-800 z-10 overflow-y-scroll rounded-main-radius sm:w-[90%] sm:mx-auto sm:h-[90%] md:w-[50%] lg:w-[40%] ">
            {/* fixed inset-0 flex items-center justify-center sm:max-w-lg mx-auto bg-gray-800 z-50 overflow-hidden rounded-main-radius */}
            <div className='flex justify-end mr-3'>
                <AiOutlineClose size={35} className='text-white fixed mt-2 cursor-pointer' onClick={onClose} />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center justify-start mt-10'>
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
                    <div className='p-6'>
                        <h1 className='text-main font-style font-semibold text-[18px]'>About <span className='text-primary-color font-style font-semibold text-[18px]'>Me</span></h1>
                        <p className='text-main mt-4'>Hi I'm Jordan Nitta-Rodrigues and I am a passionate frontend developer with a passion for creating an intuitive user experience on the web. With an eye for design I strive to craft visually appealing and functional websites. My journey as a frontend developer has allowed me to combine my creativity and technical skills to bring ideads to life.</p>
                    </div>
                    <div className='p-6'>
                        <h1 className='text-main font-style font-semibold text-[18px]'>Programming <span className='text-primary-color font-style font-semibold text-[18px]'>Skills</span></h1>
                        <Accoridan />
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <button onClick={() => window.open(JordanUpdatedResume, '_blank')} className='h-[50px] w-[95%] border-primary-color rounded-md border-2  flex justify-center items-center mb-2 text-medium font-style tracking-tighter text-primary-color'>
                        View Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Readmore