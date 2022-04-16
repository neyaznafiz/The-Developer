import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const Login = () => {
  return (
    <div>

<div>
                Please SignUp
            </div>

            <div>

                <form className='grid'>

                    <input type="email" name="email" placeholder='Email' id="" required className='border' />

                    <input type="password" name="password" placeholder='Password' id="" required className='border' />

                    <input type="submit" value='Log In' />

                </form>
                <div>
                    Are you new here ? <Link to='/Signup'>Sign Up</Link>
                </div>
            </div>

      <div>
        <SocialSignUp></SocialSignUp>
      </div>
    </div>
  );
};

export default Login;