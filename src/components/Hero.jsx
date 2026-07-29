import StarCanvas from './StarCanvas.jsx'
import '../styles/Hero.css'

function StatCard({ icon, label, value, sub }) {
  const icons = {
    folder: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
      </svg>
    ),
    code: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    users: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    target: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  }

  return (
    <div className="hero__stat-card">
      <div className="hero__stat-icon">{icons[icon]}</div>
      <div className="hero__stat-label">{label}</div>
      <div className="hero__stat-value">{value}</div>
      <div className="hero__stat-sub">{sub}</div>
    </div>
  )
}

function Hero({ personalInfo, stats }) {
  return (
    <section className="hero" id="home">
      <StarCanvas />
      <div className="container hero__inner">
        {/* Left col */}
        <div className="hero__left">
          <div className="hero__tag">
            // Frontend Developer &amp; UI/UX Designer
          </div>
          <h1 className="hero__heading">
            Hi, I&apos;m<br />
            <span className="hero__name">{personalInfo.name.split(' ')[0]}.</span>
            <span className="hero__dot">•</span>
          </h1>
          <p className="hero__tagline">{personalInfo.tagline}</p>
          <div className="hero__meta">
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {personalInfo.location}
            </span>
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
              </svg>
              {personalInfo.grade}
            </span>
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              {personalInfo.role}
            </span>
          </div>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
            <a href={personalInfo.cvLink} className="btn btn-outline" download>
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 3v13M7 12l5 5 5-5M3 21h18"/>
              </svg>
            </a>
          </div>
          <div className="hero__socials">
            {personalInfo.socials.map((s) => (
              <a key={s.label} href={s.url} className="hero__social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right col — stat cards */}
        <div className="hero__right">
          <div className="hero__stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ name }) {
  if (name === 'github') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
    </svg>
  )
  if (name === 'linkedin') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (name === 'telegram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.59-1.91-1.25 1.2c-.14.14-.26.26-.52.26l.19-2.68 4.84-4.37c.21-.19-.05-.29-.32-.1L7.38 14.3l-2.55-.8c-.55-.17-.56-.55.12-.81l9.97-3.84c.46-.17.86.11.72.95z"/>
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export default Hero
