// client/src/pages/Home.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

import waterVideo from "../assets/water_ripple.mp4";
import headshot from "../assets/Hero_photo.jpg";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#120c09]">
      {/* HERO */}
      <div className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={waterVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.6)_100%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* LEFT CARD */}
            <div className="group rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40">
              <div className="flex overflow-hidden rounded-2xl bg-white/5">
                <div className="w-40 shrink-0 overflow-hidden sm:w-44 md:w-48">
                  <img
                    src={headshot}
                    alt="Shravani headshot"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center px-6 py-6 text-left">
                  <h2 className="text-3xl font-semibold text-white">My Journey</h2>
                  <div className="mt-3 h-1 w-12 rounded-full bg-white/80" />

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                      CS Grad
                    </span>
                    <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                      Full-Stack
                    </span>
                    <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                      Data + AI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="group rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40">
              <div className="flex h-full flex-col justify-center">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Pill>Open to roles</Pill>
                  <Pill>AI/ML • Data Engineering • Full-Stack</Pill>
                </div>

                <h1
                  className="text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl"
                  style={{ fontFamily: "Pacifico, cursive" }}
                >
                  Hey, I’m Shravani!
                </h1>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/experience"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
                  >
                    RESUME
                  </Link>

                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
                  >
                    INDUSTRY PROJECTS
                  </Link>
                </div>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85">
                  I’m a recent Computer Science graduate who enjoys building
                  end-to-end: clean UIs, reliable APIs, and data-backed features
                  that feel human. I’m especially drawn to products that help
                  people explore cultures, make unexpected connections, and learn
                  something new.
                </p>
              </div>
            </div>
          </div>

          {/* CAPABILITIES */}
          <div className="relative mt-10">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-lg">
                <h2 className="text-3xl text-white" style={{ fontFamily: "Pacifico, cursive" }}>
                  What I work across
                </h2>

                <div className="mt-6 space-y-6 text-white/85">
                  <div>
                    <h3 className="text-base font-medium text-white">Frontend</h3>
                    <p className="mt-1 text-sm leading-relaxed">React, JavaScript, Tailwind CSS</p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white">Backend</h3>
                    <p className="mt-1 text-sm leading-relaxed">Node.js, Express, REST APIs</p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white">Data</h3>
                    <p className="mt-1 text-sm leading-relaxed">PostgreSQL, Neon, Prisma, SQL</p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white">Analytics</h3>
                    <p className="mt-1 text-sm leading-relaxed">Data analysis, dashboards, metrics & insights</p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white">Software Engineering</h3>
                    <p className="mt-1 text-sm leading-relaxed">Python, Java, C++, Git, System Design Fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <div className="mt-10">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-lg">
              <h2 className="text-xl font-semibold text-white">
                My approach to building projects
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                I see projects as more than just technical exercises — they’re
                opportunities to explore how ideas turn into experiences that
                people actually use...
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
