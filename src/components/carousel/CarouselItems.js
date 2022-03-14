import React from 'react'
import {useState} from "react"
import { Carousel } from 'react-bootstrap';
import "./carousel-image.css"
import image1 from "../../img/bn.jpg"
import image2 from "../../img/bn.jpg"
import image3 from "../../img/bn.jpg"

const CarouselItems = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselItems