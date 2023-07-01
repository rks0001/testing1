import Carousel from "react-bootstrap/Carousel";
import productimg from "../images/tablet.jpg";

function ProductDisplayCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-100 w-100"
          src={productimg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  h-100 w-100"
          src={productimg}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  h-100 w-100"
          src={productimg}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductDisplayCarousel;
