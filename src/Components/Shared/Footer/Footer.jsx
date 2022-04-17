import React from 'react';

const Footer = () => {
    return (
        <div className='border'>
            <p className='py-8 text-center font-semibold'>Copyright © {(new Date().getFullYear())} The Developer</p>
        </div>
    );
}; 

export default Footer;