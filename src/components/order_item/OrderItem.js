import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./order_item.css"
import { useDispatch } from 'react-redux';
import { decrementTotal, incrementTotal, removeProduct } from '../../redux/actions/ProductAction';
import imag from "../../img/1.png"

const OrderItem = ({item}) => {
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(removeProduct(item))
    }

    const increment =() =>{
        dispatch(incrementTotal(item))
    }
    const decrement = () =>{
        dispatch(decrementTotal(item))
    }
  return (
    <div className='order-item d-flex align-items-center'>
        <div className='order-item_image'>
            <img src={imag} />
        </div>

        <div className='order-item_title'>
            <span>{item.title}</span>
        </div>
        <div className='total-number d-flex mx-5 text-align-center total-text'>
            <button className='num-decrement mx-3' onClick={decrement}>
                -
            </button>
            <div className='num-total mx-3'>
                {item.number}
            </div>
            <button className='num-increment mx-3' onClick={increment}>
                +
            </button>
        </div>
        <div className='order-item_price d-flex align-items-center'> 
            <span>{item.price} $</span>
            <HighlightOffIcon className='order-tem_deleteIcon' onClick ={handleClick}/>
        </div>
    </div>
  )
}

export default OrderItem