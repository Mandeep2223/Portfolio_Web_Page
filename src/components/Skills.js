import React from 'react'
import logo1 from './assests/html5-6646.svg';
import logo2 from './assests/css-3.png';
import logo3 from './assests/java-script.png';
import logo4 from './assests/bootstrap.png';
import logo5 from './assests/tailwind-logo.png';
import logo6 from './assests/react-js.png';
import logo7 from './assests/redux-icon.png';
import logo8 from './assests/wordpress.png';
import logo9 from './assests/hubspot.png';
import logo10 from './assests/netbeans.png';
import logo11 from './assests/vs-code.jpg';
import logo12 from './assests/canva-logo.png';
import logo13 from './assests/figma.png';


const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13];

export default function Skills() {
  return (
    <div>
    <section className="skills desktop-sp mobile-sp tab-sp" id="skills">
    <div className="container-fluid section-container">
    <h2 className='pb-3'>Skills</h2>
    <div className="skills-content text-margin-zero">
      <div className="skill-item"><h5>Programming Languages:-  HTML, CSS, JavaScript, C++</h5></div>
      <div className="skill-item"><h5>Frameworks & Libraries:- Bootstrap, Tailwind CSS, React JS, Redux</h5></div>
      <div className="skill-item"><h5>Online Platforms:- WordPress, HubSpot</h5></div>
      <div className="skill-item"><h5>Development Tools:- NetBeans, Visual Studio Code</h5></div>
      <div className="skill-item"><h5>Design Tools:- Canva, Figma</h5></div>
      <div className="skill-item"><h5>Software:- Microsoft Office Suite (Word, Excel, PowerPoint)</h5></div>
      <div className="skill-item"><h5>Operating Systems:- Windows, macOS</h5></div>
    </div>
    </div>
    </section>
     <section className="skills-slider">
      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
