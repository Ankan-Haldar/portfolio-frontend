import React, { useEffect, useState } from 'react'
import "./About.css";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function About() {

  const [skills, setSkills] = useState([]);   // 🔥 state

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills/")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err));
  }, []);

  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 1,
        start: "top 60%",
        end: "top 20%"
      }
    })
  });

  return (
    <div id="about">

      {/* LEFT SIDE SAME */}
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
            <ul>
              {skills.map((s, i) => (
                <li key={i}>{s.title}</li>   // 🔥 dynamic list
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 🔥 RIGHT SIDE DYNAMIC */}
      <div className="rightabout">
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <img src={skill.image} alt={skill.title} />
              <span>{skill.title}</span>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default About;