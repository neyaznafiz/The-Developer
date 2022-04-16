import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const SignUp = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, errorForUpdateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate()


    const navigateLogin = event => {
        navigate('/login')
    }

    let errorElement
    if (error) {
        errorElement = <div className='border border-danger pt-3 mb-3 col-5 mx-auto text-bold fw-bold' style={{ fontFamily: 'monospace' }}>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
    //     navigate('/home')
    console.log('user', user);
    }


    const handleSignUp = async event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName: name  });
           alert('Updated profile');
           navigate('/')
    
    }


    return (
        <div>
            <div>
                Please SignUp
            </div>

            <div>

                <form onSubmit={handleSignUp} className='grid'>

                    <input type="text" name='name' placeholder='Name' required className='border' />

                    <input type="email" name="email" placeholder='Email' id="" required className='border' />

                    <input type="password" name="password" placeholder='Password' id="" required className='border' />

                    <input type="password" name="confirm-password" placeholder='Confirm Password' id="" required className='border' />

                    <input type="submit" value='Sign Up' />

                </form>
                <div>
                    Already have an account ? <Link to='/login' onClick={navigateLogin}>Login</Link>
                </div>
            </div>

            <div className='border'>
                <SocialSignUp></SocialSignUp>
            </div>
        </div>
    );
};

export default SignUp;