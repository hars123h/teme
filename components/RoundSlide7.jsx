import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Card7 from './Card7';
import asset25 from '../images/product_photos/asset 25.webp';
import asset147 from '../images/product_photos/asset 147.svg';
import Image from 'next/image';


const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function RoundSlide7() {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const ImageComponent = () => {
        return (
            <div className='relative w-[147px] h-[147px] mx-2'>
                <Image src={asset25} className='w-[147px] h-[147px]'/>
                <div className='absolute flex flex-row gap-1 bottom-2 left-2 font-[500] items-center text-white text-sm'>
                    <div>5</div>
                    <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="reviewStar-1UCUJ" aria-hidden="true" fill='white'><path d="M512 727.8l-187 137.4c-16.3 12-39.2 8.5-51.1-7.8-7-9.5-9-21.9-5.3-33.1l73-220.4-188.6-135.3c-16.4-11.8-20.2-34.6-8.3-51.1 6.9-9.6 18.1-15.3 29.9-15.2l232.1 1.3 70.5-221.1c6.1-19.2 26.7-29.9 45.9-23.8 11.3 3.6 20.1 12.4 23.7 23.8l70.5 221.1 232.1-1.3c20.2-0.1 36.7 16.2 36.8 36.4 0.1 11.9-5.6 23-15.2 29.9l-188.6 135.3 73 220.4c6.3 19.2-4 39.9-23.2 46.2-11.2 3.7-23.6 1.8-33.2-5.3l-187-137.4z" className="st-current"></path></svg>
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


export default RoundSlide7;