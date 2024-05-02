import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./MainCarousel.css";

// import firstImage from "../images/products/jbl660nc-1.png"
// import secondImage from "../images/products/boat131-3.png"
// import thirdImage from "../images/products/sonyXb910n-1.png"


function MainCarousel(){
  
  return (
    <div className='mainCarouseldiv'>
     
      
    <Carousel variant="dark" >
      <Carousel.Item>   
      
        <img
          className="CarouselImg"
          src='/images/products/jbl660nc-1.png'
          alt="First slide"
        />
        <h2>OVER EAR</h2>
         
        <div className='mainCarouselText'>
        
          <h3>JBL Live 660NC</h3>
          <h1>Keep The Noise Out,</h1>
          <h1>Or In.You Choose.</h1><br />
          <h4 className='priceText'>₹9,999 <strike className="strikedText">₹14,999</strike></h4><br />
          <button className='carouselButton'>Shop Now</button>
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarouselImg"
          src='/images/products/boat131-3.png'
          alt="Second slide"
        />
        <h2 >IN EAR</h2>
        <div className='mainCarouselText'>
        
        <h3>boat Airdopes 131</h3>
        <h1>Featherweight for</h1>
        <h1>Comfort All-Day</h1><br />
        <h4 className='priceText'>₹1,099 <strike className="strikedText">₹2,999</strike></h4>
        <button className='carouselButton'>Shop Now</button>
      </div>
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarouselImg"
          src='/images/products/sonyXb910n-1.png'
          alt="Third slide"
        />
                <h2 >OVER EAR</h2>

        <div className='mainCarouselText'>
        
        <h3>Sony WH-XB910N</h3>
        <h1>Give Your Favourite</h1>
        <h1>Music A Boost.</h1><br />
        <h4 className='priceText'>₹1,099 <strike className="strikedText">₹2,999</strike></h4>
        <button className='carouselButton'>Shop Now</button>
        </div>
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MainCarousel;

