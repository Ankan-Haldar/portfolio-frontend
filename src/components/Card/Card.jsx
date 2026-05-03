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
      
      {/* Title */}
      <h1>{title}</h1>

      {/* Hover Overlay */}
      <div className="hovercard">
        
        {/* Image */}
        <img
          src={image}
          alt={title || "project image"}
          loading="lazy"   // 🔥 performance
        />

        {/* Buttons */}
        <div className="buttons">

          {/* Live Button */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // 🔥 prevent parent click
            >
              Live
            </a>
          )}

          {/* GitHub Button */}
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