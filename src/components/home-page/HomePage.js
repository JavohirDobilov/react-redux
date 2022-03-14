import { Carousel } from 'bootstrap';
import React from 'react'
import { useSelector } from 'react-redux';
import CarouselItems from '../carousel/CarouselItems';

import ProductItem from '../product_item/ProductItem';

const HomePage = () => {



  const products = useSelector(state=>state.allProducts.products)
  console.log(products)
  return (
    <>
    <div className='container'>
      <div className='carouselContainer my-3'>
          <CarouselItems/>
          <h2 className='d-flex justify-content-center my-3 text-white'>Products</h2> 
        </div>
        <div className='row d-flex justify-content'>
            {products?.map(item =>(
              <div key={item.id} className='col-sm-6 col-md-4 col-lg-3'>
                <ProductItem item = {item}/>
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default HomePage