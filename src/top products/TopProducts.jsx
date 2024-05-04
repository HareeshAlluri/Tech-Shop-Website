import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import productsData from "../featuredproducts/ProductsData";
import "./TopProducts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import TopProductsLayout from './TopProductsLayout';

function TopProducts({handleClick}) {
  const [products, updatedProducts]=useState(productsData);
  const [filterProducts, updatedFilterProducts]= useState([]);

  const allProducts = () => {
    updatedFilterProducts([]);
  };

  const categoryFilter = (category) => {
    const filtered = productsData.filter(product => product.category === category);
    updatedFilterProducts(filtered);
  }

  return (
    <div className='topProducts'>
      <h3 className='topHeading'>Top Products</h3>
      <div>
        <ul className='filterdProducts'>
        <li onClick={allProducts}>
            All
          </li>

          <li onClick={() => categoryFilter('Headphones')}>
            Headphones
          </li>

          <li onClick={() => categoryFilter('Earbuds')}>
            Earbuds
          </li>

          <li onClick={() => categoryFilter('Earphones')}>
            Earphones
          </li>

          <li onClick={() => categoryFilter('Neckbands')}>
            Neckbands
          </li>
        </ul>
      </div>
      <div className='flexGallery'>
        {(filterProducts.length > 0 ? filterProducts : products).slice(0, 11).map(item => (
          <TopProductsLayout key={item.id} item={item} handleClick={handleClick} />
        ))}
  
        <div className='browsealllayoutcard'>
          <Link to="/all-products"><p>Browse All Products <span><FontAwesomeIcon icon={faArrowRight} /></span></p></Link>
        </div>
      </div>

    </div>
  )
}

export default TopProducts
