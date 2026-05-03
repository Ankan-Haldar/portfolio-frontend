import React from "react";
import "./Card.css";

function Card({ title, image, github, live }) {

  const handleClick = () => {
    if (live) {
      window.open(live, "_blank");
    } else if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <div className="card" onClick={handleClick}>

      <h1>{title}</h1>

      <div className="hovercard">

        <img
          src={image}
          alt={title || "project image"}
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300?text=No+Image";
          }}
        />

        <div className="buttons">

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