import React, { useEffect } from 'react';
import './App.css';
import Achivements from './Components/Achivements/Achivements';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      let top = window.scrollY;
      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
      });
    };

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleMenuClick = () => {
      menuIcon.classList.toggle('fa-x');
      navbar.classList.toggle('active');
    };

    window.addEventListener('scroll', handleScroll);
    menuIcon.addEventListener('click', handleMenuClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuIcon.removeEventListener('click', handleMenuClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="home" id="home"><Home /></section>
      <section className="about" id="about"><About /></section>
      <section className="skills" id="skills"><Skills /></section>
      <section className="achievements" id="achievements"><Achivements /></section>
      <section className="timeline-section" id="education"><Education /></section>
      <section className="projects" id="projects"><Projects /></section>
      <section className="contact" id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;