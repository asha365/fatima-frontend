import React from 'react';
import TopHeader from '../components/TopHeader/TopHeader';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;