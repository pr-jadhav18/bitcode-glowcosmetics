import React from "react";
import { Carousel, Image } from "react-bootstrap";

function BigBanner() {
    return (
      <div>
        <Carousel slide={false}>
      <Carousel.Item>
        <p className="fw-bolder text-center fs-1 color-info">MAGICAL DEALS</p>
        <Image className="d-block w-100" src="Banner/banner.webp"/>
        <Carousel.Caption>
          <p>Magical Deals</p>
        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>
      </div>
    )
}
export default BigBanner;