import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import footerImg from '../../assets/images/logo.png';


const Footer = () => {
    return (
   
        <footer className='mt-24'>
        <div className='footer-head flex'>
            <div className='w-1/4'>
                <h1 className='text-4xl font-bold text-white text-center pt-4'>Newsletter</h1>
            </div>
            <div className='w-1/2 pt-6 text-white'>
                <small>Stay connected! Subscribe to our Newsletter to stay informed of all the latest products and services.</small>
            </div>
            <div className='w-1/5 mt-4'>
                <button className="btn btn-primary footer-button">Sign Up</button>
            </div>
        </div>
        <div className='footer-section'>
            <div className='w-1/3'>
                <p className='ml-10'>Office &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1161 40th Avenue NE <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Calgary, Alberta T2E 6M9</p>
                <p className='mt-4'>Phone &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (403) 769 - 1799  </p>   
                <small className='text-red ml-20'>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;info-orionsafty.ca  </small>      
            </div>
            <div className='w-1/3'>
            <p className='ml-10'>Weekdays &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8:00 am - 4:30pm</p>
                <p className='mb-6'>Weekends &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Call for hours </p>   
                <span className='text-white flex'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Social Media <small className='flex mt-2 social-icon'><FaFacebookF className='face-icon'></FaFacebookF><FaInstagram className='instra-icon'></FaInstagram><FaLinkedinIn className='linkedin-icon'></FaLinkedinIn></small></span>   
            </div>
            <div className='w-1/2'>
                <img src={footerImg} alt='n/a' />
                
            </div>
        </div>
        <div className='footer-end flex'>
            <div className='w-1/5 mt-3'>
            <small>Powered by Instalogic Inc.</small>
            </div>
            <div className='w-1/2 pt-6 text-white'>
            </div>
            <div className='w-1/5 mt-3'>
                <small>&copy; 2020  Orion safty equipment Ltd.</small>
            </div>
        </div>
        </footer>


     
        
    );
};

export default Footer;