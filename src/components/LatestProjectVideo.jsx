import React from "react";

export default function LatestProjectVideo() {
  return (
    <div>
      <h1>Latest Project Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <iframe
            src="https://www.youtube.com/embed/UuG5yWCUhYE"
            title="bet-rent demo vide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7071239727856705536?compact=1"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7071238549974507521?compact=1"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7071226148118048768?compact=1"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
