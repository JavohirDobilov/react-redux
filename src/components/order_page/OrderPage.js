import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../order_item/OrderItem'
import "./order_page.css"
import { Player } from '@lottiefiles/react-lottie-player';
import FlipMove from 'react-flip-move';


const OrderPage = () => {


  const player = useRef()
  const items = useSelector(state => state.allProducts.cart)
  const totalPrice = items.reduce((acc,item) =>acc+=+item.price*item.number,0)

  if (items.length < 1) {
    return (
      <div className='empty-cart d-flex justify-content-center'>
        <div className='empty-icon'>
          <Player
            autoplay
            loop
            // src="./shopfast.json"
            src="https://assets2.lottiefiles.com/packages/lf20_L5Ytpb.json"
            style={{ height: '300px', width: '300px' }}
          >
          </Player>
        </div>
      </div>
    )
  }

  return (
    <div className='container order_page'>
      <div className='order_page-left'>
        <FlipMove>
          {items.map(item => (
            <div key={item.id} className='ds'>
              <OrderItem item={item} />
            </div>
          ))}
        </FlipMove>
      </div>
      <div className='d-flex justify-content-end'>
        <div className='totalAll align-items-center d-flex justify-content-center'>

          <div className='row'>
            <div className='dd my-2'>
              <div className='totalCal d-flex justify-content-center text-white'>
                PriceAll: {totalPrice}$
              </div>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <button className='btn but text-white'>
               <h3 className='total-texta'>Check Pay</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage