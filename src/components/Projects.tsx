import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    date: "Sep '26 – now",
    title: "Routine Agent",
    description:
      "Personal agent that manages a daily routine as Google Calendar events, driven by text or voice commands from an iPhone. Go service backed by a local Ollama model, running on a Mac mini and reached over Tailscale.",
    tags: ["Go", "Ollama", "Google Calendar API", "Tailscale"],
    private: true,
  },
  {
    date: "Apr '26 – Jul '26",
    title: "Jobs Agent",
    description:
      "Built an LLM pipeline that scores job descriptions into 4 fit tiers against a base resume and generates a tailored one-page ATS resume per job, exported to PDF and DOCX through a React UI and REST API. Enforced schema-validated LLM output with instructor and made the model layer provider-agnostic (OpenAI or local Gemma through Ollama), with a JSON-mode fallback for small models and per-call token-usage tracking.",
    tags: ["LLM", "React", "REST API", "OpenAI", "Ollama"],
    link: "https://github.com/ganesh-talla/jobs-agent",
  },
  {
    date: "Jun '26 – Jul '26",
    title: "PR Review Agent",
    description:
      "Local CLI agent that reviews code changes before they're pushed: diffs against origin/main and runs two Claude models that cross-review each other — one as reviewer, one as validator — reconciling their findings into a single structured review. No CI or webhooks; routes through an internal Entra ID-protected Claude gateway.",
    tags: ["LangGraph", "Claude", "Entra ID", "Multi-Agent"],
    private: true,
  },
  {
    date: "Apr '26",
    title: "Review Agent",
    description:
      "A portable skill stack for Claude Code that detects which infrastructure layers a change touches (Go, Java, Postgres, Neo4j, Kafka, gRPC, distributed systems, and more) and loads the matching review skills automatically, so reviewer feedback compounds into team knowledge over time.",
    tags: ["Claude Code", "Skills", "Code Review"],
    private: true,
  },
  {
    date: "Feb '26",
    title: "Meeting Agent",
    description:
      "Local-first meeting recording analyzer: transcribes audio/video with OpenAI Whisper and uses a local or cloud LLM to extract summaries, action items, and key decisions. FastAPI backend, React + TypeScript frontend, with real-time status over WebSocket.",
    tags: ["FastAPI", "React", "Whisper", "LLM"],
    private: true,
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
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-entry-link"
                >
                  <FaGithub /> Source code
                </a>
              ) : (
                project.private && (
                  <span className="project-entry-private">
                    <FaGithub /> Private repository
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectsSection;
