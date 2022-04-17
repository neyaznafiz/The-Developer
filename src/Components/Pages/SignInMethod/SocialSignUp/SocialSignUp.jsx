import React from 'react';
import '../Style/Style.css'
import auth from '../../../../Firebase/firebase.init'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';

const SocialSignUp = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogel] = useSignInWithGoogle(auth);

    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    const [signInWithTwitter, userFaceTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);


    if (errorGoogel || errorFacebook || errorTwitter) {
        return (
            <div>
              <p>Error: { errorGoogel?.message } { errorFacebook?.message } { errorTwitter?.message }</p>
            </div>
          );
    }
  


if (loadingGoogle || loadingFacebook || loadingTwitter) {
  return <p>Loading...</p>
}

    return (
        <div className='coustom-shadow py-14 px-4 grid h-72 w-72'>

            <div>
                <button onClick={() => signInWithGoogle()} className=' rounded-full flex pl-6 pr-5 py-2 text-white coustom-shadow'> <AiFillGoogleCircle className='mt-1 mr-2'></AiFillGoogleCircle> Continue witth google</button>
            </div>

            <div className='my-3'>
                <button onClick={() => signInWithTwitter()} className=' rounded-full flex pl-6 pr-5 pr-9 py-2 text-white coustom-shadow'> <AiFillTwitterCircle className='mt-1 mr-2'></AiFillTwitterCircle> Continue witth Twitter</button>
            </div>

            <div>
                <button onClick={() => signInWithFacebook()} className=' rounded-full flex pl-6 pr-7 py-2 text-white coustom-shadow'> <BsFacebook className='mt-1 mr-2'></BsFacebook> Continue witth Facebook</button>
            </div>

        </div>
    );
};

export default SocialSignUp;