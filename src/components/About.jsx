import '../styles/About.css'

function About({ aboutInfo }) {
  const infoCards = [
    { icon: 'age', label: 'Age', value: aboutInfo.age, sub: 'Years Old' },
    { icon: 'location', label: 'From', value: aboutInfo.from, sub: aboutInfo.fromSub },
    { icon: 'target', label: 'Focus', value: aboutInfo.focus, sub: null },
    { icon: 'group', label: 'Founder', value: aboutInfo.founder, sub: aboutInfo.founderSub },
    { icon: 'bot', label: 'Creator', value: aboutInfo.creator, sub: aboutInfo.creatorSub },
    { icon: 'brain', label: 'Learning', value: aboutInfo.learning, sub: null },
  ]

  const icons = {
    age: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></svg>,
    location: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    target: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    group: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    bot: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7M8 7h8M9 15h.01M15 15h.01"/></svg>,
    brain: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3a4 4 0 014 4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4h-1v6a2 2 0 01-4 0v-6H9a4 4 0 01-4-4 4 4 0 014-4z"/></svg>,
  }

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="about__inner">
          <div className="about__left">
            <h2 className="about__headline">
              {aboutInfo.headline.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
            <p className="about__bio">{aboutInfo.bio}</p>
            <p className="about__signature">{aboutInfo.bio && aboutInfo.from}</p>
            <div className="about__sig-text">{aboutInfo.from === 'Ethiopia' ? 'Bekalu Berhanu' : ''}</div>
          </div>
          <div className="about__right">
            <div className="about__cards">
              {infoCards.map((card) => (
                <div className="about__card" key={card.label}>
                  <div className="about__card-icon">{icons[card.icon]}</div>
                  <div className="about__card-content">
                    <div className="about__card-label">{card.label}</div>
                    <div className="about__card-value">{card.value}</div>
                    {card.sub && <div className="about__card-sub">{card.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
