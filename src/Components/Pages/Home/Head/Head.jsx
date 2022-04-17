import React from 'react';
import web3 from '../../../../Images/web3.jpg'
const Head = () => {
    return (
        <div className='bg-slate-300'>

            <div className='flex justify-evenly items-center'>
                <div className='item-none'>
                    <div className='py-32 mx-auto w-6/12'>
                        <h2 className='text-3xl font-semibold font-serif'><span className='text-6xl text-slate-600'>G</span>et what you need.</h2>
                        <p className='text-md font-medium ml-3 '>
                            THIS IS NEYAZ MOBALIK NAFIZ. First of all, I am very thankful to you for visiting my website. I am a Front-end Developer. If you are searching a wonderful developer to create your wonderful website, congratulations! you are in the right place. Here you can get your need and fulfill your hope.
                            <br />
                            Thank you.
                        </p>
                    </div>
                </div>

                <div className='w-8/12'>
                    <img src={web3} alt="" className='rounded-full h-72 my-32 opacity-90 img-shadow' />
                </div>
            </div>

        </div>
    );
};

export default Head;