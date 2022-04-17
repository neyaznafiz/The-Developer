import React from 'react';
import web2 from '../../../../Images/web2.png'
const Head = () => {
    return (
        <div className='bg-slate-300'>

            <div className='flex justify-evenly'>
                <div>

                    <div className='py-32'>
                        <h2 className='text-3xl font-semibold font-mono'><span className='text-6xl'>G</span>et what you need.</h2>
                    </div>

                </div>

                <div>
                    <img src={web2} alt="" className='rounded-full opacity-75 ' />
                </div>
            </div>

        </div>
    );
};

export default Head;