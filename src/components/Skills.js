import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'JavaScript', level: '90%' },
  { name: 'React.js', level: '85%' },
  { name: 'Node.js', level: '80%' },
  { name: 'MongoDB', level: '75%' },
];

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      '.skill-bar',
      { width: '0%' },
      { width: (index) => skills[index].level, duration: 1, delay: 0.3, stagger: 0.2 }
    );
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <p>{skill.name}</p>
          <div className="skill-bar" style={{ background: '#3f51b5' }}></div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
