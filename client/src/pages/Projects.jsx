// client/src/pages/Projects.jsx
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import projectsVideo from "../assets/projects_page.mp4";

const projects = [
  {
    title: "Anomaly Detection & Short-Term Forecasting System (Industrial Pumps)",
    tags: ["Edge AI", "Time Series", "Streaming Analytics"],
    blurb:
      "Edge-ready anomaly detection and short-term forecasting for industrial pump telemetry, focused on actionable insights and lightweight deployment.",
    highlights: [
      "Designed for fast inference at the edge",
      "Streaming-friendly analytics pipeline",
      "Clear visualization of anomalies for operators",
    ],
    stack: ["Python", "APIs", "Event Streaming", "Analytics"],
    metrics: [
      { label: "Latency", value: "Low (Edge)" },
      { label: "Pipeline", value: "Streaming" },
      { label: "Focus", value: "Operator UX" },
    ],
    github: "https://github.com/your-username/anomaly-detection-pumps",
  },
  {
    title: "Sign Language Recognition (KNN + GenAI)",
    tags: ["Computer Vision", "KNN", "GenAI"],
    blurb:
      "A sign language recognition pipeline using classical ML (KNN) with a GenAI layer to improve interpretability and usability of outputs.",
    highlights: [
      "Gesture-based feature extraction",
      "Interpretable KNN baseline",
      "GenAI-assisted explanations",
    ],
    stack: ["Python", "OpenCV", "KNN", "GenAI"],
    metrics: [
      { label: "Model", value: "KNN" },
      { label: "Goal", value: "Interpretability" },
      { label: "UX", value: "GenAI Layer" },
    ],
    github: "https://github.com/your-username/sign-ai-knn",
  },
  {
    title: "Smooth-KITTI-VO (Visual Odometry)",
    tags: ["SLAM", "Computer Vision", "Trajectory Smoothing"],
    blurb:
      "A modular visual odometry pipeline emphasizing stable trajectories and evaluation-driven experimentation.",
    highlights: [
      "End-to-end VO pipeline",
      "Trajectory smoothing",
      "Modular architecture",
    ],
    stack: ["Python", "C++", "Computer Vision"],
    metrics: [
      { label: "Dataset", value: "KITTI" },
      { label: "Output", value: "Smoothed VO" },
      { label: "Design", value: "Modular" },
    ],
    github: "https://github.com/Shrav883/Smooth-KITTI-VO",
  },
  {
    title: "Pharmageddon (Hackathon Project)",
    tags: ["Full Stack", "Healthcare", "Data Management"],
    blurb:
      "Hackathon project: a secure drug-trial data management system supporting role-based access and multi-hospital workflows.",
    highlights: [
      "RBAC for medical roles",
      "Structured trial updates",
      "Multi-location support",
    ],
    stack: ["React", "Backend API", "MongoDB / PostgreSQL"],
    metrics: [
      { label: "Type", value: "Hackathon" },
      { label: "Core", value: "RBAC + CRUD" },
      { label: "Scope", value: "Multi-site" },
    ],
    github: "https://github.com/your-username/pharmageddon",
  },
];

function Tag({ children }) {
  return (
    <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </div>
  );
}

function Chip({ label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
        {label}
      </div>
      <div className="text-xs font-medium text-white/85">{value}</div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      {/* abstract glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-white/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-4 text-lg font-semibold text-white">{p.title}</div>
        <div className="mt-2 text-sm leading-relaxed text-white/75">
          {p.blurb}
        </div>

        {/* metrics chips */}
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {p.metrics.map((m) => (
            <Chip key={`${m.label}-${m.value}`} {...m} />
          ))}
        </div>

        <div className="mt-5">
          <div className="text-xs font-semibold tracking-wide text-white/70">
            Key highlights
          </div>
          <div className="mt-2 space-y-2 text-sm text-white/75">
            {p.highlights.map((h) => (
              <div key={h} className="flex gap-2">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                <div>{h}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub link */}
      <div className="relative z-10 mt-auto pt-6">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
        >
          View on GitHub
          <div className="transition group-hover:translate-x-1">→</div>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={projectsVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlays for contrast */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="max-w-3xl">
            <div className="text-3xl font-semibold text-white">Projects</div>
            <div className="mt-3 text-white/70">
              Selected work across edge analytics, computer vision, and full-stack
              systems — built with real-world constraints and clarity in mind.
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
