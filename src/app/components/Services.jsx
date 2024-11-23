import React from 'react';
import { products } from '../lib/fakedata';
import Link from 'next/link';

const Services = async() => {

    console.log(products);
    
    return (
        <div>
            {
                products.map( (item ) => <div> 
                    
                    <Link href={`product/${item._id}`}>  
                    {item.title} 
                    </Link>
                 </div> )
            }
        </div>
    );
};

export default Services;