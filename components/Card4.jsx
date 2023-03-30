import bulldozer from '../images/bulldozer.webp';
import dart from '../images/dart.webp';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import seller from '../images/seller.webp';
import stylish_girl from '../images/stylish_girl.webp'
import vertical from '../images/vertical.svg';
import insta from '../images/insta.svg';

const Card3 = () => {
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
            className='  mr-[18px] mb-[12px] mt-[12px] flex items-center justify-center'
            tabIndex={0}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
        >
            <div className='px-[22px]
             h-[56px]   text-center text-[14px]
              leading-[1.28em] font-[500] text-[#222222]
               border-[1px] border-[#ddd] rounded-full hover:shadow-cstm cursor-pointer hover:border-[#ddd] flex justify-center items-center'>
                <div>Recommended</div>
            </div>
        </div>
    );
}

export default Card3