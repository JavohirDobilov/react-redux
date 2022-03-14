import React from 'react'
import './product_item.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/ProductAction'
import imag from "../../img/1.png"

const ProductItem = ({ item }) => { 
  const dispatch = useDispatch()

  const handleClick = (e) =>{
    e.stopPropagation();
    dispatch(addProduct(item))

  }
  return (
    <div className='product_card d-flex justify-content-center'>
      <img src={imag} className='product_image'/>
      <div className='product_data'>
        <h1 className='product_title'>{item.title}</h1>
        <span className='product_price'>{item.price}$</span>
        <div className='d'></div>
        <button className='product_button' onClick={handleClick}>Buy now</button>
      </div>
    </div>
  )
}

export default ProductItem