import asset99 from '../images/mobile_assets/asset 99.svg';
import green_tick from '../images/mobile_assets/green_tick.webp';
import coupan from '../images/mobile_assets/coupan.webp';
import React from 'react';
import { Breadcrumb } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import klarna from '../images/mobile_assets/klarna.webp';
import after_pay from '../images/mobile_assets/after_pay.webp';
import pay_pal from '../images/mobile_assets/pay_pal.webp';
import Card5 from '../components/Card5';
import Footer from '@/components/Footer';
import Card9 from '@/components/Card9';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import FlipCountdown from '@rumess/react-flip-countdown'
import banner_girl from '../images/banner_girl.gif';
import asset7 from '../images/assets/asset 7.webp';
import asset8 from '../images/assets/asset 8.webp';
import asset9 from '../images/assets/asset 9.webp';
import asset10 from '../images/assets/asset 10.webp';
// import asset11 from '../images/assets/asset 11.webp';
import asset36 from '../images/assets/asset 36.png';
import banner_img1 from '../images/banner_img1.webp';
import banner_img2 from '../images/banner_img2.webp';
import banner_img3 from '../images/banner_img3.webp';
import banner_img4 from '../images/banner_img4.webp';
import banner_img5 from '../images/banner_img5.webp';
import banner_img6 from '../images/banner_img6.webp';
import card_one from '../images/card_one.webp';
import Card8 from '@/components/Card8'
import { useEffect, useState, useRef } from 'react'
import RoundSlider from '@/components/RoundSlider'
import RoundSlider2 from '@/components/RoundSlider2'
import RoundSlide3 from '@/components/RoundSlide3'
import RoundSlide4 from '@/components/RoundSlide4'
import RoundSlide5 from '../components/RoundSlide5';
import RoundSlide6 from '../components/RoundSlide6';
import Navbar2 from '@/components/Navbar2';
import asset2 from '../images/mobile_assets/asset 2.gif';
import asset3 from '../images/mobile_assets/asset 3.gif';
import asset118 from '../images/mobile_assets/asset 118.svg';
import asset11 from '../images/mobile_assets/asset 11.png';
import asset12 from '../images/mobile_assets/asset 12.webp';
import slide2 from '../images/mobile_assets/slide2.webp';
import slide3 from '../images/mobile_assets/slide3.webp';
import asset79 from '../images/mobile_assets/asset 79.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { DownOutlined, SmileOutlined, CheckOutlined } from '@ant-design/icons';
import { Dropdown, Popover, Space } from 'antd';
import { Pagination } from 'swiper'
import Card2 from '@/components/Card2'
import Footer2 from '@/components/Footer2'

const CategoryRound = () => {
    return (
        <div className='flex flex-col gap-1 items-center mt-2'>
            <Image src={asset79} className='rounded-[50%] p-1' />
            <div className='text-xs text-center'>Jewelry & Accessories</div>
        </div>
    )
}

const CategoryCard = () => {
    return (
        <div className="flex flex-col">
            <Image src={asset79} />
            <div className='flex flex-row gap-[2px] w-full'>
                <div className="flex items-center my-[1px]">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <div className='text-[12px] font-400'>(7,122)</div>
            </div>
            <div className='flex flex-row gap-[3px] items-center'>
                <div className='text-[14px] text-black font-[600]'>$0.98</div>
                <div className='text-[12px]  text-[#888888] font-[400]'>7.8K + sold</div>
            </div>
        </div>
    )
}

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Relevance
            </a>
        ),
        icon: <CheckOutlined style={{ color: 'green' }} />,
        disabled: false
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Top Sales
            </a>
        ),
        disabled: false,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Most Recent
            </a>
        ),
        disabled: false,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Price low to high
            </a>
        ),
        disabled: false,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Price high to low
            </a>
        ),
        disabled: false,
    },
];

const cart = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [showCategory, setShowCategory] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        setHeight(newHeight);
        setWidth(newWidth);
        console.log("updating height width");
        //console.log(navRef.current.style);
    }, []);

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

    const controlNavbar = () => {
        console.log(window.scrollY)
        if (typeof window !== 'undefined' || true) {
            if (window.scrollY == '0') {
                setShow(false);
                setLastScrollY(0);
                return;
            }
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(true);
            } else { // if scroll up show the navbar
                setShow(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' || true) {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (<>

        <Head>
            <title>Category | Explore the Latest Clothing, Beauty, Home, Jewelery & More</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/temu.svg" />
        </Head>

        {width >= 1024 ?
            <div>
                <nav className='w-full'>
                    <div className='bg-orange-600'>
                        <Banner />
                    </div>
                    <div className='px-[88px] flex items-center gap-[20px] h-[70px] border-b border-gray-200'>
                        <Image src={asset99} className='w-[48px] h-[48px]' />
                        <div className='flex flex-row gap-[5px] text-[#0cab00] items-center'>
                            <div>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="lock-3Dn-o" aria-hidden="true" fill='#0cab00'><path d="M512 16.2c139.9 0 253.3 113.4 253.3 253.3l0 70 43.1 0c62.6 0 113.9 48.6 118.3 110.1l0.3 8.5 0 431.2c0 65.5-53.1 118.6-118.6 118.5l-592.8 0c-65.5 0-118.6-53.1-118.6-118.5l0-431.2c0-65.5 53.1-118.6 118.6-118.6l43.1 0 0-70c0-136 107.2-247 241.7-253.1l11.6-0.2z m296.4 398.8l-592.8 0c-23.8 0-43.1 19.3-43.1 43.1l0 431.2c0 23.8 19.3 43.1 43.1 43.1l592.8 0c23.8 0 43.1-19.3 43.1-43.1l0-431.2c0-23.8-19.3-43.1-43.1-43.1z m-296.4 123.9c22.3 0 40.4 18.1 40.4 40.5l0 188.6c0 22.3-18.1 40.4-40.4 40.4-22.3 0-40.4-18.1-40.4-40.4l0-188.6c0-22.3 18.1-40.4 40.4-40.5z m0-447.3c-98.2 0-177.9 79.6-177.9 177.9l0 70 355.8 0 0-70c0-94.8-74.2-172.3-167.8-177.6l-10.1-0.3z"></path></svg>
                            </div>
                            <div className='text-[13px] font-[500]'>
                                All data will be encrypted
                            </div>
                        </div>
                    </div>
                    <div className='px-[88px] mt-[21px]'>
                        <Breadcrumb
                            separator={<RightOutlined style={{ fontSize: '10px' }} />}
                            items={[
                                {
                                    title: 'Home',
                                },
                                {
                                    title: 'cart',
                                },
                            ]}
                        />
                    </div>
                    <div className='px-[88px] flex mt-[2px] justify-between'>
                        <div className='w-[890px]'>
                            <div className="flex flex-row justify-between items-center py-[8px] px-[12px] mt-[20px] rounded-md bg-[rgba(10,136,0,0.1)]">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={green_tick} className='w-[22px] h-[22px]' />
                                    </div>
                                    <div className='mx-4 text-xs bg-[#feefe1]'>|</div>
                                    <div className='text-[16px] leading-[20px] font-[500] text-black'>Free shipping on all orders</div>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <div className='text-[16px] leading-[20px] font-[500] text-black'>Ends in</div>
                                    <div>
                                        <FlipCountdown
                                            theme={'dark'}
                                            size='extra-small'
                                            hideYear
                                            hideMonth
                                            hideDay
                                            hourTitle=' '
                                            minuteTitle=' '
                                            secondTitle=' '
                                            endAt={'2023-4-12 22:26:58'} // Date/Time
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center py-[8px] px-[12px] mt-[10px] rounded-md bg-[#feefe1]">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={coupan} className='w-[22px] h-[22px]' />
                                    </div>
                                    <div className='mx-4 text-xs bg-[#feefe1]'>|</div>
                                    <div className='text-[16px] leading-[20px] font-[500] text-black'>
                                        Get &#x24;70 coupan bundle for future orders, add <span className='text-orange-600'> &#x24;19</span> more &gt;
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <div className='text-[16px] leading-[20px] font-[500] text-black'>Ends in</div>
                                    <div>
                                        <FlipCountdown
                                            theme={'dark'}
                                            size='extra-small'
                                            hideYear
                                            hideMonth
                                            hideDay
                                            hourTitle=' '
                                            minuteTitle=' '
                                            secondTitle=' '
                                            endAt={'2023-4-12 22:26:58'} // Date/Time
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row items-center justify-between mt-[20px]'>
                                <div className='flex flex-row text-[16px] font-[500] gap-[40px]'>
                                    <div className='flex flex-col justify-center items-center gap-[3px]'>
                                        <div className='flex flex-row items-center gap-[2px]'>
                                            <div>
                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" className="icon-3YFD- st-current" aria-hidden="true" fill="currentColor"><path d="M426.7 917.3c35.3 0 64-28.7 64-64 0-35.3-28.7-64-64-64-35.3 0-64 28.7-64 64 0 35.3 28.7 64 64 64z m341.3 0c35.3 0 64-28.7 64-64 0-35.3-28.7-64-64-64-35.3 0-64 28.7-64 64 0 35.3 28.7 64 64 64z m-576-789.3c14.8 0 31.8 3 50.1 11.9 26.2 12.7 47.2 34.6 59 64.5l2.9 8.3c3.4 9.3 5.6 19.3 7.8 34.7l1.1 8.6 530.9 0c56.6 0 102.8 44.1 106.4 99.7l0.2 7.1c0 5-0.4 9.9-1.1 14.8l-6.8 47.5-34.4 186.6c-9.8 62.9-61.2 110.2-123.3 113.9l-7.8 0.2-366.7 0c-65.3 0-120.6-48.3-131-113.7l-42.5-271.1-2-15.1-1.7-14.7-4-36.9-1.5-12.2-1.4-9.5-1.4-7c-0.5-2-0.9-3.6-1.3-4.9-6.3-19.5-17-26.1-28.2-27.2l-3.3-0.1-85.3 0c-23.6 0-42.7-19.1-42.7-42.7 0-21.9 16.5-39.9 37.7-42.4l5-0.3 85.3 0z m651.8 213.3l-520.6 0 40.4 257.5c3.6 22.4 20.8 39 41.5 41.4l5.2 0.3 366.7 0c23 0 43-17.5 47-43.1l35.2-192 5.6-39.8c0.1-1 0.2-2 0.3-2.9 0-10.5-7.5-19.2-17.5-21l-3.8-0.4z" className=""></path></svg>
                                            </div>
                                            <div>Cart</div>
                                        </div>
                                        <div className='h-[4px] w-[22px] bg-gray-500 rounded-full'></div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-[3px]'>
                                        <div className='flex flex-row items-center gap-[2px]'>
                                            <div>
                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" className="icon-3YFD- st-current" aria-hidden="true" fill="currentColor"><path d="M175.3 228.4c-93.8 95.9-93.8 251 0 347l250.2 255.9c47.7 48.7 125.3 48.7 173 0l250.2-255.9c93.8-96 93.8-251.1 0-347l-8.7-8.5c-91.7-85-232.3-85-324.1 0l-4 3.7 5 4.9c-94.3-96.4-247.4-96.4-341.6-0.1z m622.1 50.1c66.6 68.1 66.6 178.7 0 246.8l-250.2 255.9c-19.5 20-50.9 20-70.4 0l-250.2-255.9c-66.6-68.1-66.6-178.7 0-246.8 66.1-67.6 173-67.6 239.1 0l20.6 21.2c14 14.4 37.2 14.4 51.3 0.1l20.8-21.2c66.1-67.6 173-67.6 239-0.1z" className=""></path></svg>                                        </div>
                                            <div>Wishlist</div>
                                        </div>
                                        <div className='h-[4px] w-[22px] bg-gray-500 rounded-full'></div>
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className='mt-[21px] pb-[20px] border-b border-gray-300'>
                                <div className='w-[287px] flex flex-col mx-auto'>
                                    <div className='flex flex-row justify-between items-center'>
                                        <div>
                                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" className="icon-3lgFL" role="img" alt="cart" aria-label="" fill="#aaaaaa"><path d="M356.7 726.2c-30.6 0-55.5 24.8-55.5 55.5 0 30.6 24.8 55.5 55.5 55.4 30.6 0 55.5-24.8 55.5-55.4 0-30.6-24.8-55.5-55.5-55.5z m0 17.1c21.2 0 38.4 17.2 38.4 38.4 0 21.2-17.2 38.4-38.4 38.4-21.2 0-38.4-17.2-38.4-38.4 0-21.2 17.2-38.4 38.4-38.4z"></path><path d="M675.8 726.2c-30.6 0-55.5 24.8-55.4 55.5 0 30.6 24.8 55.5 55.4 55.4 30.6 0 55.5-24.8 55.5-55.4 0-30.6-24.8-55.5-55.5-55.5z m0 17.1c21.2 0 38.4 17.2 38.4 38.4 0 21.2-17.2 38.4-38.4 38.4-21.2 0-38.4-17.2-38.4-38.4 0-21.2 17.2-38.4 38.4-38.4z"></path><path d="M123 256.4c4.8 0 9.3 0.3 15.4 1.4 9.3 1.6 18.4 4.6 27 9.4 15.4 8.6 27.5 22 35 40.7l1 2.9 0.4 1.3 8.3 45.7 11.1 63.9 24.8 144.8 7.2 42.8c6.1 34.3 38 60 76 61l2.4 0 358.2 0c38.4 0 71-25.1 78.1-59.4l0.4-2.1 50.1-248.1c0.9-4.6 5.4-7.6 10.1-6.7 4.3 0.9 7.2 4.8 6.8 9.1l-0.1 1-50.2 247.8c-7.4 42.8-46.6 74.3-92.7 75.4l-2.5 0.1-358.2 0c-47.1 0-87.5-31.7-95.2-75.2l-24.4-143.5-15.4-88.8-9-50.4-2.4-13.5-0.9-2.2c-5.6-13.9-14.2-23.7-25-30.4l-2.2-1.3c-6.8-3.8-14.2-6.2-21.7-7.5-4.1-0.7-7.3-1-10.4-1.1l-2 0-87.9 0c-4.7 0-8.5-3.8-8.6-8.5 0-4.4 3.3-8 7.6-8.5l1-0.1 87.9 0z" class=""></path><path d="M295.3 365.8l0 17.1 58 0 0-17.1-58 0z m92.2 0l0 17.1 58 0 0-17.1-58 0z m92.1 0l0 17.1 58 0 0-17.1-58 0z m92.2 0l0 17.1 58 0 0-17.1-58 0z m92.1 0l0 17.1 58.1 0 0-17.1-58.1 0z" class=""></path><path d="M348.6 521.6l0 17.1 58 0 0-17.1-58 0z m92.1 0l0 17.1 58.1 0 0-17.1-58.1 0z m92.2 0l0 17.1 58 0 0-17.1-58 0z m92.2 0l0 17.1 58 0 0-17.1-58 0z" className=""></path></svg>
                                        </div>
                                        <div className='flex flex-col gap-[4px]'>
                                            <div className='text-[15px] leading-[23px] font-[500]'>Your shopping cart is empty</div>
                                            <div className='text-[13px] leading-[19px] font-[400] text-[#777777]'>Add your favorite items in it.</div>
                                        </div>
                                    </div>
                                    <div className='w-[250px] h-[41px] text-white font-[500] text-[16px] flex items-center justify-center rounded-full bg-orange-600 mx-auto'>
                                        <div>See trending items</div>
                                    </div>
                                </div>
                            </div>

                            <div className='font-[500] text-[16px] mt-[20px]'>
                                Wishlist
                            </div>

                            <div className='mt-[21px]'>
                                <div className='w-[297px] flex flex-col mx-auto'>
                                    <div className='flex flex-row justify-between items-center'>
                                        <div>
                                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" className="icon-3lgFL" role="img" alt="cart" aria-label="" fill="#aaaaaa">
                                                <path d="M279.9 245.2l8.9 16c-15.8 8.8-30.4 19.8-43.4 32.7l-12.9-12.8c14.2-14.2 30.2-26.2 47.4-35.9z m114.7-26.6l-0.9 18.2c-18.2-0.9-36.4 0.7-54.2 4.8l-4.1-17.7c19.4-4.5 39.3-6.3 59.2-5.3z m111.4 37.9l-10.4 14.9c-15-10.4-31.3-18.6-48.5-24.5l5.8-17.2c18.8 6.4 36.6 15.4 53.1 26.8z m82.8-19.2l7.5 16.6c-16.5 7.5-31.9 17.2-45.9 29.1l-11.8-13.9c15.3-13 32.2-23.7 50.2-31.8z m116.5-17.1l-2.4 18.1c-18-2.4-36.4-2.3-54.3 0.3l-2.7-18c19.7-2.9 39.7-3 59.4-0.4z m107.9 47l-11.6 14c-14.1-11.7-29.7-21.2-46.3-28.4l7.3-16.7c18.2 7.9 35.2 18.3 50.6 31.1z m67.1 97.5l-17.3 5.8c-5.7-17.2-13.8-33.6-24.2-48.7l15-10.3c11.3 16.5 20.2 34.4 26.5 53.2z m5 118l-17.7-4.2c4.3-17.7 6-35.9 5.3-54.1l18.1-0.8c0.8 19.9-1.1 39.8-5.7 59.1z m-58.4 102.8l-12.9-12.8 2.1-2.2c12.4-12.5 23-26.5 31.6-41.5l15.8 9c-9.3 16.5-20.9 31.7-34.5 45.4l-2.1 2.1z m-80.5 80.5l-12.8-12.9 40.2-40.2 12.9 12.9-40.3 40.2z m-80.4 80.4l-12.9-12.8 40.2-40.3 12.9 12.9-40.2 40.2z m-93.3 67.6l40.2-40.2 12.8 12.9-40.2 40.2-12.8-12.9z m-101.9 8.1l12.8-12.8 4.6 4.5c10.7 10.7 24.6 16.7 39.3 17.5l-0.9 18.1c-19.2-1-37.5-8.9-51.3-22.7l-4.5-4.6z m-80.5-80.4l12.9-12.9 40.2 40.2-12.9 12.9-40.2-40.2z m-80.4-80.5l12.8-12.8 40.3 40.2-12.9 12.9-40.2-40.3z m-80.6-80.6l13.1-12.6 3 3 37.1 37.1-12.9 12.9-37.1-37.1c-1.1-1.1-2.2-2.2-3.2-3.3z m-54.9-104.1l17.8-3.7c3.7 17.8 9.9 35 18.4 51.1l-16.1 8.5c-9.3-17.6-16.1-36.5-20.1-55.9z m8.6-118.1l17.1 6.2c-6.3 17.1-10.2 35-11.5 53.2l-18.2-1.4c1.5-19.8 5.7-39.4 12.6-58z m49.2-77l12.9 12.9c-7.1 7.1-13.5 14.7-19.4 22.6l-14.7-10.7c6.4-8.7 13.4-17 21.2-24.8z" className=""></path>                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[4px]'>
                                            <div className='text-[15px] leading-[23px] font-[500]'>Your wishlist is empty</div>
                                            <div className='text-[13px] leading-[19px] font-[400] text-[#777777]'>Tap the heart to start saving items.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='w-[369px] px-2 flex flex-col'>
                            <div className='text-[15px]  font-[500] text-black mb-[20px]'>Order Summary</div>
                            <div className='flex flex-row justify-between text-[14px] font-[500] text-black mb-[15px]'>
                                <div className=''>Estimated total (0 items)</div>
                                <div>&#x24;0.00</div>
                            </div>

                            <div className='text-[13px] font-[400] text-gray-400 mb-[20px]'>Taxes and delivery fees are calculated on the next page</div>

                            <div className='text-[14px] leading-[21] font-[400] text-[#222] flex flex-row items-center h-[21px]'>
                                <div>4 interest-free installments with</div>
                                <Image src={klarna} className='w-[41px] h-[17px] mx-1' />
                                <div>or</div>
                                <Image src={after_pay} className='w-[41px] h-[17px] mx-1' />
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" className="icon-a68Ad st-current" aria-hidden="true"><path d="M512 0c282.8 0 512 229.2 512 512 0 282.8-229.2 512-512 512-282.8 0-512-229.2-512-512 0-282.8 229.2-512 512-512z m0 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0-239.3-194-433.2-433.2-433.2z m7.6 327.1c19.3 0 35.4 13.9 38.8 32.3l0.6 7.1 0 251.3 31.8 0.1c21.8 0 39.4 17.6 39.4 39.4 0 19.3-13.9 35.4-32.4 38.7l-7 0.6-157.6 0c-21.8 0-39.4-17.6-39.4-39.3 0-19.3 13.9-35.4 32.4-38.8l7-0.6 47.1-0.1 0-211.9-15.5 0c-19.3 0-35.4-13.9-38.8-32.3l-0.6-7.1c0-19.3 13.9-35.4 32.3-38.8l7.1-0.6 54.8 0z m-17.6-169.6c32.6 0 59.1 26.4 59.1 59.1 0 32.6-26.4 59.1-59.1 59.1-32.6 0-59.1-26.4-59.1-59.1 0-32.6 26.4-59.1 59.1-59.1z" className=""></path></svg>
                            </div>
                            <div className='w-[369px] h-[48px] text-white mt-[16px] font-[500] text-[16px] flex items-center justify-center rounded-full bg-orange-500 mx-auto'>
                                <div>Checkout (&#x24;10 Minimum order)</div>
                            </div>
                            <div className='w-[369px] h-[48px] text-[#222] mt-[16px] font-[500] text-[16px] flex items-center justify-center rounded-full border border-[#222] mx-auto'>
                                <div className='flex flex-row items-center'>
                                    <div>Express checkout with</div>
                                    <div>
                                        <Image src={pay_pal} className='w-[54px] h-[19px] mx-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[8px] text-[14px] leading-[18px] text-[#222222] flex gap-[4px]'>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="icon-a68Ad st-current" aria-hidden="true"><path d="M512 0c282.8 0 512 229.2 512 512 0 282.8-229.2 512-512 512-282.8 0-512-229.2-512-512 0-282.8 229.2-512 512-512z m0 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0-239.3-194-433.2-433.2-433.2z m7.6 327.1c19.3 0 35.4 13.9 38.8 32.3l0.6 7.1 0 251.3 31.8 0.1c21.8 0 39.4 17.6 39.4 39.4 0 19.3-13.9 35.4-32.4 38.7l-7 0.6-157.6 0c-21.8 0-39.4-17.6-39.4-39.3 0-19.3 13.9-35.4 32.4-38.8l7-0.6 47.1-0.1 0-211.9-15.5 0c-19.3 0-35.4-13.9-38.8-32.3l-0.6-7.1c0-19.3 13.9-35.4 32.3-38.8l7.1-0.6 54.8 0z m-17.6-169.6c32.6 0 59.1 26.4 59.1 59.1 0 32.6-26.4 59.1-59.1 59.1-32.6 0-59.1-26.4-59.1-59.1 0-32.6 26.4-59.1 59.1-59.1z" className=""></path></svg>
                                <span>Item availability and pricing are not guaranteed until payment is final.</span>
                            </div>

                            <div className='mt-[37px] text-[14px] font-[400] leading-[18px] text-[#222] flex gap-[4px]'>
                                <svg fill='green' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" role="img" alt="You will not be charged until you review this order on the next page" aria-label="You will not be charged until you review this order on the next page" className="st-current"><path d="M512 15.4c132.9 0 240.6 107.7 240.6 240.6l0 0 0 66.5 41 0.1c59.5 0 108.2 46.1 112.4 104.6l0.2 8 0 409.6c0 62.2-50.4 112.6-112.6 112.6l0 0-563.2 0c-62.2 0-112.6-50.4-112.6-112.6l0 0 0-409.6c0-62.2 50.4-112.6 112.6-112.6l0 0 40.9-0.1 0.1-66.5c0-129.2 101.8-234.6 229.6-240.4z m281.6 378.8l-563.2 0c-22.6 0-41 18.3-41 41l0 0 0 409.6c0 22.6 18.3 41 41 41l0 0 563.2 0c22.6 0 41-18.3 41-41l0 0 0-409.6c0-22.6-18.3-41-41-41l0 0z m-281.6-307.2c-93.3 0-169 75.6-169 169l0 0 0 66.6 338 0 0-66.6c0-90.1-70.5-163.7-159.4-168.7l0 0z" className=""></path><path d="M512 512h0a38.4 38.4 0 0 1 38.4 38.4v179.2a38.4 38.4 0 0 1-38.4 38.4h0a38.4 38.4 0 0 1-38.4-38.4v-179.2a38.4 38.4 0 0 1 38.4-38.4z"></path></svg>
                                <span>You will not be charged until you review this order on the next page</span>
                            </div>

                            <div className='mt-[26px] text-[14px] leading-[18px] text-[#222222] flex gap-[4px]'>
                                <svg fill="green" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="iconSafe-2DQ2I st-current" role="img" alt="Temu Purchase Protection" aria-label="Temu Purchase Protection"><path d="M9.08159896,1.38361589 C9.59704401,1.18293152 10.1683921,1.17937224 10.6862974,1.37361921 L10.6862974,1.37361921 L17.0459309,3.75888057 C17.6850936,3.99860665 18.0984331,4.62124279 18.0712271,5.30334053 L18.0712271,5.30334053 L17.9069438,9.42217067 C17.7897354,12.3607617 16.2923342,15.0716175 13.8673026,16.7354313 L13.8673026,16.7354313 L11.9287062,18.0655019 C10.7198493,18.8948985 9.12526849,18.8950156 7.91628976,18.0657966 L7.91628976,18.0657966 L5.99129259,16.7454722 C3.57649002,15.0891981 2.10194365,12.3757747 2.02594247,9.44853386 L2.02594247,9.44853386 L1.9181229,5.29578498 C1.90080306,4.62869862 2.30388782,4.02246294 2.92572973,3.78035382 L2.92572973,3.78035382 Z M10.2648875,2.49719106 C10.0235038,2.40665701 9.75721156,2.40831591 9.51697448,2.50185028 L9.51697448,2.50185028 L3.36110525,4.89858821 C3.21089985,4.95706947 3.11353506,5.10350521 3.11758895,5.26463937 L3.11758895,5.26463937 L3.22553821,9.41738825 C3.29155667,11.9601369 4.57242179,14.3171529 6.67004074,15.7558758 L6.67004074,15.7558758 L8.59503791,17.0762003 C9.39494648,17.6248446 10.4499848,17.6247671 11.2498127,17.0760053 L11.2498127,17.0760053 L13.1884091,15.7459347 C15.3011883,14.2963572 16.6057808,11.9345572 16.7078971,9.3743456 L16.7078971,9.3743456 L16.8721805,5.25551546 C16.8787521,5.09075531 16.7789102,4.94035806 16.624521,4.88245242 L16.624521,4.88245242 Z M8.20995423,12.3346556 C8.64122922,12.3346556 8.99084668,12.6710053 8.99084668,13.0859137 C8.99084668,13.5008221 8.64122922,13.8371718 8.20995423,13.8371718 C7.77867924,13.8371718 7.42906178,13.5008221 7.42906178,13.0859137 C7.42906178,12.6710053 7.77867924,12.3346556 8.20995423,12.3346556 Z M12.3330664,12.3346556 C12.7643414,12.3346556 13.1139588,12.6710053 13.1139588,13.0859137 C13.1139588,13.5008221 12.7643414,13.8371718 12.3330664,13.8371718 C11.9017914,13.8371718 11.5521739,13.5008221 11.5521739,13.0859137 C11.5521739,12.6710053 11.9017914,12.3346556 12.3330664,12.3346556 Z M6.3406567,5.50994545 C6.77196271,5.50994545 7.14708765,5.79179965 7.2729581,6.19506785 L7.30096149,6.30793981 L7.39158597,6.79747468 L12.9434986,6.79781651 C13.5329225,6.79781651 14.0181851,7.24378416 14.0802671,7.81670022 L14.0869769,7.94129477 C14.0869769,8.00539397 14.0815871,8.06937967 14.0708646,8.13257567 L14.0708646,8.13257567 L13.5997476,10.9092323 C13.5064532,11.4590879 13.0300956,11.8614297 12.4723815,11.8614297 L12.4723815,11.8614297 L8.02184865,11.8614297 C7.46581711,11.8614297 6.99038345,11.461452 6.89523617,10.9136217 L6.89523617,10.9136217 L6.3024424,7.5004876 C6.30197553,7.49779948 6.30152724,7.49511304 6.30109742,7.49242839 L6.15469565,6.70994545 L5.10869565,6.70994545 C4.81046189,6.70994545 4.5630489,6.49235584 4.51654864,6.20726857 L4.50869565,6.10994545 C4.50869565,5.81171169 4.72628526,5.5642987 5.01137254,5.51779844 L5.10869565,5.50994545 L6.3406567,5.50994545 Z M12.8766957,7.99694545 L7.60669565,7.99694545 L8.06869565,10.6609455 L12.4236957,10.6609455 L12.8766957,7.99694545 Z" className=""></path></svg>
                                <span>Temu purchase protection</span>
                            </div>

                            <div className='mt-[26px] text-[14px] leading-[18px] text-gray-400 flex flex-col gap-[4px]'>
                                <div>Shop confidently on Temu knowing that if something goes wrong, we've always got your back.</div>
                                <div className='underline'>see program terms</div>
                            </div>


                            <div className='mt-[21px] text-[14px] leading-[18px] text-[#222222] flex gap-[4px]'>
                                <svg fill="green" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="iconSafe-2DQ2I" role="img" alt="Temu Purchase Protection" aria-label="Temu Purchase Protection"><path d="M9.08159896,1.38361589 C9.59704401,1.18293152 10.1683921,1.17937224 10.6862974,1.37361921 L10.6862974,1.37361921 L17.0459309,3.75888057 C17.6850936,3.99860665 18.0984331,4.62124279 18.0712271,5.30334053 L18.0712271,5.30334053 L17.9069438,9.42217067 C17.7897354,12.3607617 16.2923342,15.0716175 13.8673026,16.7354313 L13.8673026,16.7354313 L11.9287062,18.0655019 C10.7198493,18.8948985 9.12526849,18.8950156 7.91628976,18.0657966 L7.91628976,18.0657966 L5.99129259,16.7454722 C3.57649002,15.0891981 2.10194365,12.3757747 2.02594247,9.44853386 L2.02594247,9.44853386 L1.9181229,5.29578498 C1.90080306,4.62869862 2.30388782,4.02246294 2.92572973,3.78035382 L2.92572973,3.78035382 Z M10.2648875,2.49719106 C10.0235038,2.40665701 9.75721156,2.40831591 9.51697448,2.50185028 L9.51697448,2.50185028 L3.36110525,4.89858821 C3.21089985,4.95706947 3.11353506,5.10350521 3.11758895,5.26463937 L3.11758895,5.26463937 L3.22553821,9.41738825 C3.29155667,11.9601369 4.57242179,14.3171529 6.67004074,15.7558758 L6.67004074,15.7558758 L8.59503791,17.0762003 C9.39494648,17.6248446 10.4499848,17.6247671 11.2498127,17.0760053 L11.2498127,17.0760053 L13.1884091,15.7459347 C15.3011883,14.2963572 16.6057808,11.9345572 16.7078971,9.3743456 L16.7078971,9.3743456 L16.8721805,5.25551546 C16.8787521,5.09075531 16.7789102,4.94035806 16.624521,4.88245242 L16.624521,4.88245242 Z M8.20995423,12.3346556 C8.64122922,12.3346556 8.99084668,12.6710053 8.99084668,13.0859137 C8.99084668,13.5008221 8.64122922,13.8371718 8.20995423,13.8371718 C7.77867924,13.8371718 7.42906178,13.5008221 7.42906178,13.0859137 C7.42906178,12.6710053 7.77867924,12.3346556 8.20995423,12.3346556 Z M12.3330664,12.3346556 C12.7643414,12.3346556 13.1139588,12.6710053 13.1139588,13.0859137 C13.1139588,13.5008221 12.7643414,13.8371718 12.3330664,13.8371718 C11.9017914,13.8371718 11.5521739,13.5008221 11.5521739,13.0859137 C11.5521739,12.6710053 11.9017914,12.3346556 12.3330664,12.3346556 Z M6.3406567,5.50994545 C6.77196271,5.50994545 7.14708765,5.79179965 7.2729581,6.19506785 L7.30096149,6.30793981 L7.39158597,6.79747468 L12.9434986,6.79781651 C13.5329225,6.79781651 14.0181851,7.24378416 14.0802671,7.81670022 L14.0869769,7.94129477 C14.0869769,8.00539397 14.0815871,8.06937967 14.0708646,8.13257567 L14.0708646,8.13257567 L13.5997476,10.9092323 C13.5064532,11.4590879 13.0300956,11.8614297 12.4723815,11.8614297 L12.4723815,11.8614297 L8.02184865,11.8614297 C7.46581711,11.8614297 6.99038345,11.461452 6.89523617,10.9136217 L6.89523617,10.9136217 L6.3024424,7.5004876 C6.30197553,7.49779948 6.30152724,7.49511304 6.30109742,7.49242839 L6.15469565,6.70994545 L5.10869565,6.70994545 C4.81046189,6.70994545 4.5630489,6.49235584 4.51654864,6.20726857 L4.50869565,6.10994545 C4.50869565,5.81171169 4.72628526,5.5642987 5.01137254,5.51779844 L5.10869565,5.50994545 L6.3406567,5.50994545 Z M12.8766957,7.99694545 L7.60669565,7.99694545 L8.06869565,10.6609455 L12.4236957,10.6609455 L12.8766957,7.99694545 Z" className=""></path></svg>
                                <span>Temu is committed to enviornmental sustainability</span>
                            </div>

                            <div className="flex flex-col mt-[42px]">
                                <div className='text-[16px] text-black font-[500] leading-[20px]'>Secure options in checkout</div>

                                <div className="flex flex-row mt-[16px] gap-[12px] flex-wrap">
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                    <Image src={pay_pal} className='w-[54px] h-[28px] border border-gray-200 p-1 rounded-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col px-[88px] mt-[52px]'>
                        <div className='text-[18px] mx-2 font-[500] text-black mb-[10px]'>Items you may want to add</div>
                        <div className="grid grid-cols-5  gap-2">
                            <Card9 /><Card9 /><Card9 /><Card9 /><Card9 />
                            <Card9 /><Card9 /><Card9 /><Card9 /><Card9 />
                            <Card9 /><Card9 /><Card9 /><Card9 /><Card9 />
                        </div>

                        <div className="flex justify-center items-center mt-[38px] mb-[70px]">
                            <div className='flex justify-center items-center cursor-pointer gap-2 w-[220px] h-[52px] border border-gray-800 rounded-full hover:shadow-xl'>
                                <div>View more</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-4 h-4 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Footer />
            </div>
            : <div className='flex flex-col items-center overflow-x-hidden'>
                <nav className={`active2 ${show && 'hidden2'}`} ref={navRef}>
                    <Navbar2 showCategory={showCategory} setShowCategory={setShowCategory} />
                </nav>

                {showCategory ? (
                    <div className='mt-[42px] w-full  flex flex-row'>
                        <div className='w-[27%] bg-[#f6f6f6] pt-[12px] overflow-y-scroll'
                            style={{
                                height: (height - 42) + 'px'
                            }}
                        >
                            <div className='text-sm font-[600] py-3 pr-2 bg-white'>
                                <div className='border-l-4 border-orange-500 pl-1'>Featured</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Women's Clothing</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Home & Kitchen</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Women's Curve + Plus</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Kid's Fashion</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Men's Clothing</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Beauty & Health</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Women's Shoes</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Jewelry & Accessories</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Toys & Games</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Electronics</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Arts, Crafts & Sewing</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Patis, Lawn & Garden</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Automotive</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Bags & Luggage</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Women's Underwear & Sleepwear</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Health & Household</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Sports & Outdoors</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Appliances</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Pet Supplies</div>
                            </div>
                            <div className='text-sm font-[400] py-3 pr-2 '>
                                <div className='pl-1'>Office & School Supplies</div>
                            </div>
                        </div>
                        <div className='w-[75%] pt-5 px-3 overflow-y-scroll'
                            style={{
                                height: (height - 42) + 'px'
                            }}
                        >
                            <div className='text-md font-[500]'>Shop by category</div>
                            <div className="grid grid-cols-3 gap-2">
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                                <CategoryRound /> <CategoryRound /> <CategoryRound />
                            </div>
                            <div className='flex justify-between py-3 items-center'>
                                <div className='text-md font-[500]'>Trending items</div>
                                <Dropdown
                                    placement='topLeft'
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space className='flex items-center'>
                                            Sort by
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <CategoryCard /> <CategoryCard />
                                <CategoryCard /> <CategoryCard />
                                <CategoryCard /> <CategoryCard />
                                <CategoryCard /> <CategoryCard />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='text-[20px] font-[500] text-center my-3 pt-3 text-black mt-[42px]'>Laundry Supplies</div>
                        <div className="flex flex-row gap-2 w-full overflow-x-scroll example">
                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                    </svg>
                                </div>
                                <div>Filters</div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div className='w-[55px]'>Sort by</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[16px] h-[16px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div className='w-[80px]'>Power Mode</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div>Certifications</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div>Material</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div className='w-[120px]'>Operating Voltage</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div className='w-[120px]'>Customer Reviews</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-row gap-[2px] bg-[#ececec] py-1 rounded-full px-2 items-center text-gray-500 text-[14px] font-[400] my-1">
                                <div>Discount</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 bg-gray-100">
                            <Card8 /> <Card8 />
                            <Card8 /> <Card8 />
                            <Card8 /> <Card8 />
                            <Card8 /> <Card8 />
                            <Card8 /> <Card8 />
                            <Card8 /> <Card8 />
                        </div>

                        <div className="w-full text-center py-3 bg-gray-100">
                            <button className='border border-black py-1 px-4 font-[500] text-black rounded-full'>
                                Show more
                            </button>
                        </div>
                        <Footer2 />
                    </>
                )}
            </div>}

    </>)
}

export default cart