import React from 'react';

const JeweleryCard = ({category3}) => {
    return (
        
             <div className='col-md-3'>
            <div className="card m-2 p-2 text-center " >
                <img src={category3.image}  height={200} alt="" />
                <h2>{category3.category}</h2>
                <h2>${category3.price}</h2>

            </div>
            
        </div>
    );
}

export default JeweleryCard;
