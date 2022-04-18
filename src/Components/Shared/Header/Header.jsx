import React from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import '../../Style/Style.css'
import {GrServicePlay} from 'react-icons/gr';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillJournalBookmarkFill} from 'react-icons/bs';
import {FiLogIn} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user]=useAuthState(auth)

    const handleSignOut =()=>{
        signOut(auth)
    }

    // lg:border-b-4 md:border-b-4
    // lg:border-b-4 md:border-b-4 rounded-b-lg 
    

    return (
        <nav className='px-28 border-b border-slate-200  bg-white'>

            <div className='grid justify-center  lg:flex lg:justify-between'>

                <div className='pt-5 mx-auto lg:mx-0 lg:pl-0'>
                    <Link to='/' className='rounded-b-lg border-gray-500 px-2 py-2 font-semibold font-serif '><span className='text-3xl font tracking-tighter text-slate-500'>T</span>HE DEVELOPER</Link>
                </div>

                <div className='flex gap-11 lg:py-7 md:py-5 py-3'>
    
                    <Link  to='/home#services' className='px-2 py-1'><GrServicePlay className='text-2xl'></GrServicePlay></Link>

                    <Link to='/checkout' className='px-2 py-1'> <FiShoppingBag className='text-2xl'></FiShoppingBag> </Link>
                    
                    <Link to='/blogs' className='px-2 py-1'> <BsFillJournalBookmarkFill className='text-2xl'></BsFillJournalBookmarkFill> </Link>

                    {
                        !user ?
                        <Link to='/login' className='px-2 py-1'> <FiLogIn className='text-2xl '></FiLogIn> </Link>
                        :
                        <Link to='/' className='px-2 py-1' onClick={handleSignOut}> <FiLogOut className='text-2xl' ></FiLogOut> </Link>
                    }

                </div>

                    <div className='lg:pt-6 mb-6 lg:pb-0 text-center'>
                    <Link to='/about' className='px-2 pb-1 border-gray-500 font-semibold font-serif'>ABOU <span className='text-3xl tracking-tighter text-slate-500'>T</span></Link>
                    </div>
                    
            </div>

        </nav>
    );
};

export default Header;