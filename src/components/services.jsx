/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Card } from "reactstrap";
import { HeaderProj } from "./projects";
import Offer from "./offer";

export default function Services() {
  const [order, setOrder] = useState(null);
  function handleOrder(ord) {
    setOrder(ord);
  }
  function closeOrder() {
    setOrder(null);
  }
  return (
    <>
      {order !== null ? (
        <div className="offer">
          <Offer order={order} Back={closeOrder} />
        </div>
      ) : (
        ""
      )}
      <HeaderProj />
      <div className="content">
        <div className="profile-land">
          <img src="/Images/profile-pic.jpg" alt="profile pic" />
        </div>
        <h1>Services</h1>
        <div className="Card_list projects-list">
          <Card>
            <h2>Engaging UI/UX Craftsmanship</h2>
            <p>
              Shaping Memorable User Journeys: Intuitive, Aesthetic, and
              Impactful
            </p>
            <img src="/Images/uix-design.gif" />
            <button
              onClick={() => handleOrder("UI/UX")}
              className="btn-portifilio btn-2"
            >
              order now
            </button>
          </Card>
          <Card>
            <h2>Innovative Web Solutions</h2>
            <p>
              Crafting Dynamic Web Experiences: Modern, Interactive, and
              Value-Driven
            </p>

            <img src="/Images/web-development-2-YX4ZEeEEnwI13r0K.gif" />
            <button
              onClick={() => handleOrder("web")}
              className="btn-portifilio btn-2"
            >
              order now
            </button>
          </Card>
          <Card>
            <h2>Custom Software Solutions</h2>
            <p>
              Creating Exceptional Software Experiences: Tailored, Efficient,
              and Affordable
            </p>
            <img src="/Images/web-dev service.gif" />
            <button
              onClick={() => handleOrder("D_app")}
              className="btn-portifilio btn-2"
            >
              order now
            </button>
          </Card>
          <Card>
            <h2>Mobile App Innovations</h2>
            <p>
              Elevating Experiences through Mobile Apps: Seamlessly Integrated,
              Engaging, and Cost-Effective
            </p>
            <img src="/Images/mob-dev.gif" />
            <button
              onClick={() => handleOrder("M_app")}
              className="btn-portifilio btn-2"
            >
              order now
            </button>
          </Card>
          <Card>
            <h2>Bot Automation Solutions</h2>
            <p>
              Empowering Efficiency with Intelligent Bots: Streamlined,
              Adaptive, and Budget-Friendly
            </p>

            <img src="/Images/bot.gif" />
            <button
              onClick={() => handleOrder("Bot")}
              className="btn-portifilio btn-2"
            >
              order now
            </button>
          </Card>
        </div>
      </div>
    </>
  );
}
