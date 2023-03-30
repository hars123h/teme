import Image from 'next/image';
import React, { useRef, useState } from 'react';
import product1 from '../images/product1.webp';
import fire from '../images/assets/asset 16.webp';
import stitch from '../images/stitch.webp';
import cleaner from '../images/cleaner.webp';

const Card7 = () => {
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
                <Image src={cleaner} ref={product_ref1} className={mouse_entered ? 'scale-[1.1] transition-all' : ''} />
            </div>
            <div className="text-center text-orange-600 text-[20px] font-[600] mt-5">
                RM 1.99
            </div>
            <div className='bg-gray-400 rounded-full h-[18px] mt-[10px] relative'>
                <div className='text-white font-[600] text-xs absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    60 SOLD
                </div>
                <div className='bg-orange-600 rounded-l-full h-[18px] mt-[10px] w-[55%]'>
                </div>
            </div>
        </div>
    )
}

export default Card7