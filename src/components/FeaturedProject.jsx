import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "reactstrap";
import Langtools from "./lang_Tools";
import LatestProjectVideo from "./LatestProjectVideo";
export const projects = [
  {
    image: "/Images/5gada2.png",
    title: "5Gada Online Shopping platform",
    url: "https://5gada.com",
    date: "Jun, 2022 - present",
    role: "founder",
    desc: "E-commerce application for promoting cultural product for selling and buying, it is still under development",
  },
  {
    image: "/Images/hayubk.png",
    title: "HayuBk e-book, handout and studying material Hub",
    url: "https://hayubk.5gada.com",
    date: "Nov, 2023 - present",
    role: "co-founder",
    desc: "e-book platform where everybody can search and get any book they want and read online or download, where anybody can contribute material and build their profile, get best rank and get reward",
  },
  {
    image: "/Images/edir.png",
    title: "Edir management system CPBTP project",
    url: "http://localhost:8080/edir",
    date: "May, 2023 - Jul,2023",
    role: "developer",
    desc: "This is final implementation project of CBTP project",
  },

  {
    image: "/Images/bot.jpg",
    title: "JU Exam Bot ",
    url: "https://t.me/JU_exam_store_bot",
    date: "Oct, 2023 - present",
    role: "co-founder",
    desc: "Exam bot for students which helps student take exam online and can access and know more about previous year exams",
  },
  {
    image: "/Images/ecom1.5-seller.gif",
    title: "Cosmetics E-commerce ",
    date: "Jul, 2023 - present",
    url: null,
    role: null,
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
              <span>{image.date}</span> <br />
              <span>{image.role}</span>
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
      <button
        onClick={() => {
          window.location.href = "/projects";
        }}
        className="btn-portifilio"
        style={{ backgroundColor: "" }}
      >
        More projects
      </button>
      <Langtools />
      <LatestProjectVideo />
    </div>
  );
}
