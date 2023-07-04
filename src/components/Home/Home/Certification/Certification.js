import React from 'react';
import certi1 from '../../../../assets/images/certificate.png';
import certi2 from '../../../../assets/images/certification2.png'
import './Certification.css';



const Certification = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="card w-96 bg-base-100 card-image">
                <figure className="px-10 pt-10">
                    <img src={certi1} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Certification</h2>
                    <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor. 
                    </p>
                    <div className="card-actions">
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 card-image">
                <figure className="px-10 pt-10">
                    <img src={certi2} alt="n/a" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Calibration</h2>
                    <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor. 
                    </p>
                    <div className="card-actions">
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>


        // <section className='flex'>
        //     <div className="card bg-base-100 rounded-none w-1/2">
        //     <figure><img className='h-96' src={certi1} alt="n/a" /></figure>
        //     <div className="card-body text-center">
        //         <h2 className="justify-center text-3xl text-gray-700 font-bold">Certification</h2>
        //         <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit auctor 
        //         condimentum. Integer lobortis lobortis temp Aenean blandit auctor 
        //         condimentum. Integer lobortis lobortis temp</p>
        //         <div className="card-actions justify-center">
        //         <button className='slider-button'>Learn More</button>
        //         </div>
        //     </div>
        //     </div>
            
        //     <div className="card bg-base-100 w-1/2">
        //     <figure><img className='h-96' src={certi2}  alt="n/a" /></figure>
        //     <div className="card-body text-center">
        //         <h2 className="justify-center text-3xl text-gray-700 font-bold">Calibration</h2>
        //         <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit auctor 
        //         condimentum. Integer lobortis lobortis temp Aenean blandit auctor 
        //         condimentum. Integer lobortis lobortis temp</p>
        //         <div className="card-actions justify-center">
        //         <button className='slider-button'>Learn More</button>
        //         </div>
        //     </div>
        //     </div>
        // </section>
    );
};

export default Certification;