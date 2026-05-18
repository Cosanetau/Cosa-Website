import React from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  Globe2,
  Lock,
  Shield,
  Wrench,
} from "lucide-react";
import "./index.css";

const services = [
  {
    icon: Wrench,
    title: "Workshop Software",
    description:
      "Live job boards, technician tracking, vehicle status, parts workflows and custom tools built around your real process.",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    description:
      "Replace spreadsheets, whiteboards and repeated admin with clean software your team can use from any device.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Track jobs, revenue, follow-ups, delays and team activity without digging through paperwork.",
  },
];

const features = [
  "Cloud hosted and accessible anywhere",
  "Secure staff logins and password management",
  "Designed for phones, tablets, PCs and workshop TVs",
  "Custom workflows for your exact business",
  "Up to 15 starting user accounts",
  "Ongoing updates and support",
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">C</div>
          <span>COSA</span>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-button" href="mailto:hello@cosa.net.au">
          Start a project
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Shield size={17} />
            Custom operating software for Australian businesses
          </div>

          <h1>Premium software built around your business.</h1>

          <p>
            COSA designs and builds custom internal software for workshops,
            service businesses and growing teams that need cleaner systems than
            spreadsheets, whiteboards and generic apps.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@cosa.net.au">
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
              <p>Live Operations</p>
              <h2>Workshop Command</h2>
            </div>

            <span>Online</span>
          </div>

          <div className="job-grid">
            {[
              ["Bay 1", "BMW X5", "In Progress", "2h 15m"],
              ["Bay 2", "Toyota Hilux", "Waiting Parts", "1d"],
              ["Bay 3", "Mazda 3", "Ready", "Now"],
              ["Front", "Ford Ranger", "Customer Approval", "Urgent"],
            ].map(([bay, vehicle, status, time]) => (
              <div className="job-card" key={bay}>
                <div>
                  <strong>{bay}</strong>
                  <small>{time}</small>
                </div>
                <p>{vehicle}</p>
                <span>{status}</span>
              </div>
            ))}
          </div>

          <div className="snapshot">
            <p>Today’s snapshot</p>

            <div>
              <strong>18</strong>
              <span>Active jobs</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Ready</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Delayed</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p>What we build</p>
          <h2>Systems that fit the way your team already works.</h2>
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
            COSA is built for businesses that want software that feels simple
            for staff but powerful for management.
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
              Office PC, workshop TV, tablet, phone or home laptop. Your team
              can access the system securely wherever they need it.
            </p>
          </div>

          <div className="side-panel">
            <Lock size={30} />
            <h3>Secure by default.</h3>
            <p>
              User accounts, role access, password resets and managed login
              control are built into the platform from the start.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Ready to build your operating system?</h2>
        <p>
          Tell us what your business is currently doing manually and we’ll help
          turn it into clean custom software.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="mailto:hello@cosa.net.au">
            hello@cosa.net.au
          </a>

          <a className="secondary-button" href="https://cosa.net.au">
            cosa.net.au
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 COSA. Custom operating software for Australian businesses.</p>
        <p>Built in Australia.</p>
      </footer>
    </main>
  );
}
