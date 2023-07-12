import React from 'react';

const MensClothesCard = ({category1}) => {
    return (
        <div className='col-md-3'>
           <div className="card p-2 m-2 ">
           <img src={category1.image} height={200}  alt="" />
           <h1 className='text-center' >{category1.category}</h1>
           <h1 className='text-center' >{category1.price}</h1>
           </div>
        
       
        </div>
    );
}

export default MensClothesCard;
