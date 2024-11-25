import React from "react";

function Projects() {
  const projects = [
    {
      title: "Data Collector",
      description: [
        "Web Scraper Application: Developed in Racket with a Python module using Beautiful Soup.",
        "Traverses web pages to extract email addresses.",
        "Differentiates between personal and institutional emails."
      ],
    },
    {
      title: "Shop App with IoT-Enabled Motorized Shutters",
      description: [
        "Built with React.js and Node.js for a dynamic and responsive user experience.",
        "Real-time control of motorized shutters using MQTT and WebSockets."
      ],
    },
    {
      title: "Shared Task List",
      description: [
        "Allows users to share and manage tasks through a React interface.",
        "Uses AWS DynamoDB for data storage, Lambda for backend logic, and API Gateway.",
        "Implements SNS for notifications and SQS for message queuing."
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">My Projects</h1>
      <div className="space-y-8 w-full max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500">{project.title}</h2>
            <ul className="mt-2 space-y-2 text-gray-700">
              {project.description.map((desc, i) => (
                <li key={i}>• {desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
