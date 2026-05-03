import React from "react";
import "./Card.css";

function Card({ title, image, github, live }) {

  const API = import.meta.env.VITE_API_URL;

  // 🔥 HANDLE IMAGE (ALL CASES)
  const imageUrl =
    image?.startsWith("http")
      ? image
      : `${API}${image}`;

  // 🔥 CLICK HANDLER
  const handleClick = () => {
    if (live) {
      window.open(live, "_blank");
    } else if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      
      {/* TITLE */}
      <h1>{title}</h1>

      {/* HOVER SECTION */}
      <div className="hovercard">

        {/* IMAGE */}
        <img
          src={imageUrl}
          alt={title || "project image"}
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />

        {/* BUTTONS */}
        <div className="buttons">

          {/* LIVE */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live
            </a>
          )}

          {/* GITHUB */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Repo
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default Card;