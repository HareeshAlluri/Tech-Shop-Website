import React from 'react'
// import productsData from "../featuredproducts/ProductsData";
import { IoMdStar } from 'react-icons/io';
import "./TopProducts.css"



function TopProductsLayout({item, handleClick }) {
  const {images, title, info, finalPrice,originalPrice, rateCount }=item
  return (
    <>
      <div className='cards'>
        <div className='productsImage'>
          <img src={images[0]} alt="imagesss" className='product-image' />
        </div>
        <div className='semicard'>
          <span >
            {
              [...Array(rateCount)].map(i => <IoMdStar key={i} />)
            }
          </span>
          <h5 >{title}</h5>
          <p >{info}</p>
         <hr />
          <h3>
            ₹{finalPrice} <strike> ₹{originalPrice}</strike>
          </h3>
          <button onClick={()=>handleClick(item)}>Add to cart</button>
        </div>

      </div>
    </>
  )
}

export default TopProductsLayout
