import { Image } from 'antd'
import React from 'react'
import asset19 from '../images/product_photos/asset 19.webp';
import asset20 from '../images/product_photos/asset 20.webp';
import asset21 from '../images/product_photos/asset 21.webp';

const ImagePreview = () => {
    return (
        <>
            <Image.PreviewGroup>
                <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className='w-[600px] h-[600px]' />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" className='w-[600px] h-[600px]' />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" className='w-[600px] h-[600px]' />
            </Image.PreviewGroup>
        </>
    )
}

export default ImagePreview