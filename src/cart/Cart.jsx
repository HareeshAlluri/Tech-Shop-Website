import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart({cart, setCart}) {
  const [initial, updatedState]=useState(0)
  return (
      <article>
        {
          cart.map((item)=>{
            <div className="cartBox" key={item.id}>
              <div className='flexGallery1'>
                <img src='' alt="cartImage" />
              </div>
            
              <div className='flexGallery2'>
                <h6></h6>
                <h5></h5>
                <button>+</button>
                <p>count</p>
                <button>-</button>
              </div>
              <div><FontAwesomeIcon icon={faTrash} /></div>
              
          </div>
         

          })
        }
        
      </article>
  )
}

export default Cart;
