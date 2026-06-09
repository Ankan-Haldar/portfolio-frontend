import React from "react";
import "./Card.css";

function Card({
  title,
  image,
  description,
  github,
  live,
}) {
  return (
    <div className="card">

      <div className="image-container">
        <img
          className="project-image"
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x250?text=Project";
          }}
        />
      </div>

      <div className="card-content">

        <h2>{title}</h2>

        <p>
          {description ||
            "Project description not available."}
        </p>

        <div className="card-buttons">

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              🚀 Live Demo
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default Card;