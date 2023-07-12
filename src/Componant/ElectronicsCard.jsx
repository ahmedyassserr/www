import React from 'react';



const ElectronicsCard = ({category4}) => {
   

    return (
        <div className='col-md-3'>
        <div className="card m-2 p-2 text-center " >
            <img src={category4.image}  height={200} alt="" />
            <h2>{category4.category}</h2>
            <h2>${category4.price}</h2>
                
        </div>
        
    </div>
    );
}

export default ElectronicsCard;
