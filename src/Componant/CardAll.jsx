import {React}  from 'react';
import { Link  } from 'react-router-dom';

const CardAll = ({products}) => {  
    return (          
                <div className="col-md-3  ">
                    <div className="card p-2 m-2 text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src={products.image} alt="" height={200}  className='text-center w-50 m-auto '/>
                    <h1 className='h-50 ' >{products.category}    </h1>
                    <h2>${products.price} </h2>
                <Link to={`BuyNow/${products.id}`}  className='btn btn-outline-dark' >Buy Now  </Link>
                    </div>
                    </div>
           
           
    );
}

export default CardAll;
