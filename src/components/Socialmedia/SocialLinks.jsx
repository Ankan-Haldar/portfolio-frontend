import React from "react";
import "./SocialLinks.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function SocialLinks() {
return ( <section id="social"> <div className="social-container">

    <h1>Connect With Me</h1>

    <p>
      Feel free to connect with me through social platforms and explore my work.
    </p>

    <div className="social-icons">

      <a
        href="https://github.com/Ankan-Haldar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/ankan-haldar-813a71292/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

    </div>

  </div>
</section>

);
}

export default SocialLinks;
