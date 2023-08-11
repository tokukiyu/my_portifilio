/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "reactstrap";
import { HeaderProj } from "./projects";

export default function Experience() {
  return (
    <>
      <HeaderProj />
      <div className="content exper">
        <div className="profile-land">
          <img src="/Images/profile-pic.jpg" alt="profile pic" />
        </div>
        <div>
          <h1 id="experience">Work Experiences </h1>
          <div className="Card_list projects-list">
            <Card>
              <h2>Fiverr</h2>
              <span>2021-PRESENT</span>
              <p>
                Freelancer: Website & App Design/Development <br />
                <a
                  href="https://www.fiverr.com/share/V8Qyze"
                  target="_blank"
                  rel="noreferrer"
                >
                  View site ≫
                </a>{" "}
              </p>
              <img src="/Images/fiverr.gif" />
            </Card>
            <Card>
              <h2>Upwork</h2>
              <span>2021-PRESENT</span>
              <p>
                Freelancer: Website & App Design/Development <br />
                <a
                  href="https://www.upwork.com/freelancers/~010ee523bec09ea1d2?viewMode=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  View site ≫
                </a>{" "}
              </p>
              <img
                style={{ minHeight: "270px", objectFit: "cover" }}
                src="/Images/upwork.jpg"
              />
            </Card>

            <Card>
              <h2>Oasis Infobyte</h2>
              <span>May 2023-Jul 2023</span>
              <p>
                Intern: Web Design and Development
                <br />
                <a href="#">View site ≫</a>{" "}
              </p>
              <img src="/Images/oasis.jpeg" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
