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

        if (Array.isArray(data)) {
          setSkills(data);
        } else {
          setSkills([]);
        }
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
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );

      gsap.fromTo(
        ".about-card",
        {
          opacity: 0,
          y: 60,
        },
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
        {
          opacity: 0,
          y: 20,
        },
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

  const defaultSkills = [
 "Full Stack Development",
  "React.js",
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "MySQL",
  "MongoDB",
  "Data Analysis",
  "Power BI",
  "REST API Development",
  "Git & GitHub",
  "Problem Solving"
  ];

  return (
    <section id="about" ref={aboutRef}>
      <div className="about-container">

        <div className="personalinfo">
  <h1>About Me</h1>

  <p>
 Hello! I'm <span>Ankan Haldar</span>, an MCA student at Techno India University and a passionate Full Stack Developer with a strong interest in Software Development, Data Analysis, and emerging technologies. I enjoy building modern, responsive, and scalable web applications using technologies such as React, PHP, MySQL, JavaScript, Python, Java, and various contemporary development tools. My passion lies in transforming ideas into practical digital solutions that deliver meaningful user experiences and solve real-world challenges.

Throughout my academic and personal development journey, I have worked on a variety of projects that have strengthened both my technical expertise and analytical thinking. Some of my notable projects include an E-Learning Platform with course management and assessment features, a Smart Traffic Management System designed to improve urban traffic flow, a Smart Routine Optimization System for academic scheduling, dynamic web applications using PHP and MySQL, portfolio websites, and data-driven analytical projects. These experiences have helped me develop strong skills in problem-solving, system design, database management, and full-stack application development.

Beyond web development, I am highly interested in Data Analysis and data-driven decision-making. I enjoy exploring datasets, discovering meaningful patterns, and creating insights that can support better business and organizational decisions. I continuously learn new technologies, frameworks, and industry best practices to stay updated with the rapidly evolving technology landscape.

My goal is to become a versatile Software Engineer and Full Stack Developer who can build innovative digital products, develop efficient software solutions, and leverage data analytics to create impactful outcomes for businesses and society. I am always eager to take on new challenges, collaborate with talented teams, and contribute to projects that make a meaningful difference.

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
        activeCard === "specialization" ? null : "specialization"
      )
    }
  >
    <h3>💻 Specialization</h3>
    <p>Full Stack Development</p>
    <span>React • PHP • MySQL • Python</span>
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
        <h3>Bachelor Degree</h3>
        <p>Computer Science Background</p>
      </div>
    </div>
  )}

  {activeCard === "specialization" && (
    <div className="detail-card">
      <h2>💻 Specialization</h2>

      <ul>
        <li>Full Stack Web Development</li>
        <li>React.js Development</li>
        <li>PHP & MySQL</li>
        <li>Python Programming</li>
        <li>REST API Development</li>
        <li>Data Analysis & Visualization</li>
      </ul>
    </div>
  )}

  {activeCard === "projects" && (
    <div className="detail-card">
      <h2>🚀 Featured Projects</h2>

      <ul>
        <li>E-Learning Platform</li>
        <li>Smart Traffic Management System</li>
        <li>Smart Routine Optimization System</li>
        <li>Portfolio Website</li>
        <li>Blog Management System</li>
        <li>Student Management System</li>
        <li>PHP CRUD Applications</li>
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
              {(skills.length > 0 ? skills : defaultSkills).map(
                (skill, index) => (
                  <li key={skill._id || skill.id || index}>
                    {skill.title || skill}
                  </li>
                )
              )}
            </ul>
          )}

        </div>

      </div>
    </section>
  );
}

export default About;