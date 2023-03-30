import Image from 'next/image';
import React, { useRef, useState } from 'react';
import product1 from '../images/product1.webp';
import fire from '../images/assets/asset 16.webp';
import card_one from '../images/card_one.webp';


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
        <div className='w-[256px] mr-6' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='overflow-hidden border border-orange-600 rounded-md'>
                <Image src={card_one} ref={product_ref1} className={` ${mouse_entered ? 'scale-[1.1] transition-all' : ''}`} />
            </div>
            
        </div>
    )
}

export default Card