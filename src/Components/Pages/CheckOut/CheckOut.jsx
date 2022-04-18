import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const { Id } = useParams()


    const handleCheckout = () => {
        toast.success('Thank you for your checkout')
    }
    return (
        <div className='coustom-shadow w-6/12 grid mx-auto py-20 mb-80'>
            {
                Id ?
               <>
                <p className='text-center text-2xl font-semibold pt-20 text-white'>This is the service code you selected </p>
            <p className='text-center text-4xl font-semibold text-white'>- {Id} -</p>
               </>
            :
            ''
            }

          <div className='py-10 flex justify-center'>
                 
          {
              Id ?
              <button onClick={handleCheckout} className='coustom-shadow px-3 py-2 text-white font-semibold'>Check Out</button>
              :
              <div>
              <p className='text-white py-3 text-xl'>After select a service, your ' Checkout button ' will be enable.</p>
              <div className='flex justify-center'>
              <Link to='/home/services' className='coustom-shadow px-3 py-1 text-white font-semibold'>Go to Service</Link>
              </div>
              </div>
          }    
          </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;