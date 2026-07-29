import ProjectCard from './ProjectCard.jsx'
import '../styles/Projects.css'

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <div className="section-label">Featured Projects</div>
            <h2 className="projects__title">Things I&apos;ve Built</h2>
          </div>
          <a href="#projects" className="projects__view-all">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
