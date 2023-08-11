/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { HeaderProj } from "./projects";
import { Card } from "reactstrap";

export default function Interests() {
  return (
    <>
      <HeaderProj />
      <div className="content inters">
        <div className="profile-land">
          <img src="/Images/profile-pic.jpg" alt="profile pic" />
        </div>
        <h1 id="Interest">Interested in</h1>
        <div className="Card_list projects-list">
          <Card>
            <h1>AI experting </h1>
            <p>
              {/* hello */}I want to participate in AI based project and
              learning opportunities,I want to get more experience and knowledge
              of this domain{" "}
            </p>
            <img src="/Images/ml-future.gif" />
          </Card>

          <Card>
            <h1>NLP Engineering Expert</h1>
            <p>
              I have started learning this field of AI, I wan to expertize and
              do some projects on it.
            </p>
            <img src="/Images/nlp.png" />
          </Card>
          <Card>
            <img src="/Images/ecom1.5-seller.gif" />
          </Card>
        </div>
      </div>
    </>
  );
}
