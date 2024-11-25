import React from 'react';
import BigDealBanner from '../components/BigDealBanner';
import NewArrivals from '../components/NewArrivals';


const HomePage = () => {
    return (
        <div className='container'>
         <NewArrivals/>
         <BigDealBanner/>
        </div>
    );
};

export default HomePage;