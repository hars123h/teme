
import bulldozer from '../images/bulldozer.webp';
import dart from '../images/dart.webp';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import seller from '../images/seller.webp';

import vertical from '../images/vertical.svg';

const Card2 = () => {
    const visibility = React.useContext(VisibilityContext);
    const elementRef1 = useRef();
    const elementRef2 = useRef();
    const [isInside1, setIsInside1] = useState(false);
    const [isInside2, setIsInside2] = useState(false);


    const handleMouseEnter1 = () => {
        setIsInside1(true);
    }

    const handleMouseLeave1 = () => {
        setIsInside1(false);
    }

    const handleMouseEnter2 = () => {
        setIsInside2(true);
    }

    const handleMouseLeave2 = () => {
        setIsInside2(false);
    }

    

    return (
        <div
            onClick={() => onClick(visibility)}
            className='w-[420px]  mr-[22px] mb-[12px] mt-[12px] border-gray-200 border '
            tabIndex={0}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
        >
            <div className={`flex relative`}>
                <Image src={bulldozer} className="h-[210px] w-[210px]" />
                <Image src={dart} className="h-[210px] w-[210px]" />
                <div className={`absolute bg-black opacity-30 h-[210px] w-[420px] ${isInside1?'':'hidden transition-all'}`}></div>
            </div>
            <div className="flex justify-between items-center py-[18px]">
                <div className='flex gap-2 items-center'>
                    <div className='ml-[16px] shadow-sm shadow-gray-400 rounded-[50%]'>
                        <Image src={seller} className="w-[52px] h-[52px] rounded-[50%] bg-[#f0f0f0]" />
                    </div>
                    <div className='ml-4'>
                        <div className='text-[18px] font-[500] text-black'>Do Not Miss</div>
                        <div className='flex items-center'>
                            <div className='text-[14px] font-[400] text-[#777777] pr-[4px] '>203K +  sold</div>
                            
                            <div className='ml-4'>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-[12px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className='w-[14px] h-[18px]'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Card2