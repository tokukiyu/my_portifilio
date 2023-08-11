/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <nav>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          style={{
            fontSize: "23px",
            fontFamily: "Roboto Slab",
          }}
          className="Logo"
        >
          <img
            style={{ width: "30px", transform: "translateY(5px)" }}
            src="/Images/icon-logo-mine.png"
          />{" "}
          Tokuma Abdisa
        </div>

        <div className={`right-side`}>
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>

          <ul className={`menu-list  ${mobileMenuOpen ? "open" : ""}`}>
            <li
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <i className="fa-solid fa-house"></i> Home
            </li>
            <li
              onClick={() => {
                window.location.href = "/projects";
              }}
            >
              <i className="fa-solid fa-diagram-project"></i> Projects
            </li>
            <li
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              <img
                style={{
                  width: "18px",
                  transform: "translateY(2px)",
                  marginRight: "3px",
                }}
                src="/Images/services.png"
              />
              Services
            </li>
            <li
              onClick={() => {
                window.location.href = "/experiences";
              }}
            >
              <img
                style={{
                  width: "28px",
                  transform: "translateY(2px)",
                }}
                src="/Images/Experience.png"
              />
              Experiences
            </li>
            <li
              onClick={() => {
                window.location.href = "/Interests";
              }}
            >
              <img
                style={{
                  width: "18px",
                  transform: "translateY(2px)",
                  marginRight: "3px",
                }}
                src="/Images/interest.png"
              />
              Interested In
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
