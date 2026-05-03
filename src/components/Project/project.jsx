import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './project.css'

function Project() {

  const [projects, setProjects] = useState([])
  const API = import.meta.env.VITE_API_URL || "https://portfolio-backend-ww34.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/projects/`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="projects">
      <h1 id='para'>Tech Projects</h1>

      <div className="slider">

        {projects.map((p, index) => (
          <Card 
            key={index}
            title={p.title}
            image={p.image}
            github={p.github}
            live={p.live}
          />
        ))}

      </div>
    </div>
  )
}

export default Project