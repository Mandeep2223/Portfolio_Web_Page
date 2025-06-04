import React from 'react'

export default function Navbar() {
return (
<div>
<nav className="navbar bg-white navbar-expand-lg py-3">
<div className="container-fluid section-container">
<a className="navbar-brand text-black" href="#hero">Portfolio</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mb-lg-0">
    <li className="nav-item">
        <a className="nav-link active text-black" aria-current="page" href="#skills">About Skills</a>
    </li>
   <li className="nav-item">
        <a className="nav-link text-black" href="#experience">Experience</a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-black" href="#projects">Projects</a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-black" href="#contact">Contact</a>
    </li>
    
    </ul>
</div>
</div>
</nav>
</div>
)
}
