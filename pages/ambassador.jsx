import { Breadcrumb, Carousel, Button, Space, Select, Popover, Dropdown, Divider } from 'antd';
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
import asset114 from '../images/product_photos/asset 114.svg';
import asset79 from '../images/mobile_assets/asset 79.webp';
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
import Link from 'next/link';
import Navbar2 from '@/components/Navbar2';
import Footer2 from '@/components/Footer2';
import Card8 from '@/components/Card8';
import abm1 from '../images/ambassador/img5.webp';
import abm2 from '../images/ambassador/img2.png';
import abm3 from '../images/ambassador/img3.png';
import abm4 from '../images/ambassador/img4.png';
import abm6 from '../images/ambassador/img6.webp';
import abm7 from '../images/ambassador/img7.png';
import abm8 from '../images/ambassador/img8.png';
import abm9 from '../images/ambassador/img9.png';
import about1 from '../images/about/about 1.png';
import about2 from '../images/about/about 2.png';
import about3 from '../images/about/about 3.png';
import about4 from '../images/about/about 4.png';
import about5 from '../images/about/about 5.png';
import about6 from '../images/about/about 6.png';
import about7 from '../images/about/about 7.png';
import about8 from '../images/about/about 8.png';
import about9 from '../images/about/about 9.png';
import affiliate2 from '../images/affiliate/affiliate 2.webp';

const CategoryRound = () => {
    return (
        <div className='flex flex-col gap-1 items-center mt-2'>
            <Image src={asset79} className='rounded-[50%] p-1 w-28 h-28' />
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

const content = (
    <div className=' h-[500px] w-[800px]  flex flex-row'>
        <div className='w-[20%] bg-white overflow-y-scroll'
        >
            <div className='text-sm font-[600] py-3 pr-2 bg-white hover:bg-gray-200 cursor-pointer'>
                <div className='border-l-4 border-orange-500 pl-1'>Featured</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer '>
                <div className='pl-1'>Women's Clothing</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2  hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Home & Kitchen</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Women's Curve + Plus</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Kid's Fashion</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Men's Clothing</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Beauty & Health</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Women's Shoes</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Jewelry & Accessories</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Toys & Games</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Electronics</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Arts, Crafts & Sewing</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Patis, Lawn & Garden</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Automotive</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Bags & Luggage</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Women's Underwear & Sleepwear</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Health & Household</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Sports & Outdoors</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Appliances</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Pet Supplies</div>
            </div>
            <div className='text-sm font-[400] py-3 pr-2 hover:bg-gray-200 cursor-pointer'>
                <div className='pl-1'>Office & School Supplies</div>
            </div>
        </div>
        <div className='w-[80%] pt-5 px-3 overflow-y-scroll'>
            <div className='text-md font-[500]'>Shop by category</div>
            <div className="grid grid-cols-5 gap-2">
                <Link href="category">
                    <CategoryRound />
                </Link>
                <CategoryRound /> <CategoryRound />
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
            <div className="grid grid-cols-5 gap-2">
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
                <CategoryCard /> <CategoryCard />
            </div>
        </div>
    </div>
);

const ambassador = () => {

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
        <>
            {width >= 1024 ? (
                <div className='w-full'>
                    <nav className={`active ${show && 'hidden'}`}>
                        <div className='border border-gray-800 bg-orange-600'>
                            <Banner />
                        </div>
                        <div className='bg-orange-600 opacity-[0.98]'>
                            <Navbar />
                        </div>
                    </nav>

                    <div className='w-full'>

                        <div className="ambassador mt-[140px]">

                            <div className="mx-auto flex flex-col items-center w-[973px] h-[500px] bg-[rgb(234,88,12,0.94)]">
                                <div>
                                    <Image src={abm1} className='w-[873px] h-[232px] mx-auto pt-[58px]' />
                                </div>
                                <div className='text-[22.5px] mx-[30px] text-white font-semibold leading-[33.5px] py-2 mt-[20px] text-center'>
                                    Earn TEMU $$ when you share your fav TEMU products with your audience and BFFs. Plus you'll score exclusive perks and offers!
                                </div>
                                <div className='bg-[#291400] w-[214px] h-[56px] text-white text-[30px] font-bold px-[20px text-center cursor-pointer uppercase py-1 rounded-md mt-[52px]'>
                                    Apply Now
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='text-[#fb7701] text-[24px] text-center my-[60px] font-[500]'>How it works</div>
                    <div className='mx-[100px] flex flex-row justify-between'>
                        <div className="flex flex-col gap-[5px] w-[300px] items-center">
                            <Image src={abm2} className='w-[120px] h-[120px]' />
                            <div className='text-[21px] leading-[25px]'>APPLY</div>
                            <div className='text-[#949494] text-[15px] leading-[21px]'>Tell us about yoursef</div>
                        </div>

                        <div>
                            <Image className='w-[142px] mt-[50px] h-[14px]' src={abm6} />
                        </div>

                        <div className="flex flex-col gap-[5px] w-[300px] items-center">
                            <Image src={abm3} className='w-[120px] h-[120px]' />
                            <div className='text-[21px] leading-[25px]'>INITE FRIENDS</div>
                            <div className='text-[#949494] text-[15px] leading-[21px] text-center'>Share your referrel link with friends</div>
                        </div>

                        <div>
                            <Image className='w-[142px] mt-[50px] h-[14px]' src={abm6} />
                        </div>


                        <div className="flex flex-col gap-[5px] w-[300px] items-center">
                            <Image src={abm4} className='w-[120px] h-[120px]' />
                            <div className='text-[21px] leading-[25px]'>EARN REWARDS</div>
                            <div className='text-[#949494] text-[15px] leading-[21px] text-center'>Enjoy exclusive TEMU Campus Ambassador perks!</div>
                        </div>

                    </div>
                    <div className='flex items-center justify-center rounded-md bg-[#ff6d00] text-[25px] py-5 my-[60px] mx-auto w-[264px] h-[62px] text-white font-bold'>
                        <div>Apply  Now</div>
                    </div>
                    <div className='text-[#fb7701] text-[24px] text-center mb-[60px] font-[500]'>Perks</div>
                    <div className="grid grid-cols-2 mx-[265px] gap-[24px]">
                        <div className='w-[471px] h-[134px] px-[30px] bg-[#f8f8f8] rounded-lg flex flex-row justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-[20px]'>3% Commissions</div>
                                <div className='text-[15px] text-gray-500'>3% of your friends order amount as commission</div>
                            </div>
                            <div>
                                <Image src={abm7} />
                            </div>
                        </div>

                        <div className='w-[471px] h-[134px] px-[30px] bg-[#f8f8f8] rounded-lg flex flex-row justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-[20px]'>3% Commissions</div>
                                <div className='text-[15px] text-gray-500'>3% of your friends order amount as commission</div>
                            </div>
                            <div>
                                <Image src={abm7} />
                            </div>
                        </div>

                        <div className='w-[471px] h-[134px] px-[30px] bg-[#f8f8f8] rounded-lg flex flex-row justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-[20px]'>3% Commissions</div>
                                <div className='text-[15px] text-gray-500'>3% of your friends order amount as commission</div>
                            </div>
                            <div>
                                <Image src={abm7} />
                            </div>
                        </div>

                        <div className='w-[471px] h-[134px] px-[30px] bg-[#f8f8f8] rounded-lg flex flex-row justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-[20px]'>3% Commissions</div>
                                <div className='text-[15px] text-gray-500'>3% of your friends order amount as commission</div>
                            </div>
                            <div>
                                <Image src={abm7} />
                            </div>
                        </div>

                    </div>

                    <div className='text-[#fb7701] text-[24px] text-center my-[60px] font-[500]'>Connect with us</div>
                    <div className="flex flex-row gap-5 mx-[540px] justify-between items-center">
                        <div className='flex flex-col items-center'>
                            <div>
                                <Image src={abm8} className='w-[23px] h-[23px] mb-[11px]' />
                            </div>
                            <div className='text-[18px] font-semibold'>@temu_campus</div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div>
                                <Image src={abm9} className='w-[23px] h-[20px] mb-[11px]' />
                            </div>
                            <div className='text-[18px] font-semibold'>campus@temu.com</div>
                        </div>
                    </div>
                    <div className='text-gray-400 text-[15px] text-center my-[60px] font-[500] underline'>Temu Campus Amabassodor Policy</div>
                    <div className='mt-[60px]'>
                        <Footer />
                    </div>
                </div >
            ) : (
                <div className='flex flex-col items-center overflow-x-hidden'>
                    <nav className={`active2 ${show && 'hidden2'}`} ref={navRef}>
                        <Navbar2 showCategory={showCategory} setShowCategory={setShowCategory} />
                    </nav>

                    {showCategory ? (
                        <div className='mt-[42px] w-full  flex flex-row'>
                            <div className='w-[27%] bg-[#f6f6f6] pt-[12px] overflow-y-scroll example'
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
                            <div className='w-[75%] pt-5 px-3 overflow-y-scroll example'
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
                            <div>hello world</div>
                        </>
                    )}
                </div>
            )
            }
        </>

    )
}

const ImageComponent1 = () => {
    return (
        <div className='relative  mx-2'>
            <Image src={asset25} className='w-[140px] h-[140px]' />
            <div className='absolute flex flex-row gap-1 top-2 left-2 font-[500] items-center text-white text-sm'>
                <div className='bg-black rounded-full'>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" fill='white' height="1em" className="icon-2CgGT st-current" role="checkbox" alt="" aria-label="" aria-checked="true">
                        <path d="M276.3 484c18.1-19.9 48.8-21.4 68.7-3.3l112.5 102.1 222.5-220.2c17.7-17.5 45.5-18.7 64.5-3.4l4.2 3.8c18.9 19.1 18.7 49.9-0.3 68.8l-255.2 252.6c-18.4 18.2-47.8 18.8-66.9 1.5l-146.7-133.2c-19.9-18.1-21.4-48.8-3.3-68.7z"></path>
                    </svg>
                </div>
            </div>
            <div className='flex  text-[12px] gap-[2px] items-center justify-center border border-gray-400 rounded-full w-[140px] h-[30px] mt-2'>
                <div className='font-[400]'>White x1</div>
                <div className='pb-2'><RightOutlined style={{ fontSize: "10px" }} /></div>
            </div>
            <div className="flex flex-row gap-2 items-center mt-2">
                <div className='font-[500] text-[14px]'>&#x24; 1.08</div>
                <div className='font-[500] text-[10px] line-through text-gray-400 mt-2'>&#x24; 7.49</div>
                <div className='font-[500] text-[10px] text-gray-400 mt-[6px]'>1.5K + sold</div>
            </div>
        </div>
    )
}

const ImageComponent2 = () => {
    return (
        <div className='relative  mx-2'>
            <div className='w-[140px]'></div>
            <Image src={asset25} className='w-[147px] h-[147px]' />
            <div className='absolute flex flex-row gap-1 bottom-2 left-2 font-[500] items-center text-white text-sm'>
                <div>5</div>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="reviewStar-1UCUJ" aria-hidden="true" fill='white'><path d="M512 727.8l-187 137.4c-16.3 12-39.2 8.5-51.1-7.8-7-9.5-9-21.9-5.3-33.1l73-220.4-188.6-135.3c-16.4-11.8-20.2-34.6-8.3-51.1 6.9-9.6 18.1-15.3 29.9-15.2l232.1 1.3 70.5-221.1c6.1-19.2 26.7-29.9 45.9-23.8 11.3 3.6 20.1 12.4 23.7 23.8l70.5 221.1 232.1-1.3c20.2-0.1 36.7 16.2 36.8 36.4 0.1 11.9-5.6 23-15.2 29.9l-188.6 135.3 73 220.4c6.3 19.2-4 39.9-23.2 46.2-11.2 3.7-23.6 1.8-33.2-5.3l-187-137.4z" className="st-current"></path></svg>
                </div>
            </div>
        </div>
    )
}

const ImageComponent3 = () => {
    return (
        <div className='relative  w-[198px] mx-2'>
            <Image src={asset25} className='w-[198px] h-[198px]' />
            <div className='absolute flex flex-row gap-1 top-2 left-2 font-[500] items-center text-white text-sm'>
                <div className='bg-black rounded-full'>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" fill='white' height="1em" className="icon-2CgGT st-current" role="checkbox" alt="" aria-label="" aria-checked="true">
                        <path d="M276.3 484c18.1-19.9 48.8-21.4 68.7-3.3l112.5 102.1 222.5-220.2c17.7-17.5 45.5-18.7 64.5-3.4l4.2 3.8c18.9 19.1 18.7 49.9-0.3 68.8l-255.2 252.6c-18.4 18.2-47.8 18.8-66.9 1.5l-146.7-133.2c-19.9-18.1-21.4-48.8-3.3-68.7z"></path>
                    </svg>
                </div>
            </div>
            <div className='text-[14px] leading-[20px] w-[198px]'>
                Silicone cases for airpods
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-emd mt-2">
                    <div className='font-[500] text-[18px]'>&#x24; 1.08</div>
                    <div className='font-[500] text-[12px] line-through text-gray-400 mt-[6px]'>&#x24; 7.49</div>
                    <div className='font-[500] text-[12px] text-gray-400 mt-[6px]'>1.5K + sold</div>
                </div>
                <div className='border border-gray-600 rounded-full px-2 hover:shadow-xl'>
                    <Image src={asset114} className='w-[20px] h-[20px]' />
                </div>
            </div>
        </div>
    )
}

export default ambassador