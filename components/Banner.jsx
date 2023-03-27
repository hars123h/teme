import React from 'react';
import styles from '../styles/Banner.module.css';
import back_box from '../images/back_box.webp';
import dollar_bubble from '../images/dollar_bubble.webp';
import mobile from '../images/mobile.webp';
import truck from '../images/truck.webp';
import Image from 'next/image';
import FlipCountdown from '@rumess/react-flip-countdown'

const Banner = () => {
    return (
        <div className='bg-black grid grid-cols-3 mx-[44px] px-[44px] h-[63px] '>
            <div className='flex gap-2 items-start my-3'>
                <div>
                    <Image src={truck} alt="truck" className='w-[36px] mt-[2px] mr-[2px]' />
                </div>
                <div className='text-[#a4f29a] font-[600] leading-5 mr-[2px]'>
                    <div className='text-[22px]'>Free shipping</div>
                    <div className='text-[16px]'>On all orders</div>
                </div>
                <div className=''>
                    <FlipCountdown
                        theme={'light'}
                        size='small'
                        hideYear
                        hideMonth
                        hideDay
                        hourTitle=' '
                        minuteTitle=' '
                        secondTitle=' '
                        endAt={'2023-3-28 22:26:58'} // Date/Time
                    />
                </div>
            </div>
            <div className='flex gap-2 items-start my-3 justify-center ' >
                <div>
                    <Image src={back_box} alt="truck" className='w-[36px] mt-[2px] mr-[2px]' />
                </div>
                <div className='text-[#fff7a7] font-[600] leading-5 mr-[2px] '>
                    <div className='text-[22px]'>Free returns</div>
                    <div className='text-[16px]'>Within 90 days</div>
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

export default Banner