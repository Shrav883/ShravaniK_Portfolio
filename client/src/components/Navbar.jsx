import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-xl px-3 py-2 text-sm font-medium transition text-white/80 hover:bg-white/10 hover:text-white";

const linkActive =
  "bg-white/15 text-white backdrop-blur";

function LinkItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? linkActive : ""}`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-[#2b1b14]/70
        border-b border-white/10
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="text-base font-semibold tracking-wide text-white"
        >
          Shravani Kardekar
        </NavLink>

        <nav className="flex items-center gap-4">
          <LinkItem to="/" label="About" />
          <LinkItem to="/experience" label="Experience" />
          <LinkItem to="/projects" label="Projects" />
          <LinkItem to="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}
