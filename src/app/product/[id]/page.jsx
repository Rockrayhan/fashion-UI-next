import { products } from '@/app/lib/fakedata';
import React from 'react';

const page = ({params}) => {
    console.log(params.id);
    
    const product = products.find((item) => item._id === params.id ) ;
    console.log(product);
    
    
    return (
        <div>
            <h1> This is product Details Page </h1>
            <h1 className='text-3xl '> {product.title} </h1>
        </div>
    );
};

export default page;