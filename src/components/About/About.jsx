import React, { useEffect, useState } from 'react'
import "./About.css";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function About() {

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ENV + fallback
  const API = import.meta.env.VITE_API_URL || "https://portfolio-backend-ww34.onrender.com";

  // ✅ FETCH SKILLS
  useEffect(() => {
  console.log("API URL:", API);

  fetch(`${API}/api/skills/`)
    .then(res => {
      console.log("Response status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("DATA:", data);

      if (Array.isArray(data)) {
        setSkills(data);
      } else {
        setSkills([data]);
      }
      setLoading(false);
    })
    .catch(err => {
      console.log("ERROR:", err);
      setSkills([]);
      setLoading(false);
    });
}, []);

  // ✅ GSAP animation
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle",
        scrub: 1,
        start: "top 60%",
        end: "top 20%"
      }
    })
  });

  return (
    <div id="about">

      {/* LEFT SIDE */}
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">

          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name</span> ANKAN HALDAR</li>
              <li><span>GENDER</span>: MALE</li>
              <li><span>LANGUAGE</span>: BENGALI, ENGLISH, HINDI</li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span>: BCA, MCA</li>
              <li><span>BRANCH</span>: COMPUTER APPLICATION</li>
              <li><span>CGPA</span>: 8.5</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>

            {loading ? (
              <p style={{ color: "white" }}>Loading skills...</p>
            ) : skills.length === 0 ? (
              <p style={{ color: "red" }}>No skills found</p>
            ) : (
              <ul>
                {skills.map((s, i) => (
                  <li key={i}>{s.title}</li>
                ))}
              </ul>
            )}

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightabout">
        <div className="skills-grid">

          {loading ? (
            <p style={{ color: "white" }}>Loading...</p>
          ) : (
            skills.map((skill, index) => {

              const imageUrl =
                skill.image?.startsWith("http")
                  ? skill.image
                  : `${API}${skill.image}`;

              return (
                <div className="skill-box" key={index}>

                  <img
                    src={imageUrl}
                    alt={skill.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100?text=No+Image";
                    }}
                  />

                  <span>{skill.title}</span>

                </div>
              );
            })
          )}

        </div>
      </div>

    </div>
  )
}

export default About;