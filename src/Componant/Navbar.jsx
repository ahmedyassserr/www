import {React} from 'react';
import { Link } from 'react-router-dom';

import { BsCart4 } from "react-icons/bs";



const Navbar = (props,setMode) => {




    return (
        <div   >
      <nav className="navbar navbar-expand-md bg-body-tertiary    ">
  <div className="container">
    <Link className="navbar-brand" to="/">LA COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <form className="d-flex">
      <input className="form-control-sm me-2  "type="search"
            placeholder="Search"  />       <button className="btn btn-outline-dark" type="submit"     >Search</button>
</form>
<div>


     <div>
    
     </div>


</div>


      </ul>

      <div className="buttons p-1">
        <Link to="Login" className='btn btn-outline-dark' >   login </Link>       
    
      </div>
      <div >
    
      </div>
      <div className=' p-1'>
      <Link to="Cart" className='btn btn-outline-dark'  onClick={()=>props.handleShow()} >  <BsCart4  className='mb-1 '/> {props.count}  </Link>
      </div>
      
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;

