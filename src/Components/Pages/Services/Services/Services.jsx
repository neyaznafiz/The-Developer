import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useServicesHook from '../../../Shared/useServicesHook/useServicesHook';
import Service from '../Service/Service';


const Services = () => {

    const [services] = useServicesHook()

    return (
        <div id='service'>

    <p>{services.length}</p>

    {
        services.map(service => <Service
        key={service.id}
        service={service}
        ></Service>)
    }

        </div>
    );
};

export default Services;