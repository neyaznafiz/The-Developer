import React from 'react';
import { Link } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';
import {GrServicePlay} from 'react-icons/gr';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillJournalBookmarkFill} from 'react-icons/bs';
import {RiLoginCircleLine} from 'react-icons/ri';

const Header = () => {
    return (
        <nav className=' px-10 '>

            <div className='flex justify-between'>

                <div className='pt-5'>
                    <Link to='/' className='border-l rounded-bl-md border-b px-2 py-2 font-semibold'><span className='text-3xl font tracking-tighter'>T</span>HE DEVELOPER</Link>
                </div>

                <div className='flex gap-11'>
    
                    <CoustomLink to='/services' className='px-2 py-1'><GrServicePlay className='text-2xl'></GrServicePlay></CoustomLink>
                    <CoustomLink to='/checkout' className='px-2 py-1'> <FiShoppingBag className='text-2xl'></FiShoppingBag> </CoustomLink>
                    <CoustomLink to='/blogs' className='px-2 py-1'> <BsFillJournalBookmarkFill className='text-2xl'></BsFillJournalBookmarkFill> </CoustomLink>
                    <CoustomLink to='/signup' className='px-2 py-1'> <RiLoginCircleLine className='text-2xl'></RiLoginCircleLine> </CoustomLink>

                </div>

                    <div className='pt-7'>
                    <Link to='/about' className='px-2 py- border-r border-b rounded-br-md font-semibold '>ABOU <span className='text-3xl tracking-tighter'>T</span></Link>
                    </div>
                    
            </div>

        </nav>
    );
};

export default Header;