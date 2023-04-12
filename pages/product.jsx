import { Breadcrumb, Carousel, Button, Space, Select, Popover } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { RightOutlined, RightCircleOutlined, LeftCircleOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';
import Image from 'next/image';
import asset10 from '../images/product_photos/asset 10.webp';
import asset11 from '../images/product_photos/asset 11.webp';
import asset12 from '../images/product_photos/asset 12.webp';
import asset13 from '../images/product_photos/asset 13.webp';
import asset14 from '../images/product_photos/asset 14.webp';
import asset15 from '../images/product_photos/asset 15.webp';
import asset16 from '../images/product_photos/asset 16.webp';
import asset17 from '../images/product_photos/asset 17.webp';
import asset18 from '../images/product_photos/asset 18.webp';
import asset19 from '../images/product_photos/asset 19.webp';
import asset20 from '../images/product_photos/asset 20.webp';
import asset21 from '../images/product_photos/asset 21.webp';
import asset23 from '../images/product_photos/asset 23.webp';
import asset24 from '../images/product_photos/asset 24.webp';
import asset25 from '../images/product_photos/asset 25.webp';
import asset26 from '../images/product_photos/asset 26.webp';
import asset159 from '../images/product_photos/asset 159.svg';
import asset57 from '../images/product_photos/asset 57.webp';
import asset77 from '../images/product_photos/asset 77.webp';
import easter from '../images/product_photos/easter.webp';
import asset82 from '../images/product_photos/asset 82.webp';
import asset83 from '../images/product_photos/asset 83.webp';
import asset84 from '../images/product_photos/asset 84.webp';
import asset85 from '../images/product_photos/asset 85.webp';
import asset86 from '../images/product_photos/asset 86.webp';
import asset87 from '../images/product_photos/asset 87.webp';
import asset88 from '../images/product_photos/asset 88.webp';
import asset89 from '../images/product_photos/asset 89.webp';
import asset90 from '../images/product_photos/asset 90.webp';
import asset91 from '../images/product_photos/asset 91.webp';
import asset92 from '../images/product_photos/asset 92.webp';
import asset165 from '../images/product_photos/asset 165.svg';
import asset170 from '../images/product_photos/asset 170.svg';
import asset148 from '../images/product_photos/asset 148.svg';
import asset164 from '../images/product_photos/asset 164.svg';
import fire from '../images/product_photos/fire.webp';
import box from '../images/product_photos/box.webp';
import muhe from '../images/product_photos/muhe.webp';
import ImagePreview from '@/components/ImagePreview';
import RoundSlide7 from '@/components/RoundSlide7';
import RoundSlide8 from '@/components/RoundSlide8';
import RoundSlide9 from '@/components/RoundSlide9';
import Card5 from '../components/Card5';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';


const product = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [showCategory, setShowCategory] = useState(false);
    const [showTags, setShowTags] = useState(false);
    const [mainImage, setMainImage] = useState(asset19);
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

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='w-full'>
            <nav className={`active ${show && 'hidden'}`}>
                <div className='border border-gray-800 bg-orange-600'>
                    <Banner />
                </div>
                <div className='bg-orange-600 opacity-[0.98]'>
                    <Navbar />
                </div>
            </nav>

            <div className="px-[148px] mt-[150px] py-2">
                <Breadcrumb
                    separator={<RightOutlined style={{ fontSize: '10px' }} />}
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Electronics</a>,
                        },
                        {
                            title: <a href="">Headphones, Earbuds & Accessories</a>,
                        },
                        {
                            title: 'Silicone Case For Appl..',
                        },
                    ]}
                />

                <div className="flex  mt-3">
                    <div className='w-1/2 h-[698px] overflow-y-scroll example'>
                        <div className="flex gap-[8px]">
                            <div className='flex flex-col gap-[3px] h-[550px] overflow-y-scroll example scroll-smooth'>
                                <Image src={asset10} onMouseEnter={() => setMainImage(asset10)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset11} onMouseEnter={() => setMainImage(asset11)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset12} onMouseEnter={() => setMainImage(asset12)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset13} onMouseEnter={() => setMainImage(asset13)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset14} onMouseEnter={() => setMainImage(asset14)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset15} onMouseEnter={() => setMainImage(asset15)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset16} onMouseEnter={() => setMainImage(asset16)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset17} onMouseEnter={() => setMainImage(asset17)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset18} onMouseEnter={() => setMainImage(asset18)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset19} onMouseEnter={() => setMainImage(asset19)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset20} onMouseEnter={() => setMainImage(asset20)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset21} onMouseEnter={() => setMainImage(asset21)} className='w-[57px] h-[57px] hover:border-gray-600 border' alt='image' />
                            </div>
                            <div className='border border-gray-200'>
                                <Image src={mainImage} className='w-[550px] h-[550px]' alt='image' />
                            </div>
                        </div>
                        <div className="flex justify-between flex-row py-3">
                            <div className='flex flex-row items-center gap-[2px] text-[18px] font-[500]'>
                                <div>57 reviews</div>
                                <div className='mx-2'>|</div>
                                <div className='flex flex-row items-center gap-[2px]'>
                                    <div>4.6</div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 items-center text-[13px] font-[300]'>
                                <Image src={asset23} className='w-[16px] h-[16px]' />
                                <div>All reivews are from verified buyers</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 text-[18px] font-[500] border-b border-gray-300 pb-1">
                            <div className='flex flex-col  justify-center items-center'>
                                <div>Item reviews (36)</div>
                                <div className='h-[5px] w-[32px] bg-gray-700 rounded-full'></div>
                            </div>
                            <div className='flex flex-col  justify-center'>
                                <div>Shop reviews (57)</div>
                                <div className='h-[5px] w-[32px] bg-white rounded-full'></div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center flex-wrap mt-3">
                            <Popover className='cursor-pointer' content={
                                <div className='flex flex-col text-xs font-[400] leading-[20px] w-[100px]'>
                                    <div className="cursor-pointer flex justify-between items-center font-[500]">
                                        <div>Recommended</div>
                                        <div className='mb-1'>
                                            <CheckOutlined style={{ fontSize: '12px', color: 'green' }} />
                                        </div>
                                    </div>
                                    <div className="cursor-pointer flex justify-between items-center">
                                        <div>Most Recent</div>
                                    </div>
                                </div>
                            }
                                trigger="click"
                                placement='bottom'
                            >
                                <div className='flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                    <div className='font-[400]'>Recommended</div>
                                    <div className='pb-2'><DownOutlined style={{ fontSize: "10px" }} /></div>
                                </div>
                            </Popover>
                            <div className='cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                <div className='font-[400]'>With Photos</div>
                                <div className=''>(5)</div>
                            </div>
                            <div className='cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                <div className='font-[400]'>Buy Again</div>
                                <div className=''>(1)</div>
                            </div>
                            {
                                showTags === false && (
                                    <>
                                        <div onClick={() => setShowTags(!showTags)} className=' cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[31px] h-[31px]'>
                                            <div className='pb-2'><DownOutlined style={{ fontSize: "10px" }} /></div>
                                        </div>
                                    </>
                                )
                            }
                            {
                                showTags === true && (
                                    <>
                                        <div className='cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                            <div className='font-[400]'>Comfortable</div>
                                            <div className=''>(14)</div>
                                        </div>
                                        <div className=' cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                            <div className='font-[400]'>Good Quality</div>
                                            <div className=''>(5)</div>
                                        </div>
                                        <div className='cursor-pointer flex text-[14px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px]'>
                                            <div className='font-[400]'>Good</div>
                                            <div className=''>(8)</div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={asset24} className='w-[28px] h-[28px]' />
                                    </div>
                                    <div className='text-[14px] font-[500]'>Isabella Salinas <span className='text-gray-400 text-xs'>on Apr 4, 2023</span> </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                                <div className='text-[14px] font-[400] text-gray-600'>Color: Light Pink</div>
                                <div className='flex flex-row gap-2'>
                                    <div>
                                        <Image src={asset25} className="w-[147px] h-[147px]" />
                                    </div>
                                    <div>
                                        <Image src={asset26} className="w-[147px] h-[147px]" />
                                    </div>
                                </div>
                                <div className='text-[14px] font-[400] text-gray-700'>So cute it fits my airpods nicely!!!</div>
                                <div className='flex flex-row justify-end items-center gap-3'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src={asset148} className='w-[15px] h-[15px]' />
                                        <div className='text-[13px] font-[400] text-gray-700'>Helpful</div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={asset24} className='w-[28px] h-[28px]' />
                                    </div>
                                    <div className='text-[14px] font-[500]'>Isabella Salinas <span className='text-gray-400 text-xs'>on Apr 4, 2023</span> </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                                <div className='text-[14px] font-[400] text-gray-600'>Color: Light Pink</div>
                                <div className='flex flex-row gap-2'>
                                    <div>
                                        <Image src={asset25} className="w-[147px] h-[147px]" />
                                    </div>
                                    <div>
                                        <Image src={asset26} className="w-[147px] h-[147px]" />
                                    </div>
                                </div>
                                <div className='text-[14px] font-[400] text-gray-700'>So cute it fits my airpods nicely!!!</div>
                                <div className='flex flex-row justify-end items-center gap-3'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src={asset148} className='w-[15px] h-[15px]' />
                                        <div className='text-[13px] font-[400] text-gray-700'>Helpful</div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={asset24} className='w-[28px] h-[28px]' />
                                    </div>
                                    <div className='text-[14px] font-[500]'>Isabella Salinas <span className='text-gray-400 text-xs'>on Apr 4, 2023</span> </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                                <div className='text-[14px] font-[400] text-gray-600'>Color: Light Pink</div>
                                <div className='flex flex-row gap-2'>
                                    <div>
                                        <Image src={asset25} className="w-[147px] h-[147px]" />
                                    </div>
                                    <div>
                                        <Image src={asset26} className="w-[147px] h-[147px]" />
                                    </div>
                                </div>
                                <div className='text-[14px] font-[400] text-gray-700'>So cute it fits my airpods nicely!!!</div>
                                <div className='flex flex-row justify-end items-center gap-3'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src={asset148} className='w-[15px] h-[15px]' />
                                        <div className='text-[13px] font-[400] text-gray-700'>Helpful</div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className='flex flex-row gap-2 items-center'>
                                    <div>
                                        <Image src={asset24} className='w-[28px] h-[28px]' />
                                    </div>
                                    <div className='text-[14px] font-[500]'>Isabella Salinas <span className='text-gray-400 text-xs'>on Apr 4, 2023</span> </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                                <div className='text-[14px] font-[400] text-gray-600'>Color: Light Pink</div>
                                <div className='flex flex-row gap-2'>
                                    <div>
                                        <Image src={asset25} className="w-[147px] h-[147px]" />
                                    </div>
                                    <div>
                                        <Image src={asset26} className="w-[147px] h-[147px]" />
                                    </div>
                                </div>
                                <div className='text-[14px] font-[400] text-gray-700'>So cute it fits my airpods nicely!!!</div>
                                <div className='flex flex-row justify-end items-center gap-3'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <Image src={asset148} className='w-[15px] h-[15px]' />
                                        <div className='text-[13px] font-[400] text-gray-700'>Helpful</div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='flex justify-between items-center'>
                                <div className='text-[16px] text-black font-[500] pt-4 pb-2'>Photos from shop reviews</div>
                                <div className='hover:underline text-[14px] font-[300]'>See all &gt;</div>
                            </div>
                            <RoundSlide7 />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='flex justify-between items-center'>
                                <div className='text-[16px] text-black font-[500] pt-4 pb-2'>Frequently bought together</div>
                                <div className='hover:underline text-[14px] font-[300]'>See all &gt;</div>
                            </div>
                            <RoundSlide8 />
                        </div>
                        <div className='w-[396px] font-[500] h-[48px] text-[16px] flex justify-center items-center text-white mt-5 bg-[#fb7701] rounded-full mx-auto'>
                            <div className='my-auto'>Add 3 items to cart: &#x24;6.84 <span className='line-through text-[12px]'>&#x24;20.97</span></div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className='w-[120px] h-[100px] '>
                                <Image src={muhe} className='w-[100px] h-[100px] rounded-full border border-gray-400' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-row gap-2'>
                                    <div className='text-[22px] font-[500]'>MUHE</div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                    </div>
                                </div>
                                <div className='flex flex-row items-center text-[12px] font-[400]'>
                                    <div><b>4</b> Followers</div>
                                    <div className="mx-3 text-sm text-gray-400">|</div>
                                    <div><b>2.9K</b> + Sold</div>
                                    <div className="mx-3 text-sm text-gray-400">|</div>
                                    <div><b>7</b> Items</div>
                                </div>
                                <div className='flex flex-row gap-[12px] mt-1'>
                                    <div className='hover:shadow-xl cursor-pointer flex items-center text-[16px] font-[500] justify-center w-[210px] h-[40px] rounded-full border border-black text-black'>
                                        <div><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="icon-jXTbd" aria-hidden="true"><path d="M172.6 242.5c-96.5 95.9-96.5 251.5 0 347.5l248.8 247.4c50.1 49.7 131.1 49.7 181.2 0l248.8-247.4c96.5-96 96.5-251.6 0-347.5l-8-7.5c-91.4-83.3-230.6-85.7-324.7-7.2l-6.7 5.8-6.6-5.8c-96.9-80.8-241.6-75.9-332.8 14.7z m282.1 54.3l6.6 6.2 20.6 20.5c16.6 16.6 43.5 16.6 60.1 0.1l20.7-20.5c63.1-62.7 165.5-62.7 228.5-0.1 62.9 62.6 62.9 163.9 0 226.5l-248.8 247.3c-16.8 16.7-44 16.7-60.8 0l-248.8-247.3c-62.9-62.6-62.9-163.9 0-226.5 60.9-60.5 158.4-62.6 221.9-6.2z"></path></svg></div>
                                        <div>Follow</div>
                                    </div>
                                    <div className=' hover:shadow-xl cursor-pointer flex items-center text-[16px] font-[500] justify-center w-[210px] h-[40px] rounded-full border border-black text-black'>
                                        <div>Shop all items</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <RoundSlide9 />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='flex justify-between items-center'>
                                <div className='text-[16px] text-black font-[500] pt-4 pb-2'>Similar Items</div>
                                <div className='hover:underline text-[14px] font-[300]'>See all &gt;</div>
                            </div>
                            <RoundSlide9 />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='text-[16px] text-black font-[500] pt-4 pb-2'>Details</div>
                            <ImagePreview />
                        </div>
                    </div>
                    <div className='w-1/2 ml-[58px] mr-[20px] h-[698px] overflow-y-scroll example scroll-smooth'>
                        <div className="flex flex-row gap-2 items-start">
                            <div className='text-[16px] font-[300] whitespace-pre-wrap items-start'>
                                Silicone Case For Apple Airpods 1/2 Cover Protective Earphone Case Headphones Cases Protective For Apple Airpods 2/1 Cover
                            </div>
                            <div>
                                <Image src={asset159} className='w-[48px] h-[48px]' />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-2">
                            <div className='flex flex-row gap-[4px] items-center'>
                                <div className='text-xs text-gray-400'>1.5K + sold, by</div>
                                <div>
                                    <Image src={asset57} className='w-[16px] h-[16px]' />
                                </div>
                                <div>MUHE (2.8K + sold) <RightOutlined style={{ fontSize: '10px' }} /></div>
                            </div>
                            <div className='flex flex-row gapp-1 items-center'>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                </div>
                                <div>(57)</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center flex-row mt-1">
                            <div className='text-[28px] font-[500]'>&#x24;1.08</div>
                            <div className='text-[14px] line-through text-gray-300 mt-2'> &#x24;7.49</div>
                            <div className='border border-orange-500 rounded-sm text-[12px] text-orange-500 px-1  mt-2'>-85%</div>
                        </div>
                        <div className='mt-2 relative'>
                            <Image src={asset77} />
                            <div className="flex flex-row gap-[30px] items-center absolute top-[1px] left-[2px]">
                                <Image src={easter} className='w-[93px] h-[39px] ' />
                                <div className='text-[14px] font-[500] flex flex-row gap-[10px] items-center'>
                                    <div>
                                        <Image src={asset164} className='w-[15px] h-[15px]' />
                                    </div>
                                    <div>Free shipping on all orders</div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center absolute top-[6px] right-[4px]">
                                <div className='text-[14px] font-[500]'>left today</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <div className='text-[14px] font-[500]'>Color :</div>
                            <div className="flex gap-2 flex-row flex-wrap">
                                <Image src={asset82} onClick={() => setMainImage(asset82)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset83} onClick={() => setMainImage(asset83)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset84} onClick={() => setMainImage(asset84)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset85} onClick={() => setMainImage(asset85)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset86} onClick={() => setMainImage(asset86)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset87} onClick={() => setMainImage(asset87)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset88} onClick={() => setMainImage(asset88)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset89} onClick={() => setMainImage(asset89)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset90} onClick={() => setMainImage(asset90)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset91} onClick={() => setMainImage(asset91)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                                <Image src={asset92} onClick={() => setMainImage(asset92)} className='w-[48px] h-[48px] hover:border-gray-600 border' alt='image' />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center flex-row mt-3">
                            <div className='text-[12px] font-[500]'>Oty :</div>
                            <div>
                                <Space wrap>
                                    <Select
                                        defaultValue="1"
                                        style={{
                                            width: 120,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: '1',
                                                label: '1',
                                            },
                                            {
                                                value: '2',
                                                label: '2',
                                            },
                                            {
                                                value: '3',
                                                label: '3',
                                            },
                                            {
                                                value: '4',
                                                label: '4',
                                                disabled: true,
                                            },
                                        ]}
                                    />
                                </Space>
                            </div>
                        </div>
                        <div className='w-[476px] font-[500] h-[48px] text-[16px] flex justify-center items-center text-white mt-4 bg-[#fb7701] rounded-full'>
                            <div className='my-auto'>Add to cart</div>
                        </div>

                        <div className='text-[14px] my-3 font-[400] flex items-center gap-1'>
                            <Image className='w-[20px] h-[20px] inline' src={fire} />
                            <div>
                                Hurry! <span className='text-orange-600 ml-2'>Over 999 people</span> have this in their carts
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className='font-[500] text-[16px] text-black leading-[16px]'>Shipping & Return</div>
                            <div className="flex gap-1 items-center mt-1">
                                <div>
                                    <Image src={asset165} className='w-[20px] h-[20px] mr-1' />
                                </div>
                                <div className='font-[500] text-[14px] text-black leading-[16px]'>Shipping</div>
                            </div>
                            <div className='flex flex-row gap-[10px]'>
                                <div className='w-[280px] h-[101px] bg-[#f8f8f8] rounded-md flex flex-col py-[12px] px-[12px]'>
                                    <div className='text-[14px] text-[#0a8800]'>Standard: free on all orders</div>
                                    <div className='text-[13px] text-gray-400'>Courier company:
                                        <span className='text-black mx-1'>USPS</span>
                                        <span className='text-[8px]'>|</span>
                                        <span className='text-black mx-1'>UPS</span>
                                    </div>
                                    <div className='text-black text-[13px]'> <span className='text-[13px] text-gray-400'>Delivery: Apr 15-21,</span>  76.9% are ≤ 14 days</div>
                                    <div className='text-[13px] text-gray-400'>Get a $5 credit for late delivery</div>
                                </div>

                                <div className='w-[280px] h-[101px] bg-[#f8f8f8] rounded-md flex flex-col py-[12px] px-[12px]'>
                                    <div className='text-[14px] text-[#0a8800]'>Standard: free on all orders</div>
                                    <div className='text-[13px] text-gray-400'>Courier company:
                                        <span className='text-black mx-1'>USPS</span>
                                        <span className='text-[8px]'>|</span>
                                        <span className='text-black mx-1'>UPS</span>
                                    </div>
                                    <div className='text-black text-[13px]'> <span className='text-[13px] text-gray-400'>Delivery: Apr 15-21,</span>  76.9% are ≤ 14 days</div>
                                    <div className='text-[13px] text-gray-400'>Get a $5 credit for late delivery</div>
                                </div>
                            </div>
                            <div className="flex items-center flex-row gap-1 text-[14px] text-black font-[500]">
                                <div>
                                    <Image src={box} className='w-[20px] h-[20px] mr-1' />
                                </div>
                                <div>Free returns</div>
                                <div>
                                    Price adjustment
                                </div>
                            </div>
                            <div className="flex items-center flex-row gap-2 text-[14px] text-black font-[500] border-b border-gray-200">
                                <div>
                                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="titleIcon-12v8U" aria-hidden="true">
                                        <path d="M750.1 54l6.8 12.3 7.9 15.2 8.8 17.8 14.7 31.1c24.2 53.6 45.6 110.7 61.8 169.4 46.6 167.9 43.7 318-29.6 434.3-72.2 114.5-205.8 181.6-395.2 201l-19.8 1.9c-20.7 2.1-37.4 1.9-50-0.6-12.6-2.5-29-11.2-49.3-26.2-17.4-13.4-34.2-27.8-50.2-43.6-107.3-105.6-144.3-230.5-62.7-367 56.3-94.2 130.1-155.3 249.3-222l57.6-31.8 25-14.6c86.9-52.4 123.5-94 138.1-164 3.4-18.6 19.2-32.8 39-35.7 19.7-2.7 38.7 6.3 47.8 22.5z m-36.7 62.2l-2.2 6.7c-24 64.2-70.5 110.5-155 161.4l-26.2 15.3-57.4 31.6c-116.2 65-178.7 119.8-226.6 200-61.6 103.1-42.5 197.6 53.1 291.6 11.4 11.2 23.5 21.9 35.8 31.9 22.3-123.3 61.8-223.6 118.6-300.9 60.6-82.5 158.3-146.5 293-191.8-113.3 71.8-195.3 148.1-245.9 228.9-47.1 75.1-80.5 170-100.4 284.8 183.3-15.3 305.5-74.8 368.3-174.4 59.8-94.9 67-224.2 22.4-385.1-14.8-53.3-34.6-107.3-58.3-159.7l-14-29.9-5.2-10.4z" className=""></path></svg>
                                </div>
                                <div className='mb-4'>Temu is committed to environmental sustainability</div>
                            </div>
                            <div className="flex flex-col gap-2 border-b border-gray-300">
                                <div className='font-[500] text-[14px] text-black leading-[16px]'>Shop with confidence</div>
                                <div className="flex flex-row gap-1 items-center text-[#0a8800] text-[14px] mt-2">
                                    <div>
                                        <Image className='w-[20px] h-[20px]' src={asset170} />
                                    </div>
                                    <div className='hover:underline'>Shopping security &gt;</div>
                                </div>
                                <div className="flex flex-row gap-3 ml-[27px] text-[12px] text-gray-400 pb-3 ">
                                    <div>
                                        <ul>
                                            <li className='my-[3px]'>Safe payments</li>
                                            <li className='my-[3px]'>Seure privacy</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className='my-[3px]'>Seure logistics</li>
                                            <li className='my-[3px]'>Purchase protection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className='text-black text-[16px] font-[500]'>Description</div>
                                <div className='text-[14px] font-[400] flex flex-row items-center gap-[5px]'>
                                    <div>Item ID: MR03628</div>
                                    <div className='border text-xs border-black rounded-full text-black cursor-pointer px-2'>copy</div>
                                </div>
                                <div className='text-[14px] font-[400]'>Certifications: No Certification</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='px-[90px] py-2'>
                <div className='text-[18px]  py-3 font-[500] mx-6'>Based on your recently viewed</div>
                <div className="grid grid-cols-5 mt-3 gap-2">
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                    <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
                </div>
            </div>

            <div className='mt-[40px]'>
                <Footer />
            </div>
        </div >
    )
}


export default product