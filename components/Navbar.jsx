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
            <div className='flex gap-2 items-start my-2'>
                <div className='bg-white rounded-xl'>
                    <Image src={logo} alt="temu" className='w-[48px] ' />
                </div>
                <div className='grid grid-cols-4 text-white border-white border px-2'>
                    <div className='flex items-center gap-1'>
                        <div >
                            <Image src={thumb} />
                        </div>
                        <div>Best Sellers</div>
                    </div>


                    <div className='flex items-center gap-1'>
                        <Image src={rabbit} />
                        <div>Easters</div>
                    </div>


                    <div className='flex items-center gap-1'>
                        <div>New Arrivals</div>
                    </div>


                    <div className='flex items-center gap-1'>
                        <div>Categories</div>
                        <div>
                            <Image src={down} />
                        </div>
                    </div>
                </div>

            </div>


            <div className='flex gap-2 items-start my-3 justify-center ' >
                <div className='border border-white w-full flex'>
                    <input className='flex-grow' type="text" placeholder='Best sellers' />
                    <button >
                        <Image src={lens}/>
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