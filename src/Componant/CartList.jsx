import React from 'react';


const CartList = ({cart}) => {
       
    return (
        <div>
            {
                cart.map((cartiems,cartindex)=>{
                    return <div className="container">
                            <div className="card  shadow p-3 mb-5 bg-body-tertiary rounded py-4 mt-3  ">

                        <img src={cartiems.image} width={100}  alt="" />
                        <h2>{cartiems.title} </h2>
                        <br />
                        <div className='d-flex  '>              
                             <br />
                          <h5>the price of one piece: {cartiems.price}$ </h5>
                        </div>
                    </div>
                    </div>
                   
                })
            }
            <p  className='text-center  shadow p-3 mb-5 bg-body-tertiary text-black rounded' > Total : $
                {
                    cart.map(item=>item.price * item.quantity).reduce((total,value)=>total+value,0)
                }
            </p>
        </div>
    );
}

export default CartList;
