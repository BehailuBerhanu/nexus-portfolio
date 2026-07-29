import SkillCard from './SkillCard.jsx'
import '../styles/Skills.css'

function Skills({ skills }) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <div className="section-label">Tech Stack</div>
          <h2 className="skills__title">Technologies I Work With</h2>
        </div>
        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
