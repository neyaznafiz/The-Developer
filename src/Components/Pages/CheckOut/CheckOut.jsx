import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    // const { Id } = useParams()


    const handleCheckout = () => {
        toast.success('Thank you for your checkout')
    }
    return (
        <div>
            {/* <p>This is service detail : {Id}</p> */}

            <button onClick={handleCheckout} className='coustom-shadow'>Check Out</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;