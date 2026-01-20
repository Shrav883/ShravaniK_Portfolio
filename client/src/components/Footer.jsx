export default function Footer() {
  return (
    <footer
      className="
        backdrop-blur-md
        bg-[#2b1b14]/70
        border-t border-white/10
        px-4 py-6
      "
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Shravani Kardekar
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:shravanikardekar@gmail.com"
            className="text-white/70 hover:text-white transition"
          >
            shravanikardekar@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/shravani-kardekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Shrav883"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
