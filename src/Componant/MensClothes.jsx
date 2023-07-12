import React from 'react';
import MensClothesCard from './MensClothesCard';

const MensClothes = ({category1}) => {
    return (
        <div className='container' >
            <div className="row">
            
                
                     {
                        category1.map((category1)=>{
                            return    <MensClothesCard  category1={category1} />
                        })
                     }

            </div>
           
        </div>
    );
}

export default MensClothes;
