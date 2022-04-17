import React from 'react';

const Service = ({ service }) => {

    const { name, price, img, info } = service

    console.log(service);

    return (
        <div>
            <p>{name}</p>

        </div>
    );
};

export default Service;