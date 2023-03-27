import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import spoons from '../images/spoons.webp';
import asset33 from '../images/assets/asset 33.png'

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function RoundSlider() {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);


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
            <div className='text-center flex flex-col gap-0'>
                <div className='flex justify-center '>
                    <Image src={asset33} className='h-[56px] w-auto'/>
                </div>
                <div className='text-[24px] font-[800] text-black mt-[-24px] mb-2'>CATEGORIES</div>
            </div>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                transitionBehavior="smooth"
                transitionDuration={2800}
            >
                {items.map(({ id }) => (
                    <Card
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
        <button className={`flex items-center ${isFirstItemVisible ? 'invisible' : ''}`} >
            <div onClick={() => scrollPrev()} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='bg-white rounded-full p-3 shadow-xl h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <button className={`flex items-center ${isLastItemVisible ? 'invisible' : ''}`} >
            <div onClick={() => scrollNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='bg-white rounded-full p-3 shadow-xl h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </button>
    );
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);
    const elementRef1 = useRef();
    const elementRef2 = useRef();
    const [isInside1, setIsInside1] = useState(false);
    const [isInside2, setIsInside2] = useState(false);


    const handleMouseEnter1 = () => {
        setIsInside1(true);
    }

    const handleMouseLeave1 = () => {
        setIsInside1(false);
    }

    const handleMouseEnter2 = () => {
        setIsInside2(true);
    }

    const handleMouseLeave2 = () => {
        setIsInside2(false);
    }

    return (
        <div
            onClick={() => onClick(visibility)}
            className='w-[330px] pl-[6px] pr-[8px] mb-[12px] mt-[12px] flex flex-col gap-[18px] '
            tabIndex={0}
        >
            <div className='bg-[#8fa757] flex flex-row rounded-[50px] items-center h-[100px]' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                <div className='overflow-hidden w-[90px] border border-[#8fa757] rounded-[50%] m-[5px]'>
                    <Image src={spoons} className={`w-[90px]  rounded-[50%] ${isInside1 ? 'scale-[1.1] transition-all' : ''}`} ref={elementRef1} />
                </div>
                <div className="flex flex-col gap-[4px] justify-center flex-grow  pl-[18px]">
                    <div className='text-[18px] text-[#ffffff] leading-[20px] font-[500]'>Appliances</div>
                    <div className='text-[16px] text-[#dbebb0] leading-[20px]'>From $0.48</div>
                </div>
            </div>
            <div className='bg-[#8fa757] flex flex-row rounded-[50px] items-center h-[100px]' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                <div className='overflow-hidden w-[90px] border border-[#8fa757] rounded-[50%] m-[5px]'>
                    <Image src={spoons} className={`w-[90px]  rounded-[50%] ${isInside2 ? 'scale-[1.05] transition-all' : ''}`} ref={elementRef2} />
                </div>
                <div className="flex flex-col gap-[4px] justify-center flex-grow pl-[18px]">
                    <div className='text-[18px] text-[#ffffff] leading-[20px] font-[500]'>Appliances</div>
                    <div className='text-[16px] text-[#dbebb0] leading-[20px]'>From $0.48</div>
                </div>
            </div>

        </div>
    );
}

export default RoundSlider;