import React from 'react';
import JeweleryCard from './JeweleryCard';

const Jewelery = ({category3}) => {
    return (
        <div className='container'>
            <div className="row">
                {
                    category3.map((category3)=>{
                                 return       <JeweleryCard  category3={category3} />
       
                    })
                }
            </div>
        </div>
    );
}

export default Jewelery;
