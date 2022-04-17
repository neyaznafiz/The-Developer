import { useEffect } from 'react';
import { useState } from 'react';

const useServicesHook = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch(`https://raw.githubusercontent.com/neyaznafiz/API-developer-data/main/theDeveloprData.json`)
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])

    return [services, setServices]
};

export default useServicesHook