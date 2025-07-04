import { useEffect, useState } from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';

const CategoryCarousel = () => {
 const [categories,setCategories] = useState([]);

 async function getCategory() {
         var url = "http://localhost:8000/api/category-list";
         var response = await fetch(url);
         var result = await response.json();
         setCategories(result);
   }

   useEffect(()=>{
    getCategory();
   },[])
  
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 6) {
    chunkedCategories.push(categories.slice(i, i + 6));
  }

  return (
    <Container className="mt-4 mb-4">
      <p className="text-center fw-bold gradient-text fs-2">Our Categories</p>
      <Carousel indicators={false}>
        {chunkedCategories.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {group.map((cat, idx) => (
                <div key={idx} className="text-center mx-3">
                  <Image
                    src={`http://localhost:8000/uploads/${cat.image}`}
                    roundedCircle
                    style={{
                      width: "150px",
                      height: "150px",
                      border: "2px solid black",
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      marginTop: "10px",
                    }}
                  >
                    {cat.name}
                  </p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CategoryCarousel;

 