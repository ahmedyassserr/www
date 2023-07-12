import React from 'react';

const WomenCard = ({category2}) => {
    return (
        <div className='col-md-3'>
            <div className="card m-2 p-2 text-center " >
                <img src={category2.image}  height={200} alt="" />
                <h2>{category2.category}</h2>
                <h2>${category2.price}</h2>
            </div>
            
        </div>
    );
}

export default WomenCard;
