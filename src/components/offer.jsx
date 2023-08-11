import React, { useEffect } from "react";
import {
  BotAutomationOffer,
  MobileAppDevelopmentOffer,
  SoftwareSolutionsOffer,
  UIUXOffer,
  WebSolutionsOffer,
} from "./offerDesc";

export default function Offer(props) {
  useEffect(() => {
    const offerDis = document.getElementById(props.order);
    if (offerDis) {
      offerDis.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);
  return (
    <>
      <div className="offer">
        <button className="close-button" onClick={props.Back}>
          Back
        </button>
        <div id={props.order} className="about-offer">
          {props.order === "UI/UX" ? (
            <UIUXOffer />
          ) : props.order === "web" ? (
            <WebSolutionsOffer />
          ) : props.order === "M_app" ? (
            <MobileAppDevelopmentOffer />
          ) : props.order === "D_app" ? (
            <SoftwareSolutionsOffer />
          ) : props.order === "Bot" ? (
            <BotAutomationOffer />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
