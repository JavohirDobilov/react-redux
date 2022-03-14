import React from 'react'
// import "./bannerItem.css"
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';


const BannerItem = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
   

  const item = [
    {
      id:1,
      title:"fsdfsdfsdfdsfdfsd sdfsdfs sdfs",
      text:"sfsgdfgdgdg"
    },
    {
      id:1,
      title:"fsdfsdfsdfdsfdfsd sdfsdfs sdfs",
      text:"sfsgdfgdgdg"
    },
    {
      id:1,
      title:"fsdfsdfsdfdsfdfsd sdfsdfs sdfs",
      text:"sfsgdfgdgdg"
    }
  ]


  return (
    <div className='carousel'>
      <Carousel autoplay>
        <div>
        <h1 style={contentStyle}>hhh</h1>
        <h1 style={contentStyle}>hhh</h1>
        <h1 style={contentStyle}>hhh</h1>
        </div>

       {/* {item.map(item =>{
         return (
           <div className='Container'>
             <div className='row'>
               {contentStyle}
              </div>
           </div>
         )
       })} */}
      </Carousel>,
      mountNode,
    </div>
  )
}

export default BannerItem