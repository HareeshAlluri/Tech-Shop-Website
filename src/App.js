// import FeaturedCarousel from "./featuredproducts/FeaturedCarousel";
import Header from "./header-component/Header";
// import MainCarousel from "./hero-carousel/MainCarousel";
import {Routes, Route} from "react-router-dom"
import Cart from "./cart/Cart";
import Home from "./Home/Home";


function App() {
  return (
    <div>
      <Header />
      <Routes>   
      <Route path='/' element={<Home /> } />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
