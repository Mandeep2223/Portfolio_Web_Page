import React from 'react'
import bgVideo from './assests/bg-video.mp4';

export default function Hero() {
  return (
    <div>
      <section className="hero  desktop-sp mobile-sp tab-sp" id="hero">
        <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="hero-h container-fluid section-container text-white">
          <div className="sub_heading_container">
            <h6>
              Mandeep Chaudhary | Portfolio
            </h6>

            {/* Animated Rectangle and Circle */}
            
          </div>

          <h1 className="pb-2">Senior Front-End Developer</h1>
          <div className="content">
            <h6>
              I am working as a Senior Front-End Developer at Palmspire Technologies, where I build websites using HubSpot CMS, WordPress, and React. I have experience creating custom themes, templates, and adding useful features to make websites easy to use and good-looking. I know HTML, CSS, and JavaScript, and I always try to write clean code and make websites that work well on all devices.
            </h6>
          </div>
          <div className="scroll-indicator-wrapper">
              <div className="scroll-indicator">
                <div className="scroll-circle" />
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}


