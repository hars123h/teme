import Image from 'next/image';
import React, { useRef, useState } from 'react';
import product1 from '../images/product1.webp';
import fire from '../images/assets/asset 16.webp';


const Card = () => {
    const product_ref1 = useRef();
    const [mouse_entered, setMouse_Entered] = useState(false);

    const handleMouseEnter = () => {
        setMouse_Entered(true);
    }

    const handleMouseLeave = () => {
        setMouse_Entered(false)
    }

    return (
        <div className='w-60 mr-6' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='overflow-hidden'>
                <Image src={product1} ref={product_ref1} className={mouse_entered ? 'scale-[1.1] transition-all' : ''} />
            </div>
            <div className='flex items-center gap-2 mt-3'>
                <Image src={fire} className='w-[11px] h-[14px]' />
                <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                <div className='text-[13px] line-through text-[#aaaaaa] font-[400]'><span>$</span>2.99</div>
                <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                <div className='border border-orange-600 text-orange-600 rounded-md w-[37px] h-[18px] text-[12px] font-600 text-center'>-67%</div>
            </div>
            <div className="w-[204px] mt-2 bg-gray-200 h-[3px]">
                <div className="bg-black h-[3px] w-[67%]" ></div>
            </div>
            <div className='text-[#555555] font-[400] text-[13px] mt-2'>Selling Fast</div>
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
        </div>
    )
}

export default Card