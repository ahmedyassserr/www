import React, { useEffect   } from 'react';
import  "./App.css"
import Navbar from './Componant/Navbar';
import All from './Componant/All';
import Home from './Componant/Home';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MensClothes from './Componant/MensClothes'
import WomensClothes from './Componant/WomensClothes';
import Jewelery from './Componant/Jewelery';
import Electronics from './Componant/Electronics';
import BuyNow from './Componant/BuyNow';
import CartList from './Componant/CartList';
import Login from './Componant/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import {  useTheme } from '@mui/material';
import { useState } from 'react';



function App() {
 
      const [products,setproducts] = useState([])
      const [category1,setcategory1] = useState([])
      const [category2,setcategory2] = useState([])
      const [category3,setcategory3] = useState([])
      const [category4,setcategory4] = useState([])
      const [Mode,setMode]  =useState('light')

      const darkTheme = createTheme({
        palette: {
          mode: Mode,
        },
      });
      const theme=useTheme()

      
      const getproducts= async ()=>{
         const response= await axios.get(`https://fakestoreapi.com/products`) 
         setproducts(response.data)
        }
   
      const getcategory1= async ()=>{
         const response= await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`) 
         setcategory1(response.data)
        }
      const getcategory2= async ()=>{
         const response= await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`) 
         setcategory2(response.data)
        }
      const getcategory3= async ()=>{
         const response= await axios.get(`https://fakestoreapi.com/products/category/jewelery`) 
         setcategory3(response.data)
        }
      const getcategory4= async ()=>{
         const response= await axios.get(`https://fakestoreapi.com/products/category/electronics`) 
         setcategory4(response.data)
        }
     
     
      useEffect(()=>{
        getproducts()
        getcategory1()
        getcategory2()
        getcategory3()
        getcategory4()
      
  
      },[])
      const [cart,setcart]=useState([])
      const [Showcart,setShowcart]=useState([])
        
      const addproduct=(data)=>{
        console.log(data)
        setcart([...cart,{...data, quantity : 1 }])}

        const handleShow=(value)=>{
          setShowcart(value)
        }
      
        

  return (
    <div   >
       <ThemeProvider theme={darkTheme}>
       <CssBaseline />    
<Navbar count={cart.length} handleShow={handleShow}     products={products}      />

<IconButton sx={{ ml: 1 }} color="inherit"  onClick={() => { setMode(darkTheme.palette.mode === 'light' ? 'dark' : 'light') }} >
        {theme.palette.mode === '' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

<Routes>
  <Route path='/'  element={<All  products={products}  />}  />
  <Route path='/'  element={< Home   />}  />
  <Route path='Login'  element={<Login />  }  />
  <Route path='MensClothes'  element={<MensClothes  category1={category1} />}  />
  <Route path='WomensClothes'  element={<WomensClothes  category2={category2} />} />
  <Route path='Jewelery'  element={<Jewelery  category3={category3} />}  />
  <Route path='Electronics'  element={<Electronics  category4={category4} />}  />
  <Route path='BuyNow/:id'  element={<BuyNow addproduct={addproduct}  />}  />
  <Route path='Cart'  element={<CartList  cart={cart}  />  }  />

</Routes>
</ThemeProvider>
    </div>
  );
}

export default App;
