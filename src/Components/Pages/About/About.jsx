import React from 'react';
import '../../Style/Style.css'
import neyaz from '../../../Images/neyaz.jpeg'

const About = () => {
    return (
        <div className=''>


            <div className='w-full md:w-full lg:w-full'>

                <div className='bg-slate-300 py-8 lg:py-16 lg:flex lg:justify-center'>
                    <img src={neyaz} alt="" className='h-60 mx-auto md:h-80 lg:h-80 rounded-full border border-slate-300 my-img-shadow' />
                </div>

                <div className='bg-slate-200 py-5 lg:py-4'>

                    <h2 className='text-xl lg:text-4xl sm:text-md font-serif font-semibold text-center'>NEYAZ MOBALIK NAFIZ</h2>

                </div>

                <div className='bg-slate-100 text-center py-4'>
                <p className='px-5 lg:px-52 text-lg'>
                    I am a Front-end Developer. Generally, I am good at HTML, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND, and REACT. I am comfortable in REACT AND TAILWIND. I have done some projects. My background is in Computer Science and Technology and I am still studying. My future vision is I want to see myself in the future as a great programmer. My interest is in machine learning and ethical hacking. I hope, my hard work takes me to my goal.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default About;