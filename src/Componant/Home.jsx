import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

    return (

        
        <div className='ahmed'>
        
            <div className="container">
                <div className="row">
                      <div className="col-12 m-auto text-center py-3  medo ">
                        <Link to="/" className='btn btn-outline-dark  '  >ALL</Link>
                     <Link to="MensClothes" className='btn btn-outline-dark  '  >Mens Clothes</Link>
                         <Link to="WomensClothes" className='btn btn-outline-dark  '  >Womens clothes</Link>
                       <Link to="Jewelery" className='btn btn-outline-dark   '  >Jewelery</Link>
                        <Link to="Electronics" className='btn btn-outline-dark   '  >Electronics</Link>
                        </div>
                    </div>
                </div>

            </div>
            


    );
}

export default Home;
