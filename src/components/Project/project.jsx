import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./project.css";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API =
    import.meta.env.VITE_API_URL ||
    "https://portfolio-backend-ww34.onrender.com";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API}/api/projects/`);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Projects:", data);

        setProjects(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Project Fetch Error:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h1 id="para">Featured Projects</h1>

      <p className="project-subtitle">
        A showcase of my work in Full Stack Development, Software Engineering,
        Data Analysis and modern web technologies.
      </p>

      {loading ? (
        <p className="loading-text">Loading Projects...</p>
      ) : projects.length === 0 ? (
        <p className="loading-text">No Projects Found.</p>
      ) : (
        <div className="slider">
          {projects.map((project, index) => {
            const imageUrl = project.image?.startsWith("http")
              ? project.image
              : `${API}${project.image}`;

            return (
              <Card
  key={project.id || index}
  title={project.title}
  image={imageUrl}
  description={project.description}
  github={project.github}
  live={project.live}
/>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Project;