import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import spoons from '../images/spoons.webp';
import asset33 from '../images/assets/asset 33.png'
import Card4 from './Card4';
import Card from './Card';
import card_one from '../images/card_one.webp';
import Card6 from './Card6';

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function RoundSlide4() {
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
            <div className='text-center flex flex-col gap-0 mx-10'>
                <div className='flex justify-center '>
                    <Image src={asset33} className='h-[56px] w-auto' />
                </div>
                <div className='flex items-center relative'>
                    <div className='text-[24px] flex-grow font-[800] text-black mt-[-24px] mb-2 '>TAKE A CUE FROM THIS STYLISH LOT ...</div>
                    {/* <div className='text-[16px] font-[400] absolute bottom-1 right-10 flex items-center gap-1 leading-[24px] hover:underline cursor-pointer  mt-[-24px] mb-2'>
                        <div>View all</div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className='w-[16px] h-[16px]'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div> */}
                </div>
            </div>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                transitionBehavior="smooth"
                transitionDuration={2800}
            >
                <Card6 itemId={"element 21"} // NOTE: itemId is required for track items
                        title={"element 21"}
                        key={21}
                        />
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
                    className='bg-white rounded-full p-3 hover:shadow-xl h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <button className={`flex items-center  ${isLastItemVisible ? 'invisible' : ''}`} >
            <div onClick={() => scrollNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='bg-white rounded-full p-3 hover:shadow-xl h-[50px]'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </button>
    );
}



export default RoundSlide4;