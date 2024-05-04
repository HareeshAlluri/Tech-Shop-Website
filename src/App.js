// import FeaturedCarousel from "./featuredproducts/FeaturedCarousel";
import Header from "./header-component/Header";
// import MainCarousel from "./hero-carousel/MainCarousel";
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Cart from "./cart/Cart";
import Home from "./Home/Home";
import AllProducts from "./allProducts/AllProducts"


function App() {
    const [show, setShow]=useState(true);
  const [cart,setCart]= useState([]);
  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((prod)=>{
      if(item.id==prod.id)
        isPresent=true;
    })
    if(isPresent){
      return ;
    }
    else{
      setCart([...cart, item]);
    }
  }
  return ( 
    <div>
      <Header size={cart.length}/>

        
     
      <Routes>   
      <Route path='/' element={<Home handleClick={handleClick}/> } />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/all-products" element={<AllProducts />} />

      </Routes>
      
      
      
    </div>
  );
}

export default App;
