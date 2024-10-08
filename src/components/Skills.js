import React from "react";

function Skills() {
  const technicalSkills = [
    "Java",
    "JavaScript",
    "Python",
    "C++",
    "Bash",
    "React",
    "Flask",
    "MongoDB",
  ];
  const softSkills = [
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Communication",
  ];

  return (
    <div className="container">
      <h1>Technical Skills</h1>
      <div className="skills-list">
        {technicalSkills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      <h1>Soft Skills</h1>
      <div className="skills-list">
        {softSkills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
