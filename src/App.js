import FeaturedCarousel from "./featuredproducts/FeaturedCarousel";
import Header from "./header-component/Header";
import MainCarousel from "./hero-carousel/MainCarousel";
import {Routes, Route} from "react-router-dom"
import Cart from "./cart/Cart";


function App() {
  return (
    <div>
      <Routes>   
      <Route path='/' element={<Header />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <MainCarousel />
      <FeaturedCarousel />
    </div>
  );
}

export default App;
