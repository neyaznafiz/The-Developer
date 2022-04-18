import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, price, img, info } = service

    const navigate = useNavigate()

    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`)
    }

    return (
        <div className=''>

            <div className=''>

                <div className='border services-shadow pb-5 w-72 px-10 lg:px-0 md:px-0'>

                    <img src={img} alt="" className='h-60 rounded-3xl' />

                    <div className='text-center py-2'>
                        <h2 className='font-semibold text-xl'>Service:{name}</h2>
                        <p className='font-semibold'>Price: ${price}</p>
                        <p className='px-3'>{info.slice(0, 49)}....</p>

                        <div className='mt-4 w-7/12 mx-auto'>
                            <button onClick={() => navigateToCheckout(id)} className='rounded-full flex pl-3 pr-2 py-2 text-center text-white coustom-shadow opacity-80 hover:opacity-100'>ADD TO CHECKOUT</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Service;