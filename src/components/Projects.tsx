import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    date: "Apr '26 – Jul '26",
    title: "Jobs Agent",
    description:
      "Built an LLM pipeline that scores job descriptions into 4 fit tiers against a base resume and generates a tailored one-page ATS resume per job, exported to PDF and DOCX through a React UI and REST API. Enforced schema-validated LLM output with instructor and made the model layer provider-agnostic (OpenAI or local Gemma through Ollama), with a JSON-mode fallback for small models and per-call token-usage tracking.",
    tags: ["LLM", "React", "REST API", "OpenAI", "Ollama"],
    link: "https://github.com/ganesh-talla/jobs-agent",
  },
  {
    date: "Mar '23 – May '23",
    title: "Authorship Attribution",
    description:
      "Benchmarked BERT, attention Bi-LSTM, stacked CNN+RNN, and Siamese networks, with GloVe and POS-tag features, across three authorship attribution tasks.",
    tags: ["BERT", "Bi-LSTM", "CNN+RNN", "Siamese Networks", "GloVe"],
    link: "https://github.com/ganeshred/NLPAuthorshipAttributionNLM",
  },
];

function ProjectsSection() {
  return (
    <Container id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-entry" key={idx}>
            <div className="project-entry-date">{project.date}</div>
            <div className="project-entry-body">
              <h3 className="project-entry-title">{project.title}</h3>
              <p className="project-entry-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-entry-link"
                >
                  <FaGithub /> Source code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectsSection;
