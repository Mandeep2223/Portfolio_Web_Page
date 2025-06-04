import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
return (
<>

<Navbar/>
<Hero/>
<Skills/>
<Experience/>
<Projects/>
<Contact/>
</>
);
}

export default App;
