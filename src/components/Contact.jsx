import '../styles/Contact.css'

function Contact({ personalInfo }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          {/* Left */}
          <div className="contact__left">
            <div className="section-label">Let&apos;s Connect</div>
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__desc">
              I&apos;m open to exciting opportunities and collaborations. Let&apos;s build something great together!
            </p>
            <ul className="contact__details">
              <li className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href={`mailto:${personalInfo.email}`} className="contact__detail-link">
                  {personalInfo.email}
                </a>
              </li>
              <li className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.82 19.79 19.79 0 01.14 2.18 2 2 0 012.12 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </span>
                <a href={`tel:${personalInfo.phone}`} className="contact__detail-link">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="contact__detail-text">Ethiopia</span>
              </li>
            </ul>
            <div className="contact__socials">
              {personalInfo.socials.map((s) => (
                <a key={s.label} href={s.url} className="contact__social" aria-label={s.label}
                   target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form (static, no state) */}
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__field">
              <input
                type="text"
                placeholder="Your Name"
                className="contact__input"
                aria-label="Your Name"
              />
            </div>
            <div className="contact__field">
              <input
                type="email"
                placeholder="Your Email"
                className="contact__input"
                aria-label="Your Email"
              />
            </div>
            <div className="contact__field">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="contact__input contact__textarea"
                aria-label="Your Message"
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              Send Message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </button>
          </form>
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
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (name === 'telegram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.59-1.91-1.25 1.2c-.14.14-.26.26-.52.26l.19-2.68 4.84-4.37c.21-.19-.05-.29-.32-.1L7.38 14.3l-2.55-.8c-.55-.17-.56-.55.12-.81l9.97-3.84c.46-.17.86.11.72.95z"/>
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export default Contact
