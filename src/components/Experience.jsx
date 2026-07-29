import '../styles/Experience.css'

const icons = {
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>
    </svg>
  ),
  bot: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <path d="M12 11V7M8 7h8M9 15h.01M15 15h.01"/>
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  cpu: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
    </svg>
  ),
  award: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6"/>
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
    </svg>
  ),
}

function ExperienceCard({ role, org, description, period, icon }) {
  return (
    <div className="exp-card">
      <div className="exp-card__icon">{icons[icon] || icons.user}</div>
      <div className="exp-card__body">
        <div className="exp-card__role">{role}</div>
        <div className="exp-card__org">{org}</div>
        <p className="exp-card__desc">{description}</p>
        <div className="exp-card__period">{period}</div>
      </div>
    </div>
  )
}

function Experience({ experience }) {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-label">Experience &amp; Achievements</div>
        <h2 className="experience__title">My Journey So Far</h2>
        <div className="experience__timeline">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              role={item.role}
              org={item.org}
              description={item.description}
              period={item.period}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
