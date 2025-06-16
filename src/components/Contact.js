import React from 'react'
import linkedinIcon from './assests/linkedin.svg';
import ResumeIcon from './assests/Resume.png';
import ResumeDoc from './assests/Mandeep-Chaudhary_CV.pdf';
import githubIcon from './assests/git.png';

export default function Contact() {
  const stars = Array.from({ length: 100 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 1 + Math.random() * 2;
    const delay = Math.random() * 2;

    return (
      <div
        key={i}
        className="star"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="galaxy-container">
      {/* Galaxy background layer */}
      <div className="galaxy-background">
        {stars}
      </div>

      {/* Contact section */}
      <section className="contact-section desktop-sp mobile-sp tab-sp" id="contact">
        <div className="container-fluid section-container text-white hero-h">
          <div className="contact-container">
            <div className="contact-left">
              <h2>Contact Me</h2>
              <p>Email: mandeepdba43@gmail.com</p>
              <p>Number: <a href="tel:+917017279562">+91 70172 79562</a></p>
              <p>Location: Noida, Uttar Pradesh, India</p>
            </div>
            <div className="contact-right">
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/mandeep-chaudhary-902a6b145/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              </div>
              <div className="cv">
              <a href={ResumeDoc} download="Mandeep_Resume.pdf">
               <img
                 src={ResumeIcon}
                 alt="Download Resume"
                 className="mail-icon"
                />
              </a>
              </div>
              <div className="github">
              <a href="https://github.com/Mandeep2223" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
