import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "reactstrap";
import Langtools from "./lang_Tools";
import LatestProjectVideo from "./LatestProjectVideo";
export const projects = [
  {
    image: "/Images/edir.png",
    title: "Edir management system CPBTP project",
    url: "http://localhost:8080/edir",
    date: "May, 2023 - Jul,2023",
    desc: "This is final implementation project of CBTP project",
  },
  {
    image: "/Images/eCommerce-website.jpg",
    title: "5Gada Online Shopping platform",
    url: "https://5gada.ga",
    date: "Jun, 2022 - present",
    desc: "E-commerce application for promoting cultural product for selling and buying, it is still under development",
  },
  {
    image: "/Images/ecom1.5-seller.gif",
    title: "Cosmetics E-commerce ",
    date: "Jul, 2023 - present",
    url: null,
    desc: "Currently under development, I am happy I am in this development ",
  },
];
export default function FeaturedProject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    swipeToSlide: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 3000, // Set the speed to 0 when video is playing
  };

  return (
    <div className="content">
      <h1>Featured projects</h1>
      <Card className="projects-slider">
        <Slider {...settings}>
          {projects.map((image, index) => (
            <div key={index} className="slide">
              <h2>{image.title}</h2>
              <span>{image.date}</span>
              <p>{image.desc}</p>
              <img
                onClick={() => {
                  if (image.url !== null) {
                    window.open(image.url, "_blank");
                  }
                }}
                src={image.image}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </Slider>
      </Card>
      <button className="btn-portifilio" style={{ backgroundColor: "" }}>
        More projects
      </button>
      <Langtools />
      <LatestProjectVideo />
    </div>
  );
}
