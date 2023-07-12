import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = () => {
 
    
 

  
    return (
      <div
      className="modal show d-grid  bg-body-tertiary rounded"
      style={{ display: 'block', position: 'initial' }}
      >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
 
        <div className="d-grid  bg-body-tertiary rounded">
        
        <input type="text"  placeholder='Fullname'  />
          <input type="password" placeholder='password'  /> 
          <input type="gmail"  placeholder='gmail'    /> 
        </div>
   
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type='submit' >Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

    );
}

export default Login;
