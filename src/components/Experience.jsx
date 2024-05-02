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
            <div style={{position:"relative"}}>
              {" "}
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

                <div
                  itemscope
                  itemtype="http://schema.org/Person"
                  class="fiverr-seller-widget"
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    height:70,
                    top: 0,
                    right:100,
                  }}
                >
                  <a
                    itemprop="url"
                    href="https://www.fiverr.com/tokumakiyu"
                    rel="nofollow"
                    target="_blank"
                    style={{ display: "inline-block" }}
                  >
                    <div
                      class="fiverr-seller-content"
                      id="fiverr-seller-widget-content-ae6fcfc1-1adc-4131-97b8-d0aad9ece3d4"
                      itemprop="contentURL"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      id="fiverr-widget-seller-data"
                      style={{ display: "none" }}
                    >
                      <div itemprop="name">tokumakiyu</div>
                      <div itemscope itemtype="http://schema.org/Organization">
                        <span itemprop="name">Fiverr</span>
                      </div>
                      <div itemprop="jobtitle">Seller</div>
                      <div itemprop="description">
                        🚀 Web Developer | Software Engineer Welcome! I'm Tokuma
                        Abdisa, a web developer with a strong Software
                        Engineering background. with 5+ experience, I've
                        specialized in: Responsive Web Design User Interaction
                        and Secure Logins Cross-Platform Compatibility
                        Client-Centric Approach: I tailor solutions to your
                        goals, be it an e-commerce platform, dynamic web app, or
                        blog. Client Satisfaction: On-time delivery and budget
                        adherence are my priorities. Open communication and your
                        feedback guide my process. Let's bring your digital
                        vision to life! 💻✨
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
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
