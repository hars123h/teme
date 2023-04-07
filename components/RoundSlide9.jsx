import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Card7 from './Card7';
import asset25 from '../images/product_photos/asset 25.webp';
import asset114 from '../images/product_photos/asset 114.svg';
import asset147 from '../images/product_photos/asset 147.svg';
import Image from 'next/image';
import { RightOutlined } from '@ant-design/icons';


const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function RoundSlide9() {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const ImageComponent = () => {
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
                <div className='text-[14px] leading-[20px]'>
                    Silicone cases for airpods
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2 items-emd mt-2">
                        <div className='font-[500] text-[18px]'>&#x24; 1.08</div>
                        <div className='font-[500] text-[12px] line-through text-gray-400 mt-[6px]'>&#x24; 7.49</div>
                        <div className='font-[500] text-[12px] text-gray-400 mt-[6px]'>1.5K + sold</div>
                    </div>
                    <div className='border border-gray-600 rounded-full px-2 hover:shadow-xl'>
                        <Image src={asset114} className='w-[20px] h-[20px]'/>
                    </div>
                </div>
            </div>
        )
    }

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };



    return (
        <>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                transitionBehavior="smooth"
                transitionDuration={2800}

            >
                {items.map(({ id }) => (
                    <ImageComponent
                        itemId={id} // NOTE: itemId is required for track items
                        title={id}
                        key={id}
                        onClick={handleClick(id)}
                        selected={isItemSelected(id)}
                    />
                ))}
            </ScrollMenu>
        </>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <button className={`flex items-center relative ${isFirstItemVisible ? 'invisible' : ''}`} >
            <div onClick={() => scrollPrev()} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='bg-white rounded-full p-3 hover:shadow-xl shadow-lg h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <button className={`flex items-center relative  ${isLastItemVisible ? 'invisible' : ''}`} >
            <div onClick={() => scrollNext()} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='bg-white rounded-full p-3 hover:shadow-xl shadow-lg h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </button>
    );
}


export default RoundSlide9;