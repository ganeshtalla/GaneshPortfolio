import React from "react";
// import "./AboutSection.css"; // Make sure to create an AboutSection.css file for styling

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div id="about-section" className="container">
        <h2 className="section-title">About Me.</h2>
        <p className="section-description">
          Software engineer leveraging AI and LLMs to build tools that get
          things done faster — from an agentic pipeline that tailors resumes
          per job, to an MCP-driven "second brain" that automates my own
          engineering workflow. Currently a Senior Member of Technical Staff
          at Illumio, where I build distributed, Kubernetes-native systems
          for network security and observability at scale: high-throughput
          stream processing, graph-backed network topology, and features
          taken from design through production across Go, Java, and
          Kafka-based systems.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
