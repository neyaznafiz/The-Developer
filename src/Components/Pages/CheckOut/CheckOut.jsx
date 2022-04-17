import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const { Id } = useParams()


    const handleCheckout = () => {
toast('thank you for checkout')
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <p>This is service detail : {Id}</p>

            <button onClick={handleCheckout}>Check Out</button>

        </div>
    );
};

export default CheckOut;