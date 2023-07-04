import React from 'react';
import protectionCap from '../../../../assets/images/protection-cap.png';
import './ServiceInfo.css';

const ServiceInfo = () => {
    return (
        <div className="card card-side bg-base-100 flex-col lg:flex-row h-152 my-24">
        
        <div className="card-body about-card w-1/2">
            <h2 className="text-4xl card-headline">New movie is released!</h2>
            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                 the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                 of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="justify-left">
            <button className="btn btn-primary about-button1">Learn More</button>
            <button className="btn btn-primary about-button2">Get in Touch</button>
            </div>
        </div>

        <div className='w-1/2 about-image'>
            <figure><img src={protectionCap} alt="Movie"/></figure>
        </div>

        </div>
    );
};

export default ServiceInfo;