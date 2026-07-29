import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import { personalInfo, stats, aboutInfo, skills, projects, experience } from './data.js'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar name={personalInfo.name} initials={personalInfo.initials} links={["Home","About","Projects","Experience","Skills","Achievements","Contact"]} />
      <main>
        <Hero personalInfo={personalInfo} stats={stats} />
        <About aboutInfo={aboutInfo} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer name={personalInfo.name} initials={personalInfo.initials} />
    </>
  )
}

export default App
