import '../styles/Footer.css'

function Footer({ name, initials }) {
  const year = 2026

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          <span className="footer__logo-box">{initials}</span>
        </a>
        <p className="footer__quote">&ldquo;Code, Learn, Build, Impact.&rdquo;</p>
        <p className="footer__copy">
          &copy; {year} {name}. All rights reserved.
        </p>
        <a href="#home" className="footer__back" aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </a>
      </div>
      <div className="footer__sub">
        <span>Designed &amp; Built with</span>
        <span className="footer__heart">♥</span>
        <span>in Ethiopia</span>
      </div>
    </footer>
  )
}

export default Footer
