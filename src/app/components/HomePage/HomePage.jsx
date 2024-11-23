import React from 'react';
import Services from '../Services';

const HomePage = () => {
    return (
        <div>
            <h1> This is Home page </h1>

            <button className="btn btn-warning">Warning</button>

                <Services/>

        </div>
    );
};

export default HomePage;