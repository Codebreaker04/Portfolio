import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {AboutSection} from "./components/AboutSection.tsx";
import {ProjectSection} from "./components/ProjectSection.tsx";
import {ContactSection} from "./components/ContactSection.tsx";
import {useRef} from "react";

function App() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const projectRef = useRef<HTMLElement | null>(null);
    const contactRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef}/>
      <AboutSection sectionRef={aboutRef} projectRef={projectRef} contactRef={contactRef}/>
      <ProjectSection sectionRef={projectRef}/>
      <ContactSection sectionRef={contactRef}/>
    </>
  )
}

export default App
