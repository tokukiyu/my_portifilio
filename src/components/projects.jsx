/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { projects } from "./FeaturedProject";

export function HeaderProj() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="try" style={{ height: "40vh" }}>
      <div
        style={{
          transform: `translateY(${scrollOffset * 0.5}px)`,
          backgroundPositionY: "bottom",
        }}
        class="parallax-bg"
      ></div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <HeaderProj />
      <div className="content proj">
        <div  className="profile-land">
          <img src="/Images/profile-pic.jpg" alt="profile pic" />
        </div>
        <h1 id="experience">Projects</h1>
        <div className="Card_list projects-list">
          {projects.map((image, index) => (
            <div key={index} className="slide card">
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
        </div>
      </div>
    </>
  );
}
