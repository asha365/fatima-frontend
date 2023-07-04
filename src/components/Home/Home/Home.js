import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Certification from './Certification/Certification';
import Product from '../Product/Product';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Social from './Social/Social';

const Home = () => {

    const menuItems = <>
        <li><Link to='/home'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/home'>PRODUCTS</Link></li>
        <li><Link to='/home'>RENTALS</Link></li>
        <li><Link to='/home'>SERVICES</Link></li>
        <li><Link to='/home'>RESOURCES</Link></li>
        <li><Link to='/home'>CONTACT</Link></li>
    </>
    return (
   <section>

    <div className="navbar header-navbar navigation h-12 font-semibold text-xs">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-bar  menu-compact font-bold dropdown-content mt-3 p-2 shadow rounded-box w-52">
                {menuItems}
            </ul>
            </div>
            <a href='/'  className="btn btn-ghost normal-case text-xl logo-text">
                <img className='logo' src={logo} alt='n/a' />
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-bar menu-horizontal px-1">
                {menuItems}
            </ul>
        </div>
    </div>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Certification></Certification>
    <Product></Product>
    <ServiceInfo></ServiceInfo>
    <Social></Social>
   </section>

    );
};

export default Home;