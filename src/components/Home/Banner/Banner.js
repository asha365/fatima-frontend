import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full slider">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} alt='n/a' className="w-full" />
          <div className="absolute transform -translate-y-1/2 top-1/2 slider-text">
            <h1 className='text-6xl font-bold text-white tracking-[.28em]'>
              PROTECTION
            </h1>
            <br/>
            <h1 className=' slider-2nd-title text-white tracking-[.28em]'>
                <span>IS WHAT WE DO BEST</span>
            </h1>
            <button className='slider-button'>Learn More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt='n/a' className="w-full" />
          <div className="absolute transform -translate-y-1/2 top-1/2 slider-text">
            <h1 className='text-6xl font-bold text-white tracking-[.28em]'>
              PROTECTION
            </h1>
            <br/>
            <h1 className='text-4xl slider-2nd-title text-white tracking-[.28em]'>
                <span>IS WHAT WE DO BEST</span>
            </h1>
            <button className='slider-button'>Learn More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt='n/a' className="w-full" />
          <div className="absolute transform -translate-y-1/2 top-1/2 slider-text">
            <h1 className='text-6xl font-bold text-white tracking-[.28em]'>
              PROTECTION
            </h1>
            <br/>
            <h1 className='text-4xl slider-2nd-title text-white tracking-[.28em]'>
                <span>IS WHAT WE DO BEST</span>
            </h1>
            <button className='slider-button'>Learn More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
      
      </div>
    );
};

export default Banner;