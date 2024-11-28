import React from "react";


export default function Skills() {
  const skills = [
    { name: "HTML", img: "/Html.png", proficiency: 90 },
    { name: "CSS", img: "/Css.png", proficiency: 95 },
    { name: "JavaScript", img: "/Javascript.png", proficiency: 80 },
    { name: "React", img: "/React.png", proficiency: 75 },
    { name: "Redux", img: "/Redux.png", proficiency: 70 },
    { name: "Bootstrap", img: "/Bootstrap.png", proficiency: 94},
    { name: "Material-UI", img: "/Mui.png", proficiency: 50 },
    { name: "Tailwind", img: "/Tailwind.png", proficiency: 85 },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Skills</h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            My technical toolkit, helping me build user-friendly and responsive web applications.
          </p>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
              />
              <p className="text-lg font-semibold text-gray-200">{skill.name}</p>
              
         
              <div className="w-full bg-gray-700 rounded-full mt-2">
                <div
                  className={`h-2 rounded-full bg-yellow-400`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            
              <p className="text-gray-300 mt-2">{skill.proficiency}%</p>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
