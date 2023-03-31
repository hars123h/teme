import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import asset101 from '../images/mobile_assets/asset 101.svg';
import asset102 from '../images/mobile_assets/asset 102.svg';
import asset103 from '../images/mobile_assets/asset 103.svg';
import asset104 from '../images/mobile_assets/asset 104.svg';
import asset0 from '../images/mobile_assets/asset 0.webp';


const Navbar2 = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        setHeight(newHeight);
        setWidth(newWidth);
        console.log("updating height width");
    },[]);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newHeight = window.innerHeight;
            const newWidth = window.innerWidth;
            setHeight(newHeight);
            setWidth(newWidth);
            console.log("updating height width");
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    console.log("give height and width", width, height);
    return (
        <div style={{
            height: width * 0.1
        }} className={`flex   items-center justify-around`}>
            <div>
                <Image src={asset101} className={`mr-4 ml-4`} style={{ width: width * 0.2, height: height * 0.1 }} />
            </div>
            <div className='bg-[#ececec] text-[#666666] rounded-full flex gap-1 items-center px-3 w-[40%] h-[75%]'>
                <div className='flex items-center gap-2'>
                    <Image src={asset102} className='w-[15px] h-[15px]' />
                    <input className='text-[18px] outline-none leading-[24px] text-start bg-transparent' placeholder='salad spinner' />
                </div>
            </div>
            <div className="flex flex-row items-center h-[75$]">
                <Image src={asset103} className='p-2' style={{ width: width * 0.1, height: height * 0.1 }} />
                <Image src={asset0} className=' p-2 rounded-full w-12 h-12'  />
                <Image src={asset104} className=' p-2' style={{ width: width * 0.1, height: height * 0.1 }} />
            </div>
        </div>
    )
}

export default Navbar2