import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const Skills = () => {
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.skills .heading', { origin: 'top' });

    // Set skills to already loaded state immediately after DOM is ready
    const setSkillsLoaded = () => {
      const skillBars = document.querySelectorAll('.skill-progress');
      const skillPercentages = document.querySelectorAll('.skill-percentage');
      
      skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        const percentageElement = skillPercentages[index];
        
        if (targetWidth) {
          // Set width immediately without animation
          bar.style.width = targetWidth + '%';
          bar.style.setProperty('--target-width', targetWidth + '%');
          
          // Set percentage immediately to match width
          if (percentageElement) {
            percentageElement.textContent = targetWidth + '%';
          }
        }
      });
    };

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(setSkillsLoaded, 0);
    
    // Also try immediately in case DOM is already ready
    setSkillsLoaded();
  }, []);

  const skillsCategories = [
    {
      type: 'technical',
      icon: 'bx bx-code-alt',
      title: 'Programming Skills',
      subtitle: 'Development & Programming',
      skills: [
        { name: 'HTML/CSS/JAVASCRIPT', percentage: '100%', width: '98' },
        { name: 'REACT/TYPESCRIPT/PHP', percentage: '90%', width: '87' },
        { name: 'PYTHON/BASH/SQL', percentage: '87%', width: '92' },
        { name: 'JAVA/C++/C#', percentage: '85%', width: '80' }
      ]
    },
    {
      type: 'design',
      icon: 'bx bx-palette',
      title: 'Design Skills',
      subtitle: 'Visual & Creative',
      skills: [
        { name: 'Graphic Design', percentage: '95%', width: '90' },
        { name: 'Video Editing', percentage: '90%', width: '85' },
        { name: 'UI/UX Design', percentage: '90%', width: '95' },
        { name: 'Motion Graphics', percentage: '85%', width: '90' }
      ]
    },
    {
      type: 'technical-alt',
      icon: 'bx bx-brain',
      title: 'Technical Skills',
      subtitle: 'Builds & Delivers',
      skills: [
        { name: 'Front-end/Back-end', percentage: '100%', width: '100' },
        { name: 'Cybersecurity/Ethical Hacking', percentage: '75%', width: '75' },
        { name: 'Creative Branding/Marketing', percentage: '95%', width: '95' },
        { name: 'AI/Automation', percentage: '80%', width: '80' }
      ]
    },
    {
      type: 'soft',
      icon: 'bx bx-group',
      title: 'Soft Skills',
      subtitle: 'Professional & Personal',
      skills: [
        { name: 'Communication/Collaboration', percentage: '80%', width: '95' },
        { name: 'Teamwork/Adaptability', percentage: '95%', width: '95' },
        { name: 'Problem Solving/Innovation', percentage: '90%', width: '80' },
        { name: 'Attention to Detail/Flexible Workflow', percentage: '87%', width: '100' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills" ref={skillsSectionRef}>
      <div className="skills_section">
        <div className="skills_head">
          <h2 className="heading">Our <span>Skills</span></h2>
        </div>

        <div className="skills_main_enhanced">
          {skillsCategories.map((category, catIndex) => (
            <div key={catIndex} className={`skill-category ${category.type}`}>
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon} style={{ color: 'rgb(255, 255, 255)' }}></i>
                </div>
                <div className="category-title">
                  <h3>{category.title}</h3>
                  <span>{category.subtitle}</span>
                </div>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.width}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-width={skill.width} 
                      data-skill={skill.name.toLowerCase().replace(/\s+/g, '-')}
                      style={{ 
                        width: `${skill.width}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

