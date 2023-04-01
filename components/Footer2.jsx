import React, { useState } from 'react';
import asset92 from '../images/mobile_assets/asset 92.svg';
import asset93 from '../images/mobile_assets/asset 93.svg';
import asset94 from '../images/mobile_assets/asset 94.svg';
import asset95 from '../images/mobile_assets/asset 95.svg';
import asset96 from '../images/mobile_assets/asset 96.svg';
import asset97 from '../images/mobile_assets/asset 97.svg';
import Image from 'next/image';

const Footer2 = () => {

    const [drop1Open, setDrop1Open] = useState(false);
    const [drop2Open, setDrop2Open] = useState(false);
    const [drop3Open, setDrop3Open] = useState(false);

    return (
        <div className='w-full'>
            <div>
                <div className='flex justify-between px-[13px] py-3' onClick={() => setDrop1Open(!drop1Open)}>
                    <div className='text-[15px] font-[500]'>Company info</div>
                    <div>
                        {
                            drop1Open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            )
                        }
                    </div>
                </div>

                {
                    drop1Open ? (
                        <div className="flex flex-col gap-1 bg-[#f5f5f5] px-[13px] text-[14px] font-[400] text-gray-500 leading-[16px]">
                            <div className='py-2'>About Temu</div>
                            <div className='py-2'>Contact us</div>
                            <div className='py-2'>Press</div>
                        </div>
                    ) : null
                }
            </div>

            <div className='h-[1px] bg-gray-100'></div>

            <div>
                <div className='flex justify-between px-[13px] py-3' onClick={() => setDrop2Open(!drop2Open)}>
                    <div className='text-[15px] font-[500]'>Customer service</div>
                    <div>
                        {
                            drop2Open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            )
                        }
                    </div>
                </div>

                {
                    drop2Open ? (
                        <div className="flex flex-col gap-1 bg-[#f5f5f5] px-[13px] text-[14px] font-[400] text-gray-500 leading-[16px]">
                            <div className="py-2">Terms of use</div>
                            <div className="py-2">Return and refund policy</div>
                            <div className="py-2">Intellectual property policy</div>
                            <div className="py-2">Shipping info</div>
                            <div className="py-2">Payment info</div>
                        </div>
                    ) : null
                }
            </div>

            <div className='h-[1px] bg-gray-100'></div>

            <div>
                <div className='flex justify-between px-[13px] py-3' onClick={() => setDrop3Open(!drop3Open)}>
                    <div className='text-[15px] font-[500]'>Help</div>
                    <div>
                        {
                            drop3Open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            )
                        }
                    </div>
                </div>

                {
                    drop3Open ? (
                        <div className="flex flex-col gap-1 bg-[#f5f5f5] px-[13px] text-[14px] font-[400] text-gray-500 leading-[16px]">
                            <div className="py-2">Support center</div>
                            <div className="py-2">Sitemap</div>
                            <div className="py-2">Privacy & cookie policy</div>
                            <div className="py-2">Temu purchase protection</div>
                            <div className="py-2">How to order</div>
                            <div className="py-2">How to track</div>
                        </div>
                    ) : null
                }
            </div>

            <div className='h-[1px] bg-gray-100'></div>

            <div className="flex flex-row justify-between px-[30px] py-4">
                <Image src={asset92} className='w-[23px] h-[23px]'/>
                <Image src={asset93} className='w-[23px] h-[23px]'/>
                <Image src={asset94} className='w-[23px] h-[23px]'/>
                <Image src={asset95} className='w-[23px] h-[23px]'/>
                <Image src={asset96} className='w-[23px] h-[23px]'/>
                <Image src={asset97} className='w-[23px] h-[23px]'/>
            </div>

            <div className='h-[1px] bg-gray-100'></div>

            <div className='py-6 text-center bg-gray-200 text-gray-400 text-[12px]'>
                    &#169; 2023 WhaleCo Inc.
            </div>

        </div>
    )
}

export default Footer2