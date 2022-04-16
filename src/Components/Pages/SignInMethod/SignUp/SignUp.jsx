import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const SignUp = () => {
    return (
        <div>
            <div>
                Please SignUp
            </div>

            <div>

                <form className='grid'>

                    <input type="text" name='name' placeholder='Name' required className='border' />

                    <input type="email" name="email" placeholder='Email' id="" required className='border' />

                    <input type="password" name="password" placeholder='Password' id="" required className='border' />

                    <input type="password" name="confirm-password" placeholder='Confirm Password' id="" required className='border' />

                    <input type="submit" value='Sign Up' />

                </form>
                <div>
                    Already have an account ? <Link to='/login'>Login</Link>
                </div>
            </div>

            <div className='border'>
                <SocialSignUp></SocialSignUp>
            </div>
        </div>
    );
};

export default SignUp;