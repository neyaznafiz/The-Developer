import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-400'>
            <p className='py-7 text-center text-white font-semibold'>Copyright © {(new Date().getFullYear())} The Developer</p>
        </div>
    );
}; 

export default Footer;