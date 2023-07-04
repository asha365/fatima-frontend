import React from 'react';
import './Product.css';
import fire from '../../../assets/images/fire.png';
import firstAid from '../../../assets/images/first-aid.png';
import saftyApperal from '../../../assets/images/saft-jacket.png';
import visibilityAid from '../../../assets/images/visibility-aid.png';

const Product = () => {
    return (
        <div className='product my-24'>
            <div className='w-1/5 product-text '>
                <p className='text-6xl font-bold mb-5'>PRODUCT</p>
                <h2 className='text-3xl font-bold tracking-[.5em]'>CATEGORIES</h2>
            </div>  
            <div className='w-1/5 fire'>
                <img className='w-40 ml-14' src={fire} alt='n/a' />
                <h4 className='text-2xl font-bold mb-6'>Fire Suppression</h4>
                <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean blandit
                </p>
                
            </div>  
            <div className='w-1/5'>
                <img className='w-40 ml-14' src={firstAid} alt='n/a' />
                <h4 className='text-2xl font-bold mb-6'>First Aid</h4>
                <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean blandit
                </p>
            </div>  
            <div className='w-1/5'>
                <img className='w-40 ml-14' src={saftyApperal} alt='n/a' />
                <h4 className='text-2xl font-bold mb-6'>Safty Apparel</h4>
                <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean blandit
                </p>
            </div>  
            <div className='w-1/5'>
            <img className='w-44 ml-14' src={visibilityAid} alt='n/a' />
                <h4 className='text-2xl font-bold mb-6'>Visibility Aids</h4>
                <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean blandit
                 </p>
                 <button className='product-button absolute flex justify-end ml-32 bottom-0'>View More</button>
            </div>            
        </div>
    );
};

export default Product;