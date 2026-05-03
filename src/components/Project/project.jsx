import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './project.css'

function Project() {

  const [projects, setProjects] = useState([]);

  const API = import.meta.env.VITE_API_URL || "https://portfolio-backend-ww34.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/projects/`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([data]);
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="projects">
      <h1 id='para'>Tech Projects</h1>

      <div className="slider">

        {projects.map((p, index) => {

          const imageUrl =
            p.image?.startsWith("http")
              ? p.image
              : `${API}${p.image}`;

          return (
            <Card 
              key={index}
              title={p.title}
              image={imageUrl}
              github={p.github}
              live={p.live}
            />
          );
        })}

      </div>
    </div>
  )
}

export default Project;