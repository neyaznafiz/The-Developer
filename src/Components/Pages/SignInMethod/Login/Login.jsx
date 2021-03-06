import React, { useRef } from 'react';
import '../../../Style/Style.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import SocialSignUp from '../SocialSignUp/SocialSignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  const location = useLocation()
  let from = location.state?.from?.pathname || "/";


  if (error) {
    toast.error('Please set a valid email and password')
  }

  if (loading || sending) {
    return <div className='mx40 my-32'>
      <Loading></Loading>
    </div>
  }

  if (user) {
    navigate(from, { replace: true });
  }


  const handleLogIn = event => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    signInWithEmailAndPassword(email, password)

  }

  const handleResetPassword = async event => {
    event.preventDefault()
    const email = emailRef.current.value
    if (email) {
      await sendPasswordResetEmail(email)
      toast.success('Email Sent')
    }
    else {
      toast.error('Please set your email')
    }
  }

  return (
    <div className='pt-20 pb-36 bg-slate-300'>

<ToastContainer />

      <h2 className='font-semibold text-3xl text-center py-20 font-serif'><span className='text-5xl'>L</span>ogIn Please</h2>

      <div className='grid lg:flex lg:justify-evenly md:flex md:justify-evenly'>

        <div>

          <form onSubmit={handleLogIn} className='grid gap-3 px-3 pt-8 pb-2 h-72 w-72 coustom-shadow'>
            
            <input ref={emailRef} type="email" name="email" placeholder='Email' id="email" required className='border px-2 rounded-md coustom-shadow outline-none text-white mt-14' />

            <input ref={passwordRef} type="password" name="password" placeholder='Password' id="password" className='border px-2 rounded-md coustom-shadow outline-none text-white' />

            <input type="submit" value='Log In' className='text-lg font-semibold opacity-80 hover:opacity-100 text-white mb-' />

            <input onClick={handleResetPassword} type="submit" value='Forget Password ?' className='text-lg font-semibold opacity-80 hover:opacity-100  text-white mb-' />
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