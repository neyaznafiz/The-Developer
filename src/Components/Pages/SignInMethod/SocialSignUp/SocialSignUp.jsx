import React from 'react';
import '../../../Style/Style.css'
import auth from '../../../../Firebase/firebase.init'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialSignUp = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogel] = useSignInWithGoogle(auth);

    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    const [signInWithTwitter, userFaceTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);

    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    if (errorGoogel || errorFacebook || errorTwitter) {
        toast.error(<>{errorGoogel?.message}, {errorFacebook?.message}, {errorTwitter?.message}</>)
    }



    if (loadingGoogle || loadingFacebook || loadingTwitter) {
        return <Loading className=''></Loading>
    }

    if (userGoogle || userFacebook || userFaceTwitter) {
        toast.success(<p>You are successfully LogedIn</p>)

        navigate(from, { replace: true });

    }

    return (
        <div>

            <div className='coustom-shadow py-14 px-4 grid h-72 w-72'>

                <div>
                    <button onClick={() => signInWithGoogle()} className=' rounded-full flex pl-6 pr-5 py-2 text-white coustom-shadow opacity-80 hover:opacity-100'> <AiFillGoogleCircle className='mt-1 mr-2'></AiFillGoogleCircle> Continue witth google</button>
                </div>

                <div className='my-3'>
                    <button onClick={() => signInWithTwitter()} className=' rounded-full flex pl-6 pr-5 pr-9 py-2 text-white coustom-shadow opacity-80 hover:opacity-100 '> <AiFillTwitterCircle className='mt-1 mr-2'></AiFillTwitterCircle> Continue witth Twitter</button>
                </div>

                <div>
                    <button onClick={() => signInWithFacebook()} className=' rounded-full flex pl-6 pr-7 py-2 text-white coustom-shadow opacity-80 hover:opacity-100'> <BsFacebook className='mt-1 mr-2'></BsFacebook> Continue witth Facebook</button>
                </div>

            </div>


            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialSignUp;