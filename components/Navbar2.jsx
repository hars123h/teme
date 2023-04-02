import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import asset101 from '../images/mobile_assets/asset 101.svg';
import asset102 from '../images/mobile_assets/asset 102.svg';
import asset103 from '../images/mobile_assets/asset 103.svg';
import asset104 from '../images/mobile_assets/asset 104.svg';
import asset0 from '../images/mobile_assets/asset 0.webp';
import { Popover } from 'antd';

const content = (
    <div>
        <div className='py-2 px-3 text-white bg-orange-600 text-center text-lg rounded-full mb-5 mt-2'>SIGN IN / REGISTER</div>
        <div className='flex flex-row justify-around gap-4 mx-2'>
            <div className='flex flex-col gap-1 items-center'>
                <div className='bg-black p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#FFFFFF" role="img" class="topIcon-11t8B"><path d="M793.8 102.4c51 0 91.9 42.1 92 93.5l0 0 0 636.6c0 49.2-39.9 89.1-89.2 89.1l0 0-561.3 0c-51 0-91.9-42.1-91.9-93.5l0 0 0-632.2c0-51.4 40.9-93.5 91.9-93.5l0 0z m0 72.1l-558.5 0c-10.7 0-19.8 9.4-19.8 21.4l0 0 0 632.2c0 12.1 9.1 21.4 19.8 21.4l0 0 561.3 0c9.4 0 16.9-7.6 17-17l0 0 0-636.6c0-12.1-9.1-21.4-19.8-21.4l0 0z m-238 389c19.9 0 36.1 16.1 36.1 36.1 0 19.9-16.1 36.1-36.1 36.1l-159.8 0c-19.9 0-36.1-16.1-36.1-36.1 0-19.9 16.1-36.1 36.1-36.1l159.8 0z m77.4-193.2c19.9 0 36.1 16.1 36 36.1 0 19.9-16.1 36.1-36 36l-237.2 0c-19.9 0-36.1-16.1-36.1-36 0-19.9 16.1-36.1 36.1-36.1l237.2 0z"></path></svg>
                </div>
                <div className='text-sm'>Your orders</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='bg-black p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#FFFFFF" role="img" class="topIcon-11t8B"><path d="M846.2 194.6c47.3 0 85.6 38.3 85.6 85.6l0 0 0 155c0 19.8-16 35.8-35.8 35.8l0 0-5.1 0.4c-20.2 2.5-35.8 19.8-35.9 40.6 0 22.6 18.3 41 41 41l0 0 4.9 0.3c17.5 2.4 31 17.4 30.9 35.5l0 0 0 155c0 47.3-38.3 85.6-85.6 85.6l0 0-642.8 0c-47.3 0-85.6-38.3-85.6-85.6l0 0 0-155c0-19.8 16-35.8 35.8-35.8l0 0 5.1-0.4c20.2-2.5 35.8-19.8 35.9-40.6 0-22.6-18.3-41-41-41l0 0-4.9-0.3c-17.5-2.4-31-17.4-30.9-35.5l0 0 0-155c0-47.3 38.3-85.6 85.6-85.6l0 0z m0 71.6l-642.8 0c-7.7 0-13.9 6.2-14 14l0 0 0 125 2.7 0.9c40.8 14.9 70.7 52.7 73.9 97.9l0 0 0.2 8c0 48.7-30.9 90.2-74.1 105.9l0 0-2.7 0.9 0 125c0 6.6 4.6 12.1 10.8 13.6l0 0 3.2 0.4 642.8 0c7.7 0 13.9-6.2 14-14l0 0 0-125-2.7-0.9c-40.8-14.9-70.7-52.7-73.9-97.9l0 0-0.2-8c0-48.7 30.9-90.2 74.1-105.9l0 0 2.7-0.9 0-125c0-6.6-4.6-12.1-10.8-13.6l0 0-3.2-0.4z m-213.9 345.6c24 0 43.5 19.5 43.5 43.6 0 24-19.5 43.5-43.5 43.5-24 0-43.5-19.5-43.5-43.5 0-24 19.5-43.5 43.5-43.6z m0-143.3c24 0 43.5 19.5 43.5 43.5 0 24-19.5 43.5-43.5 43.5-24 0-43.5-19.5-43.5-43.5 0-24 19.5-43.5 43.5-43.5z m0-143.4c24 0 43.5 19.5 43.5 43.5 0 24-19.5 43.5-43.5 43.6-24 0-43.5-19.5-43.5-43.6 0-24 19.5-43.5 43.5-43.5z"></path></svg>
                </div>
                <div className='text-sm'>Coupans & offers</div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='bg-black p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#FFFFFF" role="img" class="topIcon-11t8B"><path d="M846.2 194.6c44.8 0 81.5 34.4 85.3 78.2l0.3 7.4 0 463.6c0 44.8-34.4 81.5-78.2 85.3l-7.4 0.3-642.8 0c-44.8 0-81.5-34.4-85.3-78.2l-0.3-7.4 0-463.6c0-44.8 34.4-81.5 78.2-85.3l7.4-0.3 642.8 0z m0 71.6l-642.8 0c-6.6 0-12.1 4.6-13.6 10.8l-0.4 3.2 0 463.6c0 6.6 4.6 12.1 10.8 13.6l3.2 0.4 642.8 0c6.6 0 12.1-4.6 13.6-10.8l0.4-3.2 0-69.2-264.5 0c-89.8 0-162.6-72.8-162.5-162.6 0-89.8 72.8-162.6 162.5-162.6l264.5 0 0-69.2c0-6.6-4.6-12.1-10.8-13.6l-3.2-0.4z m14 149.7l-264.5 0.1c-50.5 0-91.9 39-95.7 88.5l-0.3 7.5c0 53 43 96 96 96l264.5-0.1 0-192z m-252 52.6c24 0 43.5 19.5 43.5 43.5 0 24-19.5 43.5-43.5 43.5-24 0-43.5-19.5-43.5-43.5 0-24 19.5-43.5 43.5-43.5z"></path></svg>
                </div>
                <div className='text-sm'>Credit balance</div>
            </div>
        </div>
        <div className='h-[6px] my-3 bg-gray-200 w-full'></div>
        <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-2 py-2 px-1 border-b border-gray-100'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#000000" role="img" class="icon-15Z3E"><path d="M832 138.666667a96 96 0 0 1 96 96v469.333333a96 96 0 0 1-96 96l-242.773333-0.042667-75.946667 75.989334a32 32 0 0 1-41.642667 3.114666l-3.584-3.114666-75.989333-75.989334-242.730667 0.042667a96 96 0 0 1-95.786666-89.429333L53.333333 704v-469.333333A96 96 0 0 1 149.333333 138.666667z m0 64h-682.666667a32 32 0 0 0-32 32v469.333333c0 17.664 14.336 32 32 32h256.042667c8.490667 0 16.64 3.413333 22.613333 9.386667l62.677334 62.634666 62.677333-62.634666a32 32 0 0 1 17.578667-8.96l5.034666-0.426667H832a32 32 0 0 0 32-32v-469.333333a32 32 0 0 0-32-32z m-371.925333 100.181333a34.133333 34.133333 0 0 1 61.184 0l36.565333 74.026667 81.706667 11.904a34.133333 34.133333 0 0 1 29.226666 34.389333l-0.341333 4.266667a34.133333 34.133333 0 0 1-9.941333 19.541333l-59.136 57.642667 13.952 81.408a34.133333 34.133333 0 0 1-23.68 38.4l-4.181334 1.024a34.133333 34.133333 0 0 1-21.674666-3.413334l-73.088-38.442666-73.088 38.4a34.133333 34.133333 0 0 1-43.690667-10.368l-2.432-3.925334a34.133333 34.133333 0 0 1-3.413333-21.674666l13.909333-81.408-59.093333-57.6a34.133333 34.133333 0 0 1-3.84-44.416l3.242666-3.84a34.133333 34.133333 0 0 1 19.541334-9.984l81.664-11.904z m30.592 53.632l-25.216 51.114667a34.133333 34.133333 0 0 1-25.685334 18.688l-56.448 8.149333 40.832 39.808a34.133333 34.133333 0 0 1 10.325334 25.472l-0.512 4.736-9.642667 56.149333 50.474667-26.496a34.133333 34.133333 0 0 1 27.392-1.92l4.352 1.92 50.432 26.496-9.6-56.149333a34.133333 34.133333 0 0 1 6.613333-26.666667l3.2-3.541333 40.789333-39.808-56.405333-8.149333a34.133333 34.133333 0 0 1-23.296-14.549334l-2.389333-4.138666-25.216-51.114667z"></path></svg>
                </div>
                <div className='text-md'>Your reviews</div>
            </div>
            <div className='flex flex-row items-center gap-2 py-2 px-1 border-b border-gray-100'>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" class="icon-15Z3E" fill="#000000"><path d="M765.3 175.4c56.5 0 107.3 34.4 128.3 86.8l17.1 42.6c2.5 6.3 4.5 12.8 5.8 19.4l-0.8-3.5 2.9 7.3c5.2 14.6 8.4 29.8 9.4 45.4l0.4 11.8c0 59.9-30.8 112.6-77.4 143.2l0 262.8c0 49.2-37.9 89.6-86.1 93.5l-7.7 0.3-464 0c-49.2 0-89.6-37.9-93.5-86.1l-0.3-7.7 0-262.8c-46.6-30.6-77.3-83.3-77.4-143.2 0-24.9 5.3-49.1 15.8-71.8l-0.3 0.5 0.6-1.8 1.8-5.1 17.1-43.7c20.7-53 71.8-87.9 128.8-87.9z m-124.2 335.5l-2.2 2.2c-28.1 25.1-64.2 40.5-103 42.9l-10.7 0.4c-42.9 0-83-15.9-113.7-43.3l-2.3-2.2-2.3 2.2c-28.1 25.1-64.2 40.5-103 42.9l-10.7 0.4c-7.5 0-14.9-0.5-22.2-1.4l0 236.2c0 10.9 7.8 19.9 18.2 21.8l4 0.4 464 0c10.9 0 19.9-7.8 21.8-18.2l0.4-4 0-236.2c-7.3 0.9-14.6 1.4-22.2 1.4-42.9 0-83-15.9-113.7-43.3l-2.4-2.2z m124.2-263.9l-479.5 0c-27.4 0-52 16.8-62 42.4l-17.1 43.7-1.3 3.9-2.1 5.5-0.6 1.3c-5.9 12.9-9 26.9-9 41.4 0 54.9 44.5 99.5 99.5 99.5 35.3 0 67.4-18.5 85.2-48.3 13.9-23.2 47.5-23.2 61.5 0 17.9 29.7 50 48.3 85.3 48.3 35.3 0 67.4-18.5 85.2-48.3 13.9-23.2 47.5-23.2 61.5 0 17.9 29.7 50 48.3 85.3 48.3 54.9 0 99.5-44.5 99.5-99.5 0-13.8-2.8-27.1-8.1-39.4l-2.3-7c-0.5-2.5-1.2-4.9-2.2-7.3l-17.1-42.7c-10.1-25.2-34.6-41.8-61.7-41.8z"></path></svg>
                </div>
                <div className='text-md'>Followed shops</div>
            </div>
            <div className='flex flex-row items-center gap-2 py-2 px-1 border-b border-gray-100'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#000000" role="img" class="icon-15Z3E"><path d="M524.8 105c224.8 0 407 182.2 407 407 0 224.8-182.2 407-407 407-224.8 0-407-182.2-407-407 0-224.8 182.2-407 407-407z m0 71.6c-185.2 0-335.4 150.1-335.4 335.4 0 185.2 150.1 335.4 335.4 335.4 185.2 0 335.4-150.1 335.4-335.4 0-185.2-150.1-335.4-335.4-335.4z m-12.8 156.2c21.2 0 38.4 17.2 38.4 38.4l0 156.8 87.8 69c15.1 11.9 18.9 33 9.6 49.2l-3.2 4.8c-13.1 16.7-37.3 19.5-54 6.4l-102.4-80.6c-9.2-7.3-14.6-18.4-14.6-30.2l0-175.4c0-21.2 17.2-38.4 38.4-38.4z"></path></svg>
                </div>
                <div className='text-md'>Browsing history</div>
            </div>
            <div className='flex flex-row items-center gap-2 py-2 px-1 border-b border-gray-100'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#000000" role="img" class="icon-15Z3E"><path d="M512 117.8c217.8 0 394.2 179 394.2 399.5 0 14.5-0.9 29.1-2.5 44.1l0 0-3 21c-1.3 8.1-2.9 16.3-4.9 25.1l0 0-4.2 16.6c-17.7 64.7-51.1 123.4-96.1 170.5l0 0-11.6 11.5c-67.6 71.4-157.1 129.1-257.3 173.8l0 0-14.6 6.5-14.6-6.5c-100.1-44.7-189.7-102.4-256.1-172.6-56-53.7-95.4-122.9-112.9-198.9l0 0-0.6-2.2c-2.6-11.7-4.7-23.7-6.2-35.3l0 0-1.4-9.5c-1.6-15.1-2.5-29.7-2.4-44.1 0-220.6 176.4-399.6 394.2-399.5z m0 71.6c-178 0-322.6 146.7-322.6 327.9 0 11.7 0.7 23.7 1.9 34.9l0 0 2.8 18.8c1 6.6 2.2 12.8 3.4 18.2l0 0 4.3 17c15.8 57.2 46.7 108.7 90.3 150.6l0 0 14.3 14.5c58.7 57.2 135.1 105.2 220.2 143.2l-14.7-6.8 6.6-2.9c69-32.8 131.6-72.3 183.3-118.7l16.8-15.8 24.9-25.1c40.5-42.5 69.1-95.2 82-151.9l0 0 3.6-17.3 3.2-21.2 1.3-13.6c0.6-8.1 0.9-16.1 1-23.9 0-181.2-144.5-327.9-322.6-327.9z m0 184.4c76.4 0 138.2 61.9 138.2 138.2 0 76.3-61.9 138.2-138.2 138.2-76.3 0-138.2-61.9-138.2-138.2 0-76.4 61.9-138.2 138.2-138.2z m0 71.6c-36.8 0-66.6 29.8-66.6 66.6 0 36.7 29.8 66.6 66.6 66.6 36.8 0 66.6-29.8 66.6-66.6 0-36.8-29.8-66.6-66.6-66.6z"></path></svg>
                </div>
                <div className='text-md'>Addresses</div>
            </div>
            <div className='flex flex-row items-center gap-2 py-2 px-1 border-b border-gray-100'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#000000" role="img" class="icon-15Z3E"><path d="M512 107.5c217.7 0 394.2 176.5 394.2 394.3l0 51.2 0 0 0 281.6c0 33.9-27.5 61.4-61.4 61.4l-102.4 0c-62.2 0-112.6-50.4-112.6-112.6l0-153.6c0-62.2 50.4-112.6 112.6-112.7l92.2 0 0-15.3c0-178.1-144.4-322.6-322.6-322.6-178.1 0-322.6 144.4-322.6 322.6l0 15.3 92.2 0c59.5 0 108.2 46.1 112.4 104.6l0.2 8.1 0 153.6c0 62.2-50.4 112.6-112.6 112.6l0 0-102.4 0c-33.9 0-61.4-27.5-61.4-61.4l0 0 0-332.8c0-217.7 176.5-394.2 394.2-394.3z m-230.4 481.3l-92.2 0 0 235.5 92.2 0c22.6 0 41-18.3 41-40.9l0 0 0-153.6c0-22.6-18.3-41-41-41l0 0z m553 0l-92.2 0c-22.6 0-41 18.3-41 41l0 153.6c0 22.6 18.3 41 41 40.9l92.2 0 0-235.5z"></path></svg>
                </div>
                <div className='text-md'>Customer support</div>
            </div>
            <div className='flex flex-row items-center gap-2 py-2 px-1'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2em" height="2em" fill="#000000" role="img" class="icon-15Z3E"><path d="M450.6 106.3c38-22 84.9-22 122.8 0l0 0 270.3 156c38 22 61.4 62.5 61.4 106.5l0 0 0 312c0 43.9-23.4 84.5-61.4 106.5l0 0-270.3 156c-38 22-84.9 22-122.8 0l0 0-270.3-156c-38-22-61.4-62.5-61.4-106.5l0 0 0-312c0-43.9 23.4-84.5 61.4-106.5l0 0z m87 62.1c-15.8-9.1-35.4-9.1-51.2 0l0 0-270.3 156c-15.8 9.1-25.6 26-25.6 44.4l0 0 0 312c0 18.3 9.8 35.2 25.6 44.4l0 0 270.3 156c15.8 9.1 35.4 9.1 51.2 0l0 0 270.3-156c15.8-9.1 25.6-26 25.6-44.4l0 0 0-312c0-18.3-9.8-35.2-25.6-44.4l0 0z m-25.6 218.2c76.4 0 138.2 61.9 138.2 138.2 0 76.3-61.9 138.2-138.2 138.2-76.3 0-138.2-61.9-138.2-138.2 0-76.4 61.9-138.2 138.2-138.2z m0 71.6c-36.8 0-66.6 29.8-66.6 66.6 0 36.7 29.8 66.6 66.6 66.6 36.8 0 66.6-29.8 66.6-66.6 0-36.8-29.8-66.6-66.6-66.6z"></path></svg>
                </div>
                <div className='text-md'>Settings</div>
            </div>
        </div>
    </div>
);

const Navbar2 = ({ showCategory, setShowCategory }) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        setHeight(newHeight);
        setWidth(newWidth);
        console.log("updating height width");
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

    console.log("give height and width", width, height);
    return (
        <div style={{
            height: width * 0.12
        }} className={`flex   items-center justify-around`}>
            <div>
                <Image src={asset101} className={`mr-4 ml-4`} style={{ width: width * 0.2, height: height * 0.1 }} />
            </div>
            <div className='bg-[#ececec] text-[#666666] rounded-full flex gap-1 items-center px-3 w-[40%] h-[75%]'>
                <div className='flex items-center gap-2'>
                    <Image src={asset102} className='w-[15px] h-[15px]' />
                    <input className='text-[18px] outline-none leading-[24px] text-start bg-transparent' placeholder='Best sellers' />
                </div>
            </div>
            <div className="flex flex-row items-center h-[75$]">
                {showCategory ?
                    <span onClick={() => setShowCategory(!showCategory)}>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="icon-2TKwW p-2" style={{width:width*0.1,height:height*0.1,fill:"#FFB500"}} src="https://aimg.kwcdn.com/material-put/1e19d4646b4/6e89f7a2-1c1e-4f91-ae53-8197f06aa01d.png" alt="Categories"><path d="M217.6 706.7c32.3 0 58.5 26.2 58.5 58.5 0 32.3-26.2 58.5-58.5 58.5-32.3 0-58.5-26.2-58.5-58.5 0-32.3 26.2-58.5 58.5-58.5z m624.3 15.5c23.2 0 42.1 18.8 42.1 42.1 0 21.7-16.4 39.5-37.5 41.8l-4.6 0.2-450.2 0c-23.2 0-42.1-18.8-42.1-42 0-21.7 16.4-39.5 37.5-41.8l4.6-0.3 450.2 0z m-624.3-278.8c32.3 0 58.5 26.2 58.5 58.5 0 32.3-26.2 58.5-58.5 58.5-32.3 0-58.5-26.2-58.5-58.5 0-32.3 26.2-58.5 58.5-58.5z m624.3 15.5c23.2 0 42.1 18.8 42.1 42.1 0 21.7-16.4 39.5-37.5 41.8l-4.6 0.2-450.2 0c-23.2 0-42.1-18.8-42.1-42 0-21.7 16.4-39.5 37.5-41.8l4.6-0.3 450.2 0z m-624.3-278.8c32.3 0 58.5 26.2 58.5 58.5 0 32.3-26.2 58.5-58.5 58.5-32.3 0-58.5-26.2-58.5-58.5 0-32.3 26.2-58.5 58.5-58.5z m624.3 15.5c23.2 0 42.1 18.8 42.1 42.1 0 21.7-16.4 39.5-37.5 41.8l-4.6 0.2-450.2 0c-23.2 0-42.1-18.8-42.1-42 0-21.7 16.4-39.5 37.5-41.9l4.6-0.2 450.2 0z"></path></svg>
                    </span>
                    :
                    <Image src={asset103} onClick={() => setShowCategory(!showCategory)} alt='menu' className='p-2' style={{ width: width * 0.1, height: height * 0.1 }} />
                }
                {/* <Image src={asset0} className=' p-2 rounded-full w-12 h-12'  /> */}
                <Popover placement='bottomRight' content={content} trigger="hover">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-10 h-10 p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </Popover>
                <Image src={asset104} className=' p-2' style={{ width: width * 0.1, height: height * 0.1 }} />
            </div>
        </div>
    )
}

export default Navbar2