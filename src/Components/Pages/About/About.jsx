import React from 'react';
import neyaz from '../../../Images/neyaz.jpeg'

const About = () => {
    return (
        <div>


            <div>

                <div>
                    <img src={neyaz} alt="" className='h-80 rounded-full'/>
                </div>

                <div>
                    <p>
                        Neyaz Nafiz
                    </p>
                </div>

            </div>

        </div>
    );
};

export default About;