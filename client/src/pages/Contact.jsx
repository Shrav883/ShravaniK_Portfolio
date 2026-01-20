import { useMemo, useState } from "react";
import Footer from "../components/Footer.jsx";
import contactVideo from "../assets/contact_bg.mp4";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | error

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden text-white">
      {/* 🎥 Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={contactVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Layout */}
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] flex-col">
        {/* Centered content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-10">
          {/* Form OR Thank You */}
          {!success ? (
            <form
              onSubmit={onSubmit}
              className="w-full max-w-xl rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
            >
              <h1 className="mb-2 text-3xl font-semibold">Contact</h1>
              <p className="mb-6 text-sm text-white/70">
                Leave a message and I’ll get back to you.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  error={submitted ? errors.name : undefined}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  error={submitted ? errors.email : undefined}
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Phone (optional)"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  error={submitted ? errors.message : undefined}
                  textarea
                  rows={6}
                />
              </div>

              {/* Alert only after submit */}
              {submitted && status === "error" && (
                <div className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                  Please fill out all required fields.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-xl bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:bg-white/30"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="w-full max-w-xl text-center">
              <h2 className="text-4xl font-semibold">Thank you</h2>
              <p className="mt-3 text-white/75">
                Your message has been sent successfully.
                <br />
                I’ll get back to you soon.
              </p>
            </div>
          )}

          {/* Divider */}
          <div className="mt-6 h-px w-full max-w-xl bg-white/15" />

          {/* Contact Info Box — BELOW */}
          <div className="mt-6 w-full max-w-xl rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Or reach me directly
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-white/60">Email</span>
                <a
                  href="mailto:sk.shravani883@gmail.com"
                  className="font-medium text-white hover:underline"
                >
                  shravanikardekar@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-white/60">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/shravani-kardekar/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white hover:underline"
                >
                  linkedin.com/in/shravanikardekar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/25 backdrop-blur-sm">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  rows = 4,
}) {
  const base =
    "mt-2 w-full rounded-xl border bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40";
  const border = error
    ? "border-red-400/40 focus:border-red-300/60"
    : "border-white/20 focus:border-white/40";

  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${base} ${border}`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`${base} ${border}`}
        />
      )}
      {error && <div className="mt-1 text-xs text-red-200">{error}</div>}
    </label>
  );
}
