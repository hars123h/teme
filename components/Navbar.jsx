import React from 'react';
import { ReactSVG } from 'react-svg'
import styles from '../styles/Banner.module.css';
import back_box from '../images/back_box.webp';
import dollar_bubble from '../images/dollar_bubble.webp';
import mobile from '../images/mobile.webp';
import truck from '../images/truck.webp';
import Image from 'next/image';
import FlipCountdown from '@rumess/react-flip-countdown'
import logo from '../images/logo.svg';
import rabbit from '../images/rabbit.svg';
import down from '../images/down.svg';
import thumb from '../images/thumb.svg';
import lens from '../images/lens.svg';
import usa from '../images/usa.webp';
import { Popover, Dropdown, Space } from 'antd';
import asset79 from '../images/mobile_assets/asset 79.webp';
import { DownOutlined, SmileOutlined, CheckOutlined } from '@ant-design/icons';
import Link from 'next/link';


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
        <div className='w-[20%] bg-white overflow-y-scroll example'
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
        <div className='w-[80%] pt-5 px-3 overflow-y-scroll example'

        >
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


const Navbar = () => {
    return (
        <div className='bg-orange-600 grid grid-cols-3 mx-[44px] px-[44px]'>
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
    )
}

export default Navbar