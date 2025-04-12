import { Container, Carousel, Image } from 'react-bootstrap';

const CategoryCarousel = () => {
  const categories = [
    { img: "/Categories/lipstic.webp", label: "Lipstick" },
    { img: "/Categories/category-1.webp", label: "Serum" },
    { img: "/Categories/category-2.webp", label: "Makeup Brush" },
    { img: "/Categories/category-3.webp", label: "Makeup Palette" },
    { img: "/Categories/category-4.jpg", label: "Powder" },
    { img: "/Categories/category-5.webp", label: "Nail Glitter" },
    { img: "/Categories/category-6.avif", label: "EyeShadow Palette" },
    { img: "/Categories/category-7.webp", label: "Concealer" },
    { img: "/Categories/category-8.jpg", label: "Foundation" },
    { img: "/Categories/category-9.webp", label: "Primer" },
    { img: "/Categories/category-11.webp", label: "Eye Liner" },
    { img: "/Categories/category-10.avif", label: "Sunscreen Lotion" },
  ];

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
                    src={cat.img}
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
                    {cat.label}
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

 