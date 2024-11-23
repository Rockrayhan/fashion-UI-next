import React from 'react';
import Services from '../Services';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-primary'> This is Home page </h1>

            <Image 
  src="/assets/images/big_deal_1.png" 
  alt="kokha" 
  width={400} 
  height={100} 
  priority 
/>

            <button className="btn btn-primary">Warning</button>

                <Services/>

        </div>
    );
};

export default HomePage;