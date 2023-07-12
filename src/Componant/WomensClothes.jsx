import React from 'react';
import WomenCard from './WomenCard';

const WomensClothes = ({category2}) => {
    return (
        <div className='container'>
            <div className="row">
            {
                category2.map((category2)=>{
                    return <WomenCard  category2={category2}  />

                })
            }
            </div>
         
        </div>
    );
}

export default WomensClothes;
