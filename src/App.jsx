import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  Globe2,
  Lock,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./index.css";

const services = [
  {
    icon: Cpu,
    title: "Custom Business Software",
    description:
      "Purpose-built systems for businesses that have outgrown spreadsheets, whiteboards and generic apps.",
  },
  {
    icon: Workflow,
    title: "Workflow Systems",
    description:
      "Internal tools that help your team manage jobs, tasks, approvals, stock, staff activity and day-to-day operations.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Automation",
    description:
      "Clean dashboards, useful reports and automated admin processes built around what your business actually needs.",
  },
];

const features = [
  "Hosted, maintained and managed by COSA",
  "Secure staff logins and password management",
  "Designed for phones, tablets, PCs and display screens",
  "Custom workflows for your exact business",
  "Scalable user accounts for growing teams",
  "Ongoing updates, support and improvements",
];

const dashboardItems = [
  ["Operations", "Active", "32 tasks", "Live"],
  ["Approvals", "Waiting", "7 requests", "Review"],
  ["Follow-Ups", "Due Today", "14 leads", "Action"],
  ["Reporting", "Updated", "$18.4k tracked", "Today"],
];

export default function App() {
  const [form, setForm] = useState({
    name: "",
    project: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent("New COSA website enquiry");

    const body = encodeURIComponent(
      `Name: ${form.name}

What they are looking to have made:
${form.project}

Email: ${form.email}
Phone: ${form.phone}`
    );

    window.location.href = `mailto:hello@cosa.net.au?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="COSA home">
          <img src="/cosawordlogo.png" alt="COSA logo" />
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-button" href="#contact">
          Start a project
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Shield size={17} />
            Custom operating software for Australian businesses
          </div>

          <h1>Premium software built around your business</h1>

          <p>
            COSA designs and builds custom internal software for businesses that
            need cleaner systems, better visibility and tools that actually fit
            how their team works.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Build my system
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#services">
              View services
            </a>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-top">
            <div>
              <p>Business Operations</p>
              <h2>Command Centre</h2>
            </div>

            <span>Online</span>
          </div>

          <div className="job-grid">
            {dashboardItems.map(([area, status, detail, tag]) => (
              <div className="job-card" key={area}>
                <div>
                  <strong>{area}</strong>
                  <small>{tag}</small>
                </div>

                <p>{detail}</p>
                <span>{status}</span>
              </div>
            ))}
          </div>

          <div className="snapshot">
            <p>Today’s snapshot</p>

            <div>
              <strong>48</strong>
              <span>Active items</span>
            </div>

            <div>
              <strong>12</strong>
              <span>Completed</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Needs review</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p>What we build</p>
          <h2>Systems that fit the way your business already works.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={25} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="features" className="split-section">
        <div className="feature-panel">
          <p className="label">Included</p>

          <h2>Built properly from day one.</h2>

          <p className="muted">
            COSA builds practical internal software that is simple for staff to
            use and powerful enough for management to rely on.
          </p>

          <div className="feature-list">
            {features.map((feature) => (
              <div key={feature}>
                <Check size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="side-panels">
          <div className="side-panel highlight">
            <Globe2 size={30} />

            <h3>Access anywhere.</h3>

            <p>
              Your business systems can be used from the office, on-site, at
              home or on the move with secure access for your team.
            </p>
          </div>

          <div className="side-panel">
            <Lock size={30} />

            <h3>Secure by default.</h3>

            <p>
              Staff accounts, role access, password resets and managed login
              control are built into the platform from the start.
            </p>
          </div>

          <div className="side-panel">
            <Sparkles size={30} />

            <h3>Made to feel premium.</h3>

            <p>
              Your software should look sharp, feel simple and make your
              business feel more organised every time your team opens it.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="label">Start a project</p>

          <h2>Tell us what you want built.</h2>

          <p>
            Send through the basic idea and COSA will help turn it into a clean
            internal system for your business.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            What are you looking to have made?
            <textarea
              name="project"
              rows="5"
              value={form.project}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email address
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </label>

          <button type="submit">
            Send enquiry
            <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <footer>
        <p>© 2026 COSA. Custom operating software for Australian businesses.</p>

        <p>Built in Australia.</p>
      </footer>
    </main>
  );
}
