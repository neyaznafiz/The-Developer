import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-300'>
            <p className='py-7 text-center font-semibold'>Copyright © {(new Date().getFullYear())} The Developer</p>
        </div>
    );
}; 

export default Footer;