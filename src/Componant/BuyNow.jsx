import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {  useParams , Link } from 'react-router-dom';

const BuyNow = ({addproduct}) => {

    const[product,setproduct] = useState([])
    const params=useParams()
    const getproduct= async ()=>{
        const response= await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setproduct(response.data)
    }
      useEffect(()=>{
        getproduct()
      })
      
    return (
                
      
        <div className='container'>
            
            <div className="row">
                <div className="col-md-6 ">
                   <div className=" py-3 text-center p-2 mt-3 m-2 " >
                   <img src={product.image} className='w-75'  height={300} alt="" />
                   </div>
                </div>
                <div className="col-md-6  py-5 ">
                        <h2>  title :  {product.title} </h2>
                        <h3> category :  {product.category} </h3>
                        <h2>  price :  {product.price}$ </h2>
                        <p> description :  {product.description} </p>
                        <Link  to='' className='btn btn-outline-dark m-2 ' onClick={()=>addproduct(product)}      >Add to Card    </Link>
                    
   
                </div>
            </div>
          
         <div>
       
         </div>
        </div>

                


    );
}

export default BuyNow;
