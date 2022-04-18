import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className='my-20'>
                <h2 className='text-center font-serif text-2xl border-b mx-96 text-shadow'>HAVE SOME INFORMATION FOR YOU</h2>
            </div>


            <div className='grid gap-5 pb-20'>
                <div>
                    <h2 className='text-xl bg-slate-300 py-2 text-center font-serif'>Why are you using firebase? What other options do you have to implement authentication?</h2>

                    <p className='text-center px-60 bg-slate-100 py-2'>
                        <span className='font-semibold'>Firebase</span> is used for mainly authentication. It is provided by Google. mainly we use firebase for authentication. it is an easy way to use authentication. and we also can use firebase for hosting and analyzing our website. Have more options for authentication Alternativ firebase, like Auth0, Okta, also have authentication from Microsoft, etc.
                    </p>

                </div>

                <div>
                    <h2 className='text-xl bg-slate-300 py-2 text-center font-serif'>What other services does firebase provide other than authentication ?</h2>

                    <p className='text-center px-60 bg-slate-100 py-2'>
                        <span className='font-semibold'>Firebase</span> provide more option ither than authentication. Like firebase provide Hosting, Analysing wensite, Realtime Database, Storage.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl bg-slate-300 py-2 text-center font-serif'>Difference between authentication and authorization.</h2>

                    <p className='text-center px-48 bg-slate-100 py-2'>
                        <span className='font-semibold'>Authentication </span> is the prosses of determining whether something is true. if the user called any login system then when he gets permission to log in, this full prosses is authentication. Means is, the process of gate the permission to login.

                        <br />
                        <span className='font-semibold'>Authorization</span> is the process of permitting a user to log in. As an example, if a user wants to sign to a website with any social ID after calling the Signup system the social site permits them to log in. this is the authentication.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;