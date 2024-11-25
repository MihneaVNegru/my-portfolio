import React from "react";

function About() {
  const experiences = [
    {
      title: "Software Engineer at Goya-Systec",
      duration: "September 2023 – Present",
      details: [
        "Web Development: Vue.js, React.js, Node.js.",
        "Embedded Systems: Writing and testing code in C.",
        "Version Control: Git for managing revisions.",
        "Deployment: Docker for containerization.",
        "Automation: Scripted tasks to enhance efficiency."
      ],
    },
    {
      title: "Junior Programmer at camLine",
      duration: "June 2022 – October 2022",
      details: [
        "Java Development: Application development.",
        "CI/CD Pipelines: Jenkins for automation.",
        "Web Technologies: Contributed to web projects.",
        "Database Management: MySQL."
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">About Me</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
        Hi, I'm Mihnea! I am a software engineer with experience in web development, embedded systems, and automation.
      </p>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.duration}</p>
            <ul className="mt-2 space-y-1 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
