import Image from 'next/image';
import React, { useRef, useState } from 'react';
import product1 from '../images/product1.webp';
import fire from '../images/assets/asset 16.webp';
import baby_shoes from '../images/baby_shoes.webp';
import sale2 from '../images/sale2.webp';
import eye from '../images/eye.webp';
import play from '../images/play.webp';

const Card9 = () => {
    const product_ref1 = useRef();
    const [mouse_entered, setMouse_Entered] = useState(false);

    const handleMouseEnter = () => {
        setMouse_Entered(true);
    }

    const handleMouseLeave = () => {
        setMouse_Entered(false)
    }

    return (
        <div className='px-[9px] w-[276px] pt-[9px] pb-[9px] rounded-md hover:shadow-xl hover:border hover:border-gray-50 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='overflow-hidden relative'>
                <Image src={baby_shoes} ref={product_ref1} className={`w-[256px] h-[256px] ${mouse_entered ? '' : ''}`} />
                <div className="absolute bottom-0">
                    <Image src={sale2} className={`w-[256px] ${mouse_entered ? '' : ''}`} />
                    <div className='absolute right-[45px] bottom-[4px] text-[12px]  text-center font-[400]'>39% off discount</div>
                </div>
                <div className={`absolute bottom-[39px] text-[14px] items-center leading-[21px] left-[12px] flex gap-1 rounded-full px-[10px] py-[4px] font-[400] bg-[rgba(255,255,255,0.7)] ${mouse_entered?' transition-all':'invisible'}`}>
                   <Image src={eye} className="w-4 h-4"/>
                   <div>Quick look</div>
                </div>

                <div className={`absolute bottom-[39px] text-[14px] items-center leading-[21px] left-[12px] flex gap-1 rounded-full  font-[400]  ${mouse_entered===false?' transition-all':'invisible'}`}>
                   <Image src={play} className="w-[32px] h-[32px]"/>               
                </div>
            </div>
            <div className='font-[400] text-[14px] leading-[1.28em] mt-[5px] flex'>
                <div className='overflow-hidden whitespace-nowrap'>Toddler Baby Sock Shoes Non-slip Floor Socks With Fruit Print </div>
                <span>...</span>
            </div>
            <div className='flex items-center justify-between gap-2 mt-1'>
                <div className="flex items-center gap-[5px]">
                    <Image src={fire} className='w-[11px] h-[14px]' />
                    <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                    <div className='text-[13px] line-through text-[#aaaaaa] font-[400]'><span>$</span>2.99</div>
                    <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                    <div className='border border-orange-700 text-orange-700 rounded-md w-[37px] h-[18px] text-[12px] font-600 text-center'>-67%</div>
                </div>

                <div className='px-[8px] py-[2px] border border-gray-700 rounded-full hover:shadow-md hover:px-[9px] transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-[20px] h-[20px] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                    </div>
                </div>
                <div className='text-[14px] font-400'>(657)</div>
            </div>
            <div className='flex items-center justify-center mx-2 my-2 rounded-full bg-orange-500 h-[42px] text-white text-[16px] font-[500]'>
                <div>Add to cart</div>
            </div>
        </div>
    )
}

export default Card9