import React, { useEffect, useState } from 'react';
import useServicesHook from '../../../Shared/useServicesHook/useServicesHook';
import Services from '../Services/Services';

const Service = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/neyaznafiz/API-developer-data/main/theDeveloprData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            {
                services.map(service => <Services

                    key={service.id}
                    service={service}

                ></Services>)
            }
        </div>
    );
};

export default Service;