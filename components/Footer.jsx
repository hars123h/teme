import React from 'react';
import play_store from '../images/play_store.png';
import apple from '../images/apple.png';
import Image from 'next/image';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import pintrest from '../images/pintrest.png';
import song from '../images/song.png';
import youtube from '../images/you tube.png';
import master from '../images/master.webp';
import paypal from '../images/paypal.webp';

const Footer = () => {
    return (
        <div className='bg-[#1e1e1e] pt-[29px] px-[40px] h-[518px]'>
            <div className='px-[44px] mb-[8px] bg-[#1e1e1e] flex'>
                <div className='w-[210px] h-[230px] mr-[129px]'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Company info</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>About Temu</div>
                    <div className='mb-[8px] leading-[1.5em] text-[12px] font-[400] text-white opacity-40'>Temu - Team Up, Price Down!</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Affiliate & Influencer</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Campus Ambassador</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Contact Us</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Careers</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Press</div>
                </div>

                <div className='w-[163px] h-[176px] mr-[129px]'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Customer service</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Terms of use</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Return and refund policy</div>
                    <div className='mb-[8px] leading-[1.76em] text-[12px] font-[400] text-white opacity-70'>Intellectual  property policy</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Shipping info</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Student discount</div>
                </div>

                <div className='w-[175px] h-[209px] mr-[129px]'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Help</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Support center & FAQ</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Temu purchase protection</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Privacy policy and setting</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Sitemap</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>How to order</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>How to track</div>
                    <div className='mb-[8px] leading-[1.76em] text-[13px] font-[400] text-white opacity-70'>Sell on Temu</div>
                </div>

                <div className='w-[192px] h-[144px] mr-[129px] text-white'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Download the Temu App</div>
                    <div className='flex items-center my-[11px] rounded-full border border-gray-600'>
                        <div className='ml-[19px] my-[10px] mr-[8px]'>
                            <Image src={apple} className="w-[30px] h-[30px]" />
                        </div>
                        <div className='flex flex-col my-[2px] justify-center'>
                            <div className='text-[12px] font-[400] leading-[1.5em] opacity-60'>Download on the</div>
                            <div className='text-[16px] font-[500] leading-[1em] '>App Store</div>
                        </div>
                    </div>
                    <div className='flex items-center my-[11px] rounded-full border border-gray-600'>
                        <div className='ml-[19px] my-[10px] mr-[8px]'>
                            <Image src={play_store} className="w-[30px] h-[30px]" />
                        </div>
                        <div className='flex flex-col my-[2px] justify-center'>
                            <div className='text-[12px] font-[400] leading-[1.5em] opacity-60'>Get it on</div>
                            <div className='text-[16px] font-[500] leading-[1em] '>Google Play</div>
                        </div>
                    </div>
                </div>

                <div className='w-[168px] h-[144px] mr-[34px] text-white'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Connect with Temu</div>
                    <div className='grid grid-cols-3'>
                        <Image src={instagram} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600 "/>
                        <Image src={facebook} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600"/>
                        <Image src={twitter} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600"/>
                        
                    </div>
                    <div className='grid grid-cols-3 mt-[12px]'>
                        
                        <Image src={youtube} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600"/>
                        <Image src={song} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600"/>
                        <Image src={pintrest} className="w-[32px] h-[32px] hover:shadow-xl hover:shadow-gray-600"/>
                    </div>
                </div>
            </div>

            <div className='px-[44px] mb-[8px] mt-[38px] bg-[#1e1e1e] flex'>
                <div className='w-[427px]  mr-[325px]'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>Secure certification</div>
                    <div className='flex gap-[8px]'>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                    </div>
                </div>
                <div className='w-[427px]  mr-[44px]'>
                    <div className='mb-[8px] leading-[1.5em] text-[14px] font-[700] text-white'>We accept</div>
                    <div className='flex gap-[8px]  flex-wrap'>
                        <Image src={paypal} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        <Image src={master} className="h-[28px] w-auto"/>
                        
                    </div>
                </div>            
            </div>

            <div className='px-[44px] mb-[8px] mt-[38px] text-white flex'>
                <div className='h-[76px] text-center w-full border-t border-[rgba(249,250,251,0.3)] flex justify-center items-center'>
                    <div className='leading-[1.76em] text-[13px] font-[400] text-white opacity-70'> Ⓒ 2023 WhaleCo Inc.</div>
                </div>
            </div>


        </div>
    )
}

export default Footer