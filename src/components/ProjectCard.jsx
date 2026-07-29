import '../styles/Projects.css'

function ProjectCard({ title, description, techStack, image, liveUrl, githubUrl }) {
  return (
    <div className="project-card">
      {/* Thumbnail */}
      <div className="project-card__thumb">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
        )}
        <div className="project-card__overlay">
          {liveUrl && (
            <a href={liveUrl} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
              Live
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              Code
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="project-card__info">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="project-card__stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
