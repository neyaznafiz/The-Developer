import React from 'react';
import useServicesHook from '../../../Shared/useServicesHook/useServicesHook';
import Services from '../../Services/Services/Services';
import Head from '../Head/Head';

const Home = () => {

    return (
        <div>
            <Head></Head>
           <Services></Services>
        </div>
    );
};

export default Home;