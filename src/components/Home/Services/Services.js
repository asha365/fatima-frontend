import React from 'react';
import './Services.css';
import { FaHandHoldingUsd, FaRegWindowRestore, FaWrench } from "react-icons/fa";
const Services = () => {
    return (
        <div className="carousel my-24 services">
        <div className="carousel-item w-1/3 sales-image">
            <div>
                <span className='sales-icon mb-8'><FaHandHoldingUsd className='icon1 mb-8'></FaHandHoldingUsd></span>
                <h2 className='text-4xl font-bold mb-4'>Sales</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aenean blandit auctor 
                condimentum. <br/> Integer lobortis lobortis temp</p>
            </div>
        </div> 

        <div className="carousel-item w-1/3 rental-image">
            <div>
                <span className='sales-icon mb-8'><FaRegWindowRestore className='icon2 mb-8'></FaRegWindowRestore></span>
                <h2 className='text-4xl font-bold mb-4'>Rental</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aenean blandit auctor 
                condimentum. <br/> Integer lobortis lobortis temp</p>
            </div>
        </div>

        <div className="carousel-item w-1/3 service-image">
            <div>
                <span className='service-icon mb-8'><FaWrench className='icon3 mb-8'></FaWrench></span>
                <h2 className='text-4xl font-bold mb-4'>Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aenean blandit auctor 
                condimentum. <br/> Integer lobortis lobortis temp</p>
            </div>
        </div>

        
        </div>
    );
};

export default Services;