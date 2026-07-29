import '../styles/Navbar.css'

function Navbar({ name, initials, links }) {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-box">{initials}</span>
        </a>

        {/* Nav links */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="navbar__link"
              >
                {link}
                {link === 'Home' && <span className="navbar__dot" />}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + theme toggle */}
        <div className="navbar__actions">
          <a href="#contact" className="btn btn-outline navbar__cta">
            Let&apos;s Talk
          </a>
          <button className="navbar__theme" aria-label="Toggle theme">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="navbar__hamburger" aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
