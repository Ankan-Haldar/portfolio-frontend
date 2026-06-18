import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const API =
    import.meta.env.VITE_API_URL ||
    "https://portfolio-backend-ww34.onrender.com";

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${API}/api/skills/`);

        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }

        const data = await response.json();
        setSkills(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Skill Fetch Error:", error);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, [API]);

  useEffect(() => {
    if (!loading) {
      ScrollTrigger.refresh();
    }
  }, [loading]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".personalinfo",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );

      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: ".card-container",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".skills ul li",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".skills",
            start: "top 85%",
          },
        }
      );
    },
    {
      scope: aboutRef,
      dependencies: [loading],
    }
  );

  return (
    <section id="about" ref={aboutRef}>
      <div className="about-container">

        <div className="personalinfo">
          <h1>About Me</h1>

          <p>
            Hello! I'm <span>Ankan Haldar</span>, an MCA student at Techno India
            University and a passionate Full Stack Developer with a strong
            interest in Software Development, Data Analysis, and emerging
            technologies. I enjoy building modern, responsive, and scalable web
            applications using React, Python, Django, Flask, PHP, MySQL,
            JavaScript, and various modern development tools.
            <br /><br />
            My project experience includes Smart Routine Optimization System,
            Advanced Authentication System, ArtisanHub, Student Management
            System, Movie Recommendation System, ETL Data Processing Pipeline,
            Business Analytics Dashboard, and several web applications.
            <br /><br />
            Beyond development, I am highly interested in Data Analysis,
            Machine Learning, and Business Intelligence. I enjoy working with
            data, discovering meaningful insights, and building solutions that
            help organizations make data-driven decisions.
            <br /><br />
            My goal is to become a versatile Software Engineer and Full Stack
            Developer capable of building innovative products and leveraging
            technology to solve real-world challenges.
          </p>
        </div>

        <div className="card-container">

          <div
            className="about-card"
            onClick={() =>
              setActiveCard(activeCard === "education" ? null : "education")
            }
          >
            <h3>🎓 Education</h3>
            <p>MCA</p>
            <span>Techno India University</span>
          </div>

          <div
            className="about-card"
            onClick={() =>
              setActiveCard(
                activeCard === "specialization"
                  ? null
                  : "specialization"
              )
            }
          >
            <h3>💻 Specialization</h3>
            <p>Full Stack Development</p>
            <span>Python • React • Django • Data Analysis</span>
          </div>

          <div
            className="about-card"
            onClick={() =>
              setActiveCard(activeCard === "projects" ? null : "projects")
            }
          >
            <h3>🚀 Projects</h3>
            <p>10+</p>
            <span>Academic & Personal Projects</span>
          </div>

        </div>

        <div className="details-section">

          {activeCard === "education" && (
            <div className="detail-card">
              <h2>🎓 Education</h2>

              <div className="detail-item">
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Techno India University</p>
                <span>2024 - 2026</span>
              </div>

              <div className="detail-item">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Burdwan Institute of Management & Computer Science</p>
                <span>2021 - 2024</span>
              </div>
            </div>
          )}

          {activeCard === "specialization" && (
            <div className="detail-card">
              <h2>💻 Specialization</h2>

              <ul>
                <li>Full Stack Development</li>
                <li>React.js & JavaScript</li>
                <li>Django & Flask</li>
                <li>REST API Development</li>
                <li>Data Analysis (NumPy & Pandas)</li>
                <li>Power BI & Excel</li>
                <li>Database Management (MySQL & SQLite)</li>
                <li>Machine Learning Fundamentals</li>
              </ul>
            </div>
          )}

          {activeCard === "projects" && (
            <div className="detail-card">
              <h2>🚀 Featured Projects</h2>

              <ul>
                <li>Smart Routine Optimization System</li>
                <li>Advanced Authentication System</li>
                <li>ArtisanHub</li>
                <li>Student Management System</li>
                <li>Movie Recommendation System</li>
                <li>ETL Data Processing Pipeline</li>
                <li>Business Analytics Dashboard</li>
                <li>Weather Application</li>
              </ul>
            </div>
          )}

        </div>

        <div className="skills">

          <h1>Technical Skills</h1>

          <p className="skill-subtitle">
            Technologies and tools I use to build modern applications.
          </p>

          {loading ? (
            <p className="loading-text">Loading skills...</p>
          ) : (
            <ul>
              {skills.map((skill, index) => (
                <li key={skill.id || index}>
                  {skill.title}
                </li>
              ))}
            </ul>
          )}

        </div>

      </div>
    </section>
  );
}

export default About;