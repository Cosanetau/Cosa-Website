import React from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  Globe2,
  HardDrive,
  Laptop,
  Lock,
  Monitor,
  MonitorSmartphone,
  Shield,
  Sparkles,
  TabletSmartphone,
  Workflow,
} from "lucide-react";
import "./index.css";

const softwareServices = [
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
      "Tools for jobs, tasks, approvals, stock, staff activity, follow-ups and day-to-day operations.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "Clean dashboards and useful reporting so management can see what is happening across the business.",
  },
];

const hardwareServices = [
  {
    icon: Laptop,
    title: "Business Workstations",
    description:
      "Custom powerful PCs built around your company needs, from admin systems to CAD, media and high-performance workstations.",
  },
  {
    icon: Monitor,
    title: "Displays & Job Boards",
    description:
      "TVs and display setups for live job boards, production dashboards, team status screens and front-of-house displays.",
  },
  {
    icon: TabletSmartphone,
    title: "Tablets & Mobile Devices",
    description:
      "Tablet setups for technicians, warehouse teams, field staff and mobile job management.",
  },
  {
    icon: MonitorSmartphone,
    title: "Device Setup",
    description:
      "We can help set up the devices your team needs so your software and hardware work together properly.",
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
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="COSA home">
          <img src="/cosawordlogo.png" alt="COSA logo" />
        </a>

        <nav>
          <a href="#about">About Us</a>
          <a href="#software">Software</a>
          <a href="#hardware">Hardware</a>
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
            Business operating systems for Australian companies
          </div>

          <h1>Premium software and hardware built around your business</h1>

          <p>
            COSA builds custom business systems that combine software, devices,
            displays and managed support so your team can work cleaner, faster
            and with better visibility.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Build my system
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#software">
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

      <section id="about" className="section">
        <div className="section-heading">
          <p>About Us</p>

          <h2>
            COSA helps businesses replace messy systems with clean operations.
          </h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <Sparkles size={30} />

            <h3>Built around your business</h3>

            <p>
              We do not force your team into generic software. We build around
              the way your business already works, then make it cleaner and more
              organised.
            </p>
          </article>

          <article className="about-card">
            <Globe2 size={30} />

            <h3>Managed by COSA</h3>

            <p>
              Your system is hosted, maintained and supported by COSA so your
              team can focus on running the business instead of managing the
              tech.
            </p>
          </article>

          <article className="about-card">
            <Lock size={30} />

            <h3>Made to scale</h3>

            <p>
              From small teams to growing operations, COSA systems are designed
              with secure accounts, clear access and room to expand.
            </p>
          </article>
        </div>
      </section>

      <section id="software" className="section">
        <div className="section-heading">
          <p>Software</p>

          <h2>Custom systems that make your business easier to run.</h2>
        </div>

        <div className="service-grid">
          {softwareServices.map((service) => {
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

      <section id="hardware" className="section">
        <div className="section-heading">
          <p>Hardware</p>

          <h2>
            The right devices to support the system behind your business.
          </h2>
        </div>

        <div className="hardware-grid">
          {hardwareServices.map((service) => {
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
            COSA builds practical internal systems that are simple for staff to
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
            <HardDrive size={30} />

            <h3>Managed systems.</h3>

            <p>
              COSA hosts, maintains and supports your platform so your business
              gets a clean system without needing to manage the technical side.
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
              Your systems should look sharp, feel simple and make your
              business feel more organised every time your team opens them.
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
            software, hardware or full business system.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/mojbqzpn"
          method="POST"
        >
          <label>
            Name
            <input name="name" type="text" required />
          </label>

          <label>
            What are you looking to have made?
            <textarea name="project" rows="5" required />
          </label>

          <label>
            Email address
            <input name="email" type="email" required />
          </label>

          <label>
            Phone number
            <input name="phone" type="tel" />
          </label>

          <button type="submit">
            Send enquiry
            <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <footer>
        <p>© 2026 COSA. Business operating systems for Australian companies.</p>

        <p>Built in Australia.</p>
      </footer>
    </main>
  );
}
