// client/src/pages/Experience.jsx
import React from "react";
import Footer from "../components/Footer.jsx";

const experiences = [
  {
    role: "AI / Data Engineering Intern",
    company: "SitePro Inc.",
    type: "Internship",
    dates: "Aug 2025 – Dec 2026",
    location: "United States · Hybrid",
    bullets: [
      "Built and deployed an end-to-end anomaly detection and short-term forecasting system for industrial pump data as part of an edge AI initiative.",
      "Designed scalable data pipelines to ingest, clean, and transform high-frequency streaming sensor data for real-time analytics and model consumption.",
      "Developed feature engineering workflows for time-series data, extracting statistical and temporal features from continuous data streams.",
      "Trained and evaluated machine learning models, including Isolation Forest–based approaches, achieving ~90% anomaly detection accuracy while maintaining a lightweight model footprint (<5 MB) suitable for edge deployment.",
      "Integrated models with edge devices to enable low-latency, real-time inference and monitoring, and collaborated cross-functionally with software, hardware, and product teams.",
    ],
    skills: [
      "Data Pipelines",
      "Streaming Data",
      "Feature Engineering",
      "Machine Learning",
      "Isolation Forest",
      "Edge AI",
      "Python",
    ],
    link: "https://github.com/Shrav883/AnomalyDetectionDashboard",
  },

  {
    role: "Web-App Development Intern",
    company: "IncubXperts",
    type: "Full-time",
    dates: "Jun 2024 – Jul 2024 · 2 mos",
    location: "Pune, Maharashtra, India · On-site",
    bullets: [
      "Collaborated on developing an onboarding assistance web application using Jira for issue tracking and Agile workflows.",
      "Built backend functionality using NestJS and Prisma, and implemented frontend components with ReactJS, Material-UI, CSS, and JavaScript.",
      "Assisted in optimizing responsive UI components to improve user experience and usability.",
    ],
    skills: [
      "Full-Stack Development",
      "React.js",
      "NestJS",
      "Prisma",
      "JavaScript",
      "Material-UI",
      "Git",
      "Agile",
    ],
  },

  {
    role: "Communications and Outreach Intern",
    company: "Texas Tech Climate Center",
    type: "Part-time",
    dates: "Aug 2024 – Jul 2025",
    location: "Lubbock, Texas, United States · Hybrid",
    bullets: [
      "Led communication and outreach efforts to engage the Texas Tech and Lubbock community in sustainability initiatives.",
      "Managed digital content and social media outreach to highlight Climate Center programs, events, and research initiatives.",
      "Designed and promoted science communication campaigns to increase student and community participation.",
      "Collaborated with campus partners, student organizations, and external stakeholders to expand visibility and engagement.",
    ],
    skills: [
      "Strategic Communication",
      "Community Outreach",
      "Social Media Management",
      "Event Coordination",
      "Marketing Analytics",
    ],
  },

  {
    role: "Community Advisor",
    company: "Texas Tech University",
    type: "Part-time",
    dates: "Aug 2023 – May 2024 · 10 mos",
    location: "Lubbock, Texas, United States · On-site",
    bullets: [
      "Implemented the Residential Curriculum to foster a community centered on civility, achievement, and independence.",
      "Collaborated with internal and external stakeholders to support residents through tailored programming and learning communities.",
      "Supported and implemented the Disney Customer Service model to enhance resident experience and satisfaction.",
    ],
    skills: [
      "Leadership",
      "Student Welfare",
      "Program Development",
      "Problem Solving",
      "Community Building",
    ],
  },

  {
    role: "Market Research Analyst and Digital Marketing Manager",
    company: "Yorabien Industries Pvt Ltd",
    type: "Part-time",
    dates: "May 2023 – Jul 2023 · 3 mos",
    location: "Hybrid",
    bullets: [
      "Analyzed market data to identify trends and translate insights into actionable marketing strategies.",
      "Developed and implemented digital marketing initiatives across multiple online channels to improve brand presence.",
      "Strengthened SEO practices to enhance visibility and performance of marketing campaigns.",
    ],
    skills: [
      "Market Research",
      "Data Analysis",
      "Statistical Analysis",
      "SEO",
      "Digital Marketing",
    ],
  },

  {
    role: "Computational Thinking and Data Analysis and Mathematics Instructor",
    company: "Texas Tech University",
    type: "Part-time",
    dates: "Sep 2022 – May 2023 · 9 mos",
    location: "Lubbock, Texas, United States · On-site",
    bullets: [
      "Mentored students in Computational Thinking, Data Analysis, Bio-inspired Design Engineering, and Mathematics courses.",
      "Guided students through Python-based analysis and prediction projects to strengthen analytical reasoning.",
      "Developed engaging curriculum to foster critical thinking and structured problem-solving skills.",
    ],
    skills: [
      "Teaching",
      "Python",
      "Data Analysis",
      "Mathematical Modeling",
      "Leadership",
    ],
  },

  {
    role: "Programmer and Mentor for Robotics Academy",
    company: "American Robotics Academy",
    type: "Apprenticeship",
    dates: "Jun 2022 – Aug 2022 · 3 mos",
    location: "Raleigh, North Carolina, United States · On-site",
    bullets: [
      "Mentored students in advanced robotics workshops focused on solving real-world problems through automation.",
      "Developed object-oriented programs and built robotic models for EV3-based projects.",
    ],
    skills: [
      "Robotics",
      "Object-Oriented Programming",
      "Data Structures",
      "Mentoring",
      "Program Management",
    ],
  },
];


function SkillPill({ children }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-[220px]">
          <div className="text-lg font-semibold">{exp.role}</div>
          <div className="mt-1 text-sm text-white/70">
            {exp.company} · {exp.type}
          </div>
        </div>
        <div className="text-sm text-white/60">
          <div>{exp.dates}</div>
          <div className="mt-1">{exp.location}</div>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-white/75">
        {exp.bullets.map((b, i) => (
          <div key={i} className="flex gap-2">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
            <div>{b}</div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="text-xs uppercase tracking-wide text-white/50">
          Skills
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {exp.skills.map((s) => (
            <SkillPill key={s}>{s}</SkillPill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <img
        src="/night_sky.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8">
          <h1 className="text-3xl font-semibold">Experience</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            A snapshot of roles where I built systems, led initiatives, and
            applied data-driven thinking.
          </p>
        </div>

        {/* Timeline + cards */}
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-0 h-full w-px bg-white/15 md:left-[34px]" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[56px_1fr] gap-4 md:grid-cols-[72px_1fr] md:gap-6"
                >
                  {/* Dot */}
                  <div className="relative">
                    <div className="absolute left-[16px] top-7 md:left-[28px]">
                      <div className="h-3.5 w-3.5 rounded-full bg-white ring-4 ring-white/10" />
                    </div>
                  </div>

                  {/* Card */}
                  <ExperienceCard exp={exp} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
