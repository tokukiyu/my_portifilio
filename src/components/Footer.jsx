import React from "react";

export default function Footer() {
  return (
    <div className="footer right-side">
      <div className="social-contact fixed">
        <ul>
          <li>
            <a
              href="https://github.com/tokukiyu"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tokuma-abdisa/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@tech-21ffaa/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=youtube&logoColor=white"
                alt="YouTube"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tokumakiyiti/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white"
                alt="Instagram"
              />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div style={{ color: "white", padding: "20px", paddingBottom: "30px" }}>
        {" "}
        © 2023 Tokuma Abdisa
      </div>
    </div>
  );
}
