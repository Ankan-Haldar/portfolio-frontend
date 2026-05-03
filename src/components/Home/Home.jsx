import React from 'react'
import "./Home.css"
import man from "../../assets/Ankan.png"
import Typewriter from "typewriter-effect";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

function Home() {

  useGSAP(()=>{
    let t1 = gsap.timeline();

    t1.from(".line1",{ y:80, duration:1, opacity:0 })
      .from(".line2",{ y:80, duration:1, opacity:0 })
      .from(".line3",{ y:80, duration:1, opacity:0 });

    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })

  return (
    <div id="home">

      {/* LEFT */}
      <div className="lefthome">
        <div className="homedetails">

          <div className="line1">I'M</div>

          <div className="line2">ANKAN HALDAR</div>

          <div className="line3">
            <Typewriter
              options={{
                strings: ["WEB DEVELOPER", "DATA ANALYST"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
              }}
            />
          </div>

          {/* BUTTONS */}
          <div className="home-buttons">

            <button 
              className="hire-btn"
              onClick={() => window.location="#contact"}
            >
              HIRE ME
            </button>

            <a 
              href="/cv.pdf" 
              download 
              className="cv-btn"
            >
              Download CV ⬇
            </a>

          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="righthome">
        <img src={man} alt="Ankan" />
      </div>

    </div>
  )
}

export default Home