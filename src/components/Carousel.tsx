import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

import banner from "../banner2.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="cdiv">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
