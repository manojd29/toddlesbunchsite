// import React from "react";
import think from "../assets/think.jpg";
import smart from "../assets/smart.jpg";
import focus from "../assets/focus.jpg";
import React from "react";
import Carousel from "semantic-ui-carousel-react";
const Slider = () => {
  let elements = [
    {
      render: () => {
        return (
          <div>
            
              <p class="font-weight-bold">Amplifies Mental Speed</p>
            
            <img src={think}></img>
          </div>
        );
      },
    },
    {
      render: () => {
        return <img src={smart}></img>;
      },
    },
    {
      render: () => {
        return <img src={focus}></img>;
      },
    },
  ];
  return (
    <center>
      <div class="carousel">
        <div class="carousel-container">
          <Carousel
            elements={elements}
            duration={3000}
            animation="slide left"
            showNextPrev={false}
            showIndicators={true}
          />
        </div>
      </div>
    </center>
  );
};
export default Slider;
