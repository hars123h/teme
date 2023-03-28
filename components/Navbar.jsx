import React from 'react';
import { ReactSVG } from 'react-svg'
import styles from '../styles/Banner.module.css';
import back_box from '../images/back_box.webp';
import dollar_bubble from '../images/dollar_bubble.webp';
import mobile from '../images/mobile.webp';
import truck from '../images/truck.webp';
import Image from 'next/image';
import FlipCountdown from '@rumess/react-flip-countdown'
import logo from '../images/logo.svg';
import rabbit from '../images/rabbit.svg';
import down from '../images/down.svg';
import thumb from '../images/thumb.svg';
import lens from '../images/lens.svg';

const Navbar = () => {
    return (
        <div className='bg-[#859f49] grid grid-cols-3 mx-[44px] px-[44px]'>
            <div className='flex gap-2 items-center my-2'>
                <div className='bg-white rounded-xl'>
                    <Image src={logo} alt="temu" className='w-[48px] ' />
                </div>
                <div className='flex gap-[18px] items-center text-white  px-2'>
                    <div className='flex items-center gap-1'>
                        <div >
                            {/* <Image src={thumb} /> */}
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                height="1em" class="titleIcon--BKR3 titleIcon-2ImBL titleIcon-2eZLz" role="img" alt="" aria-label=""
                                fill="white" aria-hidden="true">
                                <title>Best Sellers</title>
                                <path d="M542.7 34.1c58.8 0 110.7 40.1 
                                127.6 98.8l0.7 2.5 0.5 1.1c0.3 0.9 0.6 1.8 0.9 2.7l0.7 2.8c6.2 29.5 9.5 59.1 9.5 88.8 0 26.2-2.4
                                52.3-7.2 78l-1.8 9.2 145.4 0.1c2.5 0 5 0.2 7.5 0.5l1.1 0.1 2.7 0.2c41.3 3.2 79.2 25.6 102.2 61.6l2.6 
                                4.2c15.3 25.2 22.4 54.8 20.2 84.5l0.1-1.4 0.1-1.1 0 1.1c0.1 5.4-0.3 10.6-1.2 15.3l-0.8 3.4-74 340c-2.1 8.1-5.5 
                                15.7-10.1 22.4l0.4-0.8 1.2-1.8-1.6 3.2c-9.9 18.7-23.9 34.8-40.8 47l-4.6 3.2c-21.9 14.4-47 21.9-72.5 21.9-0.9 
                                0-1.7 0-2.5-0.1l-612.3-0.2c-36.4 0-66.4-29.7-68.2-67.4l-0.1-3.6c-0.1-1.6-0.2-2.7 0-4l0.3-389.6c0-34.8 24.3-64.4
                                57.2-70.1l3.4-0.4c102-11.9 169.3-32.5 200-59 42.2-36.2 80.1-108.7 80.1-154.3 0-78.4 59-138.7 133.3-138.8z 
                                m-218.4 460.8c-28.3 0-51.2 22.9-51.2 51.2l0 204.8c0 28.3 22.9 51.2 51.2 51.2 28.3 0 51.2-22.9 51.2-51.2l0-204.8c0-28.3-22.9-51.2-51.2-51.2z">
                                </path>
                            </svg>
                        </div>
                        <div className='text-[13px]'>Best Sellers</div>
                    </div>


                    <div className='flex items-center gap-1'>
                    <div >
                            {/* <Image src={thumb} /> */}
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" 
                            height="1em" class="titleIcon--BKR3 titleIcon-2ImBL titleIcon-2eZLz st-current" role="img" alt="" 
                            aria-label="" fill="white" aria-hidden="true">
                            <title>Easter</title>
                            <path d="M622.4 389.9a593.2 593.2 0 0 0 56.4 57c39.5 30 81.2 57.1 123.6 84.1 11.7 7.3 15.4 12.4 10.2 25.6a505.4 505.4 0 0 1-85.6 139c-17.6 22.7-37.3 43.9-56.3 66.5a272.8 272.8 0 0 1 105.3 199.7h-577.8c-24.9 0-25.6 0-23.4-22.6a250.1 250.1 0 0 1 90-182.9s0 0 0 0c-19-21.2-37.3-43.2-57.1-62.9a515.7 515.7 0 0 1-130.2-254.5 830.9 830.9 0 0 1-19-137.6 327.7 327.7 0 0 1 68-228.2l7.4-7.3 6.5-4.4c18.3 13.2 39.5 24.9 57.1 40.3a512 512 0 0 1 141.9 212.8 1255.9 1255.9 0 0 1 80.4 365.7 90 90 0 0 0 0 13.9h115.6l0-40.2c5.9-68.8 7.3-141.9 13.9-211.4a299.9 299.9 0 0 1 109-215.8 57.1 57.1 0 0 1 79.7-7.3 705.1 705.1 0 0 1 156.5 133.9 292.6 292.6 0 0 1 73.2 149.9 193.1 193.1 0 0 1 0 21.2s0 5.9 0 12.5c-15.4 0-29.3-5.9-42.4-10.3a1811.7 1811.7 0 0 1-283.8-133.8l-13.9-8.1z"></path></svg>
                        </div>
                        <div className='text-[13px]'>Easters</div>
                    </div>


                    <div className='flex items-center gap-1'>
                    
                        <div className='text-[13px]'>New Arrivals</div>
                    </div>


                    <div className='flex items-center gap-1'>
                    
                        <div className='text-[13px]'>Categories</div>
                    </div>
                </div>

            </div>


            <div className='flex gap-2 items-start my-3 justify-center ' >
                <div className='border border-white w-full flex'>
                    <input className='flex-grow' type="text" placeholder='Best sellers' />
                    <button >
                        <Image src={lens} />
                    </button>
                </div>
            </div>


            <div className='flex gap-2 items-start my-3 justify-end'>
                <div>
                    <Image src={mobile} alt="truck" className='w-[36px] mr-[2px]' />
                </div>
                <div className='text-[#fff7a7] text-[22px] font-[600]  mr-[2px]'>
                    Get the Temu App
                </div>
            </div>
        </div>
    )
}

export default Navbar