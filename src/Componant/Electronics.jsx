import React from 'react';
import ElectronicsCard from './ElectronicsCard';

const Electronics = ({category4}) => {
    return (
        <div className='container'>
            <div className="row">
                {
                    category4.map((category4)=>{
                        return  <ElectronicsCard  category4={category4} />
                    })
                }
            </div>
           
        </div>
    );
}

export default Electronics;

