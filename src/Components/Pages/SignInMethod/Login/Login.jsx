import React, { useRef } from 'react';
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
    <div>

      <div>
        Please SignUp
      </div>

      <div>
        <form onSubmit={handleLogIn} className='grid'>

          <input ref={emailRef} type="email" name="email" placeholder='Email' id="" required className='border' />

          <input ref={passwordRef} type="password" name="password" placeholder='Password' id="" required className='border' />

          <input type="submit" value='Log In' />

        </form>
      </div>

      <div>
        Are you new here ? <Link to='/Signup'>Sign Up</Link>
      </div>

      <div>
        <SocialSignUp></SocialSignUp>
      </div>
    </div>
  );
};

export default Login;