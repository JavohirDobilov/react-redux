import React from 'react'
import './cart_bloc.css'

import { useSelector } from 'react-redux';
import Badge from "@material-ui/core/Badge";
import { Player } from '@lottiefiles/react-lottie-player';

const Cart_bloc = () => {
  
  const items = useSelector(state=>state.allProducts.cart)
  const quantity = items.reduce((cc,item) =>cc+=+item.number,0)
  const totalCart = items.reduce((acc,item) =>acc +=+item.price*item.number,0)
  console.log(items.length)
  return (
    <div className='cart_bloc'>
        <Badge color="secondary" badgeContent={quantity}>
        <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_ww0f9dnw.json"
            style={{ height: '42px', width: '42px' }}
          >
          </Player>
        </Badge>
        <span className='cart_bloc-total'>{totalCart} $</span>
    </div>
  )
}

export default Cart_bloc