import React,{useState} from 'react'
import MainCarousel from '../hero-carousel/MainCarousel'
// import FeaturedCarousel from '../featuredproducts/FeaturedCarousel'
import Footer from '../footer/Footer'
import Advantages from '../advantages/Advantages'
import TopProducts from '../top products/TopProducts'

function Home({handleClick}) {



  return (
    <div>
      <MainCarousel />
      {/* <FeaturedCarousel />   */}
      <TopProducts handleClick={handleClick}/>
      <Advantages />
      
      <Footer />
    </div>
  )
}

export default Home
