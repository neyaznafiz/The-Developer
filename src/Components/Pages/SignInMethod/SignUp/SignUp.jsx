import '../../../Style/Style.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialSignUp from '../SocialSignUp/SocialSignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorForUpdateProfile] = useUpdateProfile(auth);


    const navigate = useNavigate()


    const navigateLogin = () => {
        navigate('/login')
    }


    if (errorForUpdateProfile || error) {
        toast.error(<>{errorForUpdateProfile.message}, {error?.message}</>)
    }


    if (loading || updating) {
        return <div className='mx-40 my-32'>
            <Loading></Loading>
        </div>
    }

    const handleEmail = event => {

        const emailRegx = /\S+@\S+\.\S+/
        const validEmail = emailRegx.test(event.target.value)

        if (validEmail) {
            setEmail(event.target.value)
        }
        else {
            toast.error('Please set a valid Email')
        }
    }

    const handlePassword = event => {

        const passRegx = /.{6,}/
        const validPass = passRegx.test(event.target.value)

        if (validPass) {
            setPassword(event.target.value)
        }
        else{
            toast.error('Please set atlest 6 character in your password ')
        }

    }




    const handleSignUp = async event => {
        event.preventDefault()


        await createUserWithEmailAndPassword(email, password)

        await updateProfile();
        alert('Profile Updated');
        navigate('/')

    }


    return (
        <div className='pt-4 lg:pt-20 md:pt-18 lg:pb-36 md:pb-30 pb-10 bg-slate-300'>


            <h2 className='font-semibold text-3xl text-center lg:py-20 font-serif'><span className='text-5xl'>S</span>ignUp Please</h2>

            <div className='grid lg:flex lg:justify-evenly md:flex md:justify-evenly'>

                <div>

                    <form onSubmit={handleSignUp} className='grid gap-3 px-3 pt-8 pb-2 h-72 w-72 coustom-shadow'>

                        <input type="text" name='name' placeholder='Name' required className='border py-1 px-2 rounded-md coustom-shadow outline-none text-white' />

                        <input onBlur={handleEmail} type="email" name="email" placeholder='Email' id="email" required className='border py-1 px-2 rounded-md coustom-shadow outline-none text-white' />

                        <input onBlur={handlePassword} type="password" name="password" placeholder='Password' id="password" required className='border py-1 px-2 rounded-md coustom-shadow outline-none text-white' />

                        <input type="password" name="confirm-password" placeholder='Confirm Password' id="" required className='border py-1 px-2 rounded-md coustom-shadow out outline-none text-white' />

                        <input type="submit" value='Sign Up' className='text-lg font-semibold opacity-80 hover:opacity-100  text-white' />

                    </form>

                    <div className='pt-2 font-medium text-center'>
                        Already have an account ? <Link to='/login' className='hover:border-b-4 border-black px-1' onClick={navigateLogin}>Log In </Link>
                    </div>
                </div>

                <div className=''>
                    <SocialSignUp></SocialSignUp>
                </div>

            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;