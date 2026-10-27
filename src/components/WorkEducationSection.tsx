import React from "react";
import "./WorkEducationSection.css";
import Typewriter from "typewriter-effect";

interface TimelineEntry {
  date: string;
  title: string;
  org: string;
  blurb?: string;
  current?: boolean;
}

const work: TimelineEntry[] = [
  {
    date: "Feb 2026 - Present",
    title: "Senior Member of Technical Staff",
    org: "Illumio",
    current: true,
  },
  {
    date: "Feb 2025 - Jan 2026",
    title: "Member of Technical Staff II",
    org: "Illumio",
  },
  {
    date: "Feb 2024 - Feb 2025",
    title: "Technical Implementation Manager",
    org: "Paymentus",
  },
  {
    date: "Aug 2020 - Jul 2022",
    title: "Software Engineer",
    org: "Jio Platforms Limited",
  },
];

const education: TimelineEntry[] = [
  {
    date: "Aug 2022 - Feb 2024",
    title: "M.S in Computer Science and Engineering",
    org: "University at Buffalo, The State University of New York",
  },
  {
    date: "Aug 2016 - May 2020",
    title: "B.Tech in Computer Science Engineering",
    org: "Indian Institute of Information Technology Guwahati",
  },
];

function TimelineColumn({
  heading,
  entries,
}: {
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <div className="timeline-col">
      <h3 className="timeline-col-heading">{heading}</h3>
      <ol className="timeline-list">
        {entries.map((entry, idx) => (
          <li
            key={idx}
            className={`timeline-entry${entry.current ? " current" : ""}`}
          >
            <p className="timeline-entry-date">{entry.date}</p>
            <h4 className="timeline-entry-title">{entry.title}</h4>
            <p className="timeline-entry-org">{entry.org}</p>
            {entry.blurb && (
              <p className="timeline-entry-blurb">{entry.blurb}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function WorkEducationSection() {
  return (
    <div className="work-education">
      <div className="container">
        <div className="experience-heading">
          <Typewriter
            options={{
              strings: ["Where I've worked and studied...."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="section-title">Experience & Education.</h2>
      </div>

      <div className="work-education-grid">
        <div id="experience">
          <TimelineColumn heading="Work" entries={work} />
        </div>
        <div id="education">
          <TimelineColumn heading="Education" entries={education} />
        </div>
      </div>
    </div>
  );
}

export default WorkEducationSection;
