import React, { useState } from 'react';
import { ReactSVG } from 'react-svg'
import styles from '../styles/Banner.module.css';
import back_box from '../images/back_box.webp';
import dollar_bubble from '../images/dollar_bubble.webp';
import mobile from '../images/mobile.webp';
import truck from '../images/truck.webp';
import Image from 'next/image';
import logo from '../images/logo.svg';
import usa from '../images/usa.webp';
import { Popover, Dropdown, Space, Breadcrumb, Divider, Radio } from 'antd';
import asset79 from '../images/mobile_assets/asset 79.webp';
import { DownOutlined, SmileOutlined, CheckOutlined, RightOutlined, PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Card5 from '../components/Card5';
import Footer from '../components/Footer';
import Banner from '@/components/Banner';


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



const category = () => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className=''>
            <Head>
                <title>Category</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/temu.svg" />
            </Head>
            <div className='border border-gray-800 bg-orange-600'>
                <Banner />
            </div>
            <div className='bg-orange-600 grid grid-cols-3 px-[88px]'>
                <div className='flex gap-2 items-center justify-between my-2'>
                    <div className='bg-white rounded-xl'>
                        <Image src={logo} alt="temu" className='w-[48px] ' />
                    </div>
                    <div className='flex gap-[5px] items-center  text-white  px-2'>
                        <Popover placement='bottom' content={content} trigger="hover">
                            <div className='flex items-center gap-1 hover:bg-[rgb(55,65,81,0.4)] rounded-full transition-all py-4 px-2'>
                                <div className='text-[16px] flex items-center gap-1 '>
                                    <div>Categories</div>
                                    <div className='mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Popover>
                    </div>
                </div>


                <div className='flex gap-2 items-center my-3 justify-center'>
                    <div className='border border-gray-800 w-full flex'>
                        <input className='pl-1 flex-grow outline-none text-gray-500' type="text" placeholder='Best sellers' />
                        <button className='px-2 py-1 bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-6 h-6 stroke-blue-600 fill-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <div className='flex gap-2 items-center my-2 justify-end'>
                    <div className='flex gap-[24px] items-center text-white  px-2'>
                        <div className='flex flex-col items-center gap-1 hover:bg-[rgb(55,65,81,0.4)] rounded-full transition-all py-2 px-4'>
                            <div >
                                {/* <Image src={thumb} /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                            </div>
                            <div className='text-[13px]'>offers</div>
                        </div>


                        <div className='flex flex-col items-center gap-1 hover:bg-[rgb(55,65,81,0.4)] rounded-full transition-all py-2 px-3'>
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                            <div className='text-[13px]'>Sign up</div>
                        </div>


                        <div className='flex flex-col items-center gap-1 hover:bg-[rgb(55,65,81,0.4)] rounded-full transition-all py-2 px-3'>
                            <div className='text-[13px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </div>


                        <div className='flex flex-col items-center gap-1'>
                            <div className='text-[13px]'>
                                <button className='bg-orange-500 border border-white rounded-md px-2 py-1'>
                                    own a store
                                </button>
                            </div>
                        </div>


                        <div className='flex flex-col items-center gap-1 hover:bg-[rgb(55,65,81,0.4)] rounded-full transition-all py-2 px-3'>
                            <div className='text-[13px] flex flex-col items-center gap-1 '>
                                <div className='mt-1 rounded-[50%]'>
                                    <Image src={usa} className="w-[18px] h-[18px]" />
                                </div>
                                <div>Region</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-[44px] px-[44px] mt-6'>
                <Breadcrumb
                    separator={<RightOutlined style={{ fontSize: '10px' }} />}
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Toys and Games</a>,
                        },
                        {
                            title: 'Stuffed Animals & Plush Toys',
                        },
                    ]}
                />
            </div>
            <div className='mx-[44px] px-[44px] mt-6'>
                <div className="flex flex-row">
                    <div className='w-[258px] flex flex-col gap-1 h-[600px] overflow-y-scroll pr-1 example'>
                        <>
                            <div className='text-[24px] leading-[30px] text-[#222222] mb-[25px] font-[400]'>Filters</div>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] border-b-[2px] border-gray-100'>Colors</div>
                            <div className="grid grid-cols-5 gap-2">

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-blue-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-green-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-red-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-violet-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-purple-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-black w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-indigo-800 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-orange-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-red-300 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>

                                <div className='w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border hover:border-black'>
                                    <div className='bg-pink-600 w-[20px] h-[20px] rounded-[50%]'></div>
                                </div>



                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Animal Type</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Bears</Radio>
                                        <Radio value={2}>Reptiles</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Interest</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Comic</Radio>
                                        <Radio value={2}>Video game</Radio>
                                        <Radio value={4}>Bears</Radio>
                                        <Radio value={5}>Rabbits</Radio>
                                        <Radio value={6}>Musical</Radio>
                                        <Radio value={7}>Arts</Radio>
                                        <Radio value={8}>Bears</Radio>
                                        <Radio value={9}>House-cats</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>


                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Theme</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Anime</Radio>
                                        <Radio value={2}>Video game</Radio>
                                        <Radio value={4}>Movie</Radio>
                                        <Radio value={5}>Comic</Radio>
                                        <Radio value={6}>Science Fiction</Radio>
                                        <Radio value={7}>Sports</Radio>
                                        <Radio value={8}>X-games</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Occasion</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Party</Radio>
                                        <Radio value={2}>Christmas</Radio>
                                        <Radio value={4}>New Year</Radio>
                                        <Radio value={5}>Valentine's day</Radio>
                                        <Radio value={6}>Wedding</Radio>
                                        <Radio value={7}>Easter</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Special Features</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Interactive Audio</Radio>
                                        <Radio value={2}>Sound</Radio>
                                        <Radio value={4}>Light</Radio>
                                        <Radio value={5}>Remote Controlled</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Applicable age group</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>12 Years & Up</Radio>
                                        <Radio value={2}>5 to 7 Years</Radio>
                                        <Radio value={4}>2 to 4 Years</Radio>
                                        <Radio value={5}>Birth to 24 months</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Customer Reviews</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                                <span className='ml-1'>& up</span>
                                            </div>
                                        </Radio>
                                        <Radio value={3}>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-6 h-6 text-gray-300 dark:text-gray-500 stroke-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                {/* <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                                                <span className='ml-1'>& up</span>
                                            </div>
                                        </Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>


                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Discount</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>30% off or more</Radio>
                                        <Radio value={2}>40% off or more</Radio>
                                        <Radio value={4}>50% off or more</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <>
                            <div className='text-[16px] leading-[18px] text-[#222222] pb-[10px] pt-[15px] border-b-[2px] border-gray-100'>Price</div>
                            <div className="flex flex-col gap-1">
                                <Radio.Group value={value} onChange={onChange}>
                                    <Space direction='vertical'>
                                        <Radio value={3}>Under &#36;5</Radio>
                                        <Radio value={2}>&#36;5-&#36;10</Radio>
                                        <Radio value={4}>&#36;10-&#36;17</Radio>
                                        <Radio value={5}>Over &#36;17</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="flex gap-1 pt-[10px] items-center">
                                <PlusOutlined />
                                <div className='text-[12px] leading-[18px] font-[500] text-[#222222]'>View More</div>
                            </div>
                        </>

                        <div className="flex flex-row gap-2 items-center my-4">
                            <div className='w-[40%]'>
                                <input placeholder='$Min.' className='py-2 text-gray-300 pl-1 outline-none rounded-full w-full border border-gray-200 placeholder:text-gray-300 text-[12px]' />
                            </div>
                            <div className='w-[40%]'>
                                <input placeholder='$Max.' className=' py-2 text-gray-300 pl-1 outline-none rounded-full w-full border border-gray-200 placeholder:text-gray-300 text-[12px]' />
                            </div>
                            <div className='w-[20%] flex items-center justify-center'>
                                <div className='text-[10px] text-center rounded-[50%] p-2 border hover:border-black'>Go</div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[80%] flex flex-col gap-1 pl-3'>
                        <div className="flex justify-between gap-1 items-center">
                            <div className='text-[24px] leading-[30px] text-[#222222]'>Trending Items</div>
                            <div className='flex gap-[12px] items-center'>
                                <div className='text-[13px] leading-[19.5px] text-[#222222] font-[400]'>sort by</div>
                                <div className='cursor-pointer'>
                                    <Dropdown
                                        placement='bottom'
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space className='flex items-center border gap-[30px] border-black rounded-full px-[16px] py-1'>
                                                <div>Relavance</div>
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4  gap-2">
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default category