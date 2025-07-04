import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

  const [sliderImages,setSliderImage] = useState([]);

  async function getSliders() {
  try {
    var url = "http://localhost:8000/api/slider-list";
    var response = await fetch(url);
    
    var result = await response.json();
    // console.log(result);
    setSliderImage(result);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}


  useEffect(()=>{
    getSliders();
  },[]);
  return (
    <div style={{ width: '98.99vw', paddingTop: '100px' }}>
      <Carousel data-bs-theme="dark">
        {
          sliderImages.map((img,index)=>{
            console.log('imge>>>',img.image);
            
            return(
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`http://localhost:8000/uploads/${img.image}`}
                alt={`slide $(index + 1)`}
                style={{ height: '100vh', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })
        }

      </Carousel>

    </div>
  )
}

export default Slider;