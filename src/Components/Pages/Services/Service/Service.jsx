import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, price, img, info } = service

    console.log(service);

    return (
        <div className=''>

                    <div className=''>

                    <div className='border services-shadow pb-5'>

                    <img src={img} alt="" className='h-48 rounded-3xl' />
                    
                    <div className='text-center py-2'>
                    <h2>Service:{name}</h2>
                    <p>Price: ${price}</p>
                    <p>{info}</p>

                    <div className='mt-4 w-4/12 mx-auto'>
                    <Link to='/checkOut' className='rounded-full flex pl-3 pr-2 py-2 text-center text-white coustom-shadow opacity-80 hover:opacity-100'>CHECKOUT</Link>
                    </div>
                    </div>

                    </div>

                    </div>
         

        </div>
    );
};

export default Service;