import React, { useRef } from 'react';
import '../Style/Style.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import SocialSignUp from '../SocialSignUp/SocialSignUp';

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleLogIn = event => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    signInWithEmailAndPassword(email, password)


  }

  return (
    <div className='pt-24 pb-40 bg-slate-300'>

      <h2 className='font-semibold text-3xl text-center py-20 font-serif'><span className='text-5xl'>T</span>he Developer</h2>

      <div className='flex justify-evenly'>

        <div>

          <form onSubmit={handleLogIn} className='grid gap-3 px-3 pt-8 pb-2 h-72 w-72 coustom-shadow'>


            
              <input ref={emailRef} type="email" name="email" placeholder='Email' id="email" required className='border px-2 rounded-md coustom-shadow outline-none text-white mt-14' />

              <input ref={passwordRef} type="password" name="password" placeholder='Password' id="password" required className='border px-2 rounded-md coustom-shadow outline-none text-white' />

              <input type="submit" value='Log In' className='text-lg font-semibold opacity-80 text-white mb-8' />
            

          </form>

          <div className='pt-2 font-medium text-center'>
            Are you new here ? <Link to='/signup' className='hover:border-b-4 border-black px-1' >Sign Up </Link>
          </div>
        </div>

        <div className=''>
          <SocialSignUp></SocialSignUp>
        </div>

      </div>


    </div>
  );
};

export default Login;