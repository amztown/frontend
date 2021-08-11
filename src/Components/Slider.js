import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import Card from "./Card";

const Slider = ({ products, code }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all 500"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customTransition="transform 500ms ease-in-out"
    >
      {console.log(products)}
      {products &&
        products.map(
          (prod) =>
            prod.price && (
              <div className="d-flex justify-content-center">
                <Card data={prod} code={code} />
              </div>
            )
        )}
      {/* <div className = "text-center" >
        <Card image={p1} />
      </div>
      <div>
        <Card image={p2} />
      </div>
      <div>
        <Card image={p3} />
      </div>
      <div>
        <Card image={p2} />
      </div> */}

      {/* <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div> */}
    </Carousel>
  );
};

export default Slider;
