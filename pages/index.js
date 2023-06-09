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
import Card5 from '@/components/Card5';
import React, { useEffect, useState, useRef } from 'react'
import RoundSlider from '@/components/RoundSlider'
import RoundSlider2 from '@/components/RoundSlider2'
import RoundSlide3 from '@/components/RoundSlide3'
import RoundSlide4 from '@/components/RoundSlide4'
import after_pay from '../images/after_pay.webp';
import klarna from '../images/klarna.webp'
import Footer from '@/components/Footer'
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


const inter = Inter({ subsets: ['latin'] })

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
    icon : <CheckOutlined style={{color:'green'}}/>, 
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

export default function Home() {

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

  return (
    <>
      <Head>
        <title>Temu | Explore the Latest Clothing, Beauty, Home, Jewelery & More</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/temu.svg" />
      </Head>

      {width >= 1024 ?
        <div className=''>
          <nav className={`active ${show && 'hidden'}`}>
            <div className='border border-gray-800 bg-orange-600'>
              <Banner />
            </div>
            <div className='bg-orange-600 opacity-[0.98]'>
              <Navbar />
            </div>
          </nav>


          <div className='pt-[140px]'>
            <Image src={banner_girl} className='w-full' />
          </div>

          <div className='  h-[48px] '>
            <div className='  px-3 py-2 hover:bg-[#dfdddd] bg-[#f0f0f0]'>
              <div className='flex gap-10 justify-around'>
                <div className='flex gap-1 text-[16px] text-black font-[500] items-center'>
                  {/* <Image src={asset7} className='w-[28px]' /> */}
                  <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>New Arrivals</button>
                </div>

                <div className='flex gap-2 text-[16px] text-black font-[500] items-center'>
                  {/* <Image src={asset8} className='w-[28px]' /> */}
                  <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Big Sales</button>
                </div>

                <div className='flex gap-2 text-[16px] text-black font-[500] items-center'>
                  {/* <Image src={asset9} className='w-[28px]' /> */}
                  <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Best Seller</button>
                </div>

                <div className='flex gap-2 text-[16px] text-black font-[500] items-center'>
                  {/* <Image src={asset10} className='w-[28px]' /> */}
                  <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Premium</button>
                </div>
              </div>
              {/* <div>
              <div className='flex text-[16px] text-black font-[500] items-center'>
                <div>Temu keeps you safe</div>
                <Image src={asset11} className='w-[28px]' />
              </div>
            </div> */}
            </div>
          </div>


          {/* <div className='px-[44px] mx-[44px] mt-6'>
          <div className={styles.flower}>
            <div>
              <div className='flex text-[16px] gap-1 text-black font-[500] items-center'>
                <Image src={asset36} className='w-[24px]' />
                <div className='text-[24px] text-white font-[800] italic leading-[1.5rem] mr-3'>Lightning deals</div>
                <div className='text-[16px] text-white font-[500]  leading-[1.5rem] '>Ends in</div>
                <FlipCountdown
                  theme={'light'}
                  size='extra-small'
                  hideYear
                  hideMonth
                  hideDay
                  hourTitle=' '
                  minuteTitle=' '
                  secondTitle={' '}
                  endAt={'2023-3-30 22:26:58'} // Date/Time
                />
                <Image src={asset11} className='w-[16px]' />
              </div>
            </div>

          </div>
        </div> */}

          <div className="  px-[25px] mx-[25px] mt-6">
            {/* <Image src={card_one} className='w-72 border border-orange-500 rounded-md hover:bg-[#f0f0f0]' /> */}
            <RoundSlide5 />
          </div>

          <div className="  px-[25px] mx-[25px] mt-6">
            {/* <Image src={card_one} className='w-72 border border-orange-500 rounded-md hover:bg-[#f0f0f0]' /> */}
            <RoundSlide6 />
          </div>

          <div className="grid grid-cols-3 gap-5 px-[44px] mx-[44px] mt-16 mb-4">
            <div className='overflow-hidden'>
              <Image src={banner_img1} className='hover:scale-[1.05] transition-all' />
            </div>
            <div className='overflow-hidden'>
              <Image src={banner_img2} className='hover:scale-[1.05] transition-all' />
            </div>
            <div className='overflow-hidden'>
              <Image src={banner_img3} className='hover:scale-[1.05] transition-all' />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 px-[44px] mx-[44px] mt-16 mb-4">
            <div className='overflow-hidden'>
              <Image src={banner_img4} className='hover:scale-[1.05] transition-all' />
            </div>
            <div className='overflow-hidden'>
              <Image src={banner_img5} className='hover:scale-[1.05] transition-all' />
            </div>
          </div>

          <div className='px-[24px] mx-[24px] mt-8 mb-4'>
            <RoundSlider />
          </div>

          <div className='px-[24px] mx-[24px] mt-10 mb-4'>
            <RoundSlider2 />
          </div>

          <div className='px-[24px] mx-[24px] mt-10 mb-4'>
            <RoundSlide3 />
          </div>

          <div className='px-[44px] mx-[44px] mt-6 mb-6'>
            <div className={styles.flower}>
              <div>
                <div className='flex text-[16px] gap-1 text-black font-[500] items-center'>
                  {/* <div className='text-[24px] text-white font-[800] italic leading-[1.5rem] mr-3'>Shop now, pay later with</div> */}
                  <Image src={after_pay} className='h-[48px] w-[713px] scale-[0.70]' />
                  {/* <div className='text-[16px] text-white font-[500]  leading-[1.5rem] '>or</div>
                <Image src={klarna} className='' /> */}
                </div>
              </div>
            </div>
          </div>

          <div className='px-[24px] mx-[24px] mt-10 mb-4'>
            <RoundSlide4 />
            <div className="grid grid-cols-5 mx-[20px] gap-2">
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
              <Card5 /> <Card5 /> <Card5 /> <Card5 /> <Card5 />
            </div>

            <div className="flex justify-center items-center mt-[38px] mb-[70px]">
              <div className='flex justify-center items-center cursor-pointer 
            gap-2 w-[220px] h-[52px] border border-gray-800 rounded-full hover:shadow-xl'>
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

          <Footer />

        </div>
        :
        <div className='flex flex-col items-center overflow-x-hidden'>
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
              <div className='relative  w-full mx-auto '
                style={{ height: 0.25 * width, marginTop: '40px' }} >
                <Image src={asset2} className='absolute w-full h-full' />
                <Image src={asset3} className='absolute left-[20px] top-[15px] max-w-lg' style={{ width: "65%" }} />
              </div>

              <div className='w-full  h-[48px] '>
                <div className='  px-3 py-2 hover:bg-[#dfdddd] bg-[#f0f0f0]'>
                  <div className='flex gap-1 justify-around'>
                    <div className='flex gap-1 text-[10px] text-black font-[500] items-center'>
                      {/* <Image src={asset7} className='w-[28px]' /> */}
                      <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>New Arrivals</button>
                    </div>

                    <div className='flex gap-2 text-xs text-black font-[500] items-center'>
                      {/* <Image src={asset8} className='w-[28px]' /> */}
                      <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Big Sales</button>
                    </div>

                    <div className='flex gap-2 text-xs text-black font-[500] items-center'>
                      {/* <Image src={asset9} className='w-[28px]' /> */}
                      <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Best Seller</button>
                    </div>

                    <div className='flex gap-2 text-xs text-black font-[500] items-center'>
                      {/* <Image src={asset10} className='w-[28px]' /> */}
                      <button className='px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-400'>Premium</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider1 w-full px-2 py-2">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <div className='flex gap-1 items-center'>
                    <div className='text-[14px] text-black font-[800] italic leading-[1.5rem] mr-3'>Lightning deals</div>
                    <Image src={asset118} className='w-[14px]' />
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='text-[12px] text-black font-[500]  leading-[1.5rem] '>Ends in</div>
                    <div><FlipCountdown
                      theme={'dark'}
                      size='extra-small'
                      hideYear
                      hideMonth
                      hideDay
                      hourTitle=' '
                      minuteTitle=' '
                      secondTitle=' '
                      endAt={'2023-4-4 22:26:58'} // Date/Time
                    /></div>
                  </div>
                </div>
                <div className='mt-2'>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    // modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <Image src={asset11} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={asset12} />
                      <div className='flex items-center gap-2 mt-[2px]'>
                        <div className='text-[18px] text-black font-[600]'><span className='text-[16px]'>$</span>0.98</div>
                        <div className='text-[13px]  text-[#888888] font-[400]'>7.8K + sold</div>
                      </div>
                      <div className="mt-[2px] bg-gray-200 h-[3px]">
                        <div className="bg-black h-[3px] w-[67%]" ></div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className='bg-gray-100 h-[14px] mt-1 w-full'></div>

              <div className="slider2 w-full px-2 py-2">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src={slide3} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={slide2} />
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className='bg-gray-100 h-[14px] mt-1 w-full'></div>

              <div className='w-full'>
                <div className='flex items-center w-full px-2 py-1 mx-1 gap-1'>
                  <div>Categories</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>

                <div className='w-full flex flex-wrap'>
                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-[2px] justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-1 px-2 mx-1 py-1 mt-2 items-center rounded-full bg-[#f7f7f7] w-[150px]'>
                    <div>
                      <Image src={asset12} className='rounded-[50%] w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col gap-1 justify-center'>
                      <div className='text-[13px] text-[#000000]'>Smart Home</div>
                      <div className='text-[12px] text-[#ffb500]'>Up to 99% off</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-100 h-[14px] mt-2 w-full'></div>

              <div className='w-full'>
                <div className='flex items-center w-full px-2 py-1 mx-1 gap-1'>
                  <div>Recommended</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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
        </div>
      }
    </>
  )
}
