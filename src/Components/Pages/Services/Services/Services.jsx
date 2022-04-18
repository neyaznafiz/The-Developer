import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useServicesHook from '../../../Shared/useServicesHook/useServicesHook';
import Service from '../Service/Service';


const Services = () => {

    const [services] = useServicesHook()


    return (
        <div id='services'>

            <h2 className='text-center lg:pt-20 md:pt-10 pt-5 lg:text-4xl md:text-xl text-lg font-bold border-b-2 lg:mx-80 md:mx-72 mx-10'>MY SERVICES</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 lg:ml-48 lg:py-20 md:py-10 py-5'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        className="" ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;