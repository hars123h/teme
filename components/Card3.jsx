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
            className='w-[256px]  mr-[9px] mb-[12px] mt-[12px] border-gray-200 border '
            tabIndex={0}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
        >
            <div className={`flex relative`}>
                <Image src={stylish_girl} className="h-[256px] w-[256px]" />
                <Image src={insta} className="h-[24px] w-[24px] absolute top-[218px] left-[218px] z-10" />                
                <div className={`absolute bottom-0  containerr px-[14px]  h-[120px] w-[256px] ${isInside1?'':'hidden transition-all'}`}>
                    <div className='text-[14px] leading-[20px] font-[400] text-[#ffffff] pt-[12px] pb-[14px]'>Temu has everything that i need for any occasion 
                        <br />
                        use my code 'sure99' for extra...
                    </div>
                    <div className='text-[12px] leading-[18px] pb-[14px] text-[#e2e2e2]'>From Instagram</div>
                </div>
            </div>
           
        </div>
    );
}

export default Card3