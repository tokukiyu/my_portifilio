import React, { useEffect, useState } from "react";

export default function Landing() {
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
    <div className="try">
      <div
        style={{ transform: `translateY(${scrollOffset * 0.5}px)` }}
        class="parallax-bg"
      >
        <div
          style={{ opacity: 1 - scrollOffset / 400 }}
          className="profile-land"
        >
          <img src="/Images/profile-pic.jpg" alt="profile pic" />
          <div>
            <h1>Tokuma Abdisa</h1> <br />
            <h3>Full Stack Web and Software Designer and Developer</h3>
            <button
              onClick={() => {
                window.location.href = "/projects";
              }}
              className="btn-portifilio"
            >
              MY PROJECTS
            </button>
            <br />
            <i
              style={{ color: "rgb(163, 153, 153)" }}
              class="fa-solid fa-chevron-down fa-3x"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
