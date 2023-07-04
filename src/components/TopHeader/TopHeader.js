import React from 'react';
import './TopHeader.css';
import { FaFacebookF, FaInstagramSquare,FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const TopHeader = () => {
    return (
        <section>
           <div className='top-header'>
                <div className='social-link'>

                </div>
                <div className='contact-info'>
                    <div className='social-icon-top'>
                            <span><FaFacebookF></FaFacebookF></span>
                            <span><FaInstagramSquare></FaInstagramSquare></span>
                            <span><FaLinkedinIn></FaLinkedinIn></span>
                    </div>
                </div>
           </div>

         


       
        </section>
    );
};

export default TopHeader;