import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Cpu,
  HardDrive,
  Laptop,
  Mail,
  Menu,
  Monitor,
  Phone,
  Shield,
  Sparkles,
  TabletSmartphone,
  Users,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const coreFeatures = [
  {
    icon: CalendarDays,
    title: "Bookings",
    description: "Manage workshop bookings, due dates, jobs and customer requests.",
  },
  {
    icon: Wrench,
    title: "Workshop Management",
    description: "Track jobs, status, staff, notes and the work happening each day.",
  },
  {
    icon: Users,
    title: "Customer History",
    description: "Keep customer details, vehicle/job history, invoices and notes together.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "See what is happening across jobs, invoices, accounts and workflow.",
  },
];

const customSoftware = [
  "Custom dashboards",
  "Internal business systems",
  "Booking systems",
  "Customer portals",
  "Automation tools",
  "Staff workflow systems",
];

const hardwareServices = [
  "Workshop TV job boards",
  "Front counter PCs",
  "Office workstations",
  "Tablets for staff",
  "Printers and scanners",
  "Networking and setup",
];

const dashboardItems = [
  ["Bookings", "Today", "18 jobs", "Live"],
  ["Workshop", "In Progress", "9 vehicles", "Active"],
  ["Accounts", "Due Soon", "$8.4k", "30 Days"],
  ["Reminders", "Ready", "24 SMS", "Queued"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/" },
    { label: "COSA Core", href: "/core" },
    { label: "Custom Software", href: "/custom-software" },
    { label: "Custom Hardware", href: "/custom-hardware" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="COSA home">
        <img src="/cosawordlogo.png" alt="COSA logo" />
      </a>

      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-button" href="/contact">
        Start a project
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <a className="mobile-cta" href="/contact">
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}

function DashboardCard() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-top">
        <div>
          <p>COSA Core</p>
          <h2>Workshop Command Centre</h2>
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
          <strong>18</strong>
          <span>Bookings</span>
        </div>

        <div>
          <strong>9</strong>
          <span>Active jobs</span>
        </div>

        <div>
          <strong>4</strong>
          <span>Waiting</span>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Shield size={17} />
            Built around the way your business works.
          </div>

          <h1>
            Workshop software, custom business systems and hardware setups.
          </h1>

          <p>
            COSA builds simple software and hardware systems that help
            Australian businesses manage bookings, jobs, customers, invoices,
            reporting and daily workflow.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/contact">
              Start a project
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="/core">
              View COSA Core
            </a>
          </div>
        </div>

        <DashboardCard />
      </section>

      <section className="section">
        <div className="section-heading">
          <p>What COSA Does</p>
          <h2>Business systems people can understand in seconds.</h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <Wrench size={30} />
            <h3>COSA Core</h3>
            <p>
              Workshop operating software for bookings, jobs, customers,
              invoices, account customers, reporting and reminders.
            </p>
          </article>

          <article className="about-card">
            <Cpu size={30} />
            <h3>Custom Software</h3>
            <p>
              Custom systems built around the way your business works instead of
              forcing your team into generic software.
            </p>
          </article>

          <article className="about-card">
            <Monitor size={30} />
            <h3>Custom Hardware</h3>
            <p>
              Workshop displays, office PCs, tablets, printers, networking and
              full setup support for your business.
            </p>
          </article>
        </div>
      </section>

      <CorePreview />
      <FeatureSection />
    </>
  );
}

function CorePage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Wrench size={17} />
          COSA Core
        </div>

        <h1>Modern operating software for automotive workshops.</h1>

        <p>
          COSA Core helps workshops manage bookings, jobs, customers, account
          customers, invoices, history, reports and reminders in one clean
          system.
        </p>
      </section>

      <section className="section">
        <div className="service-grid">
          {coreFeatures.map((service) => {
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

      <section className="section tight-section">
        <div className="section-heading">
          <p>Core Features</p>
          <h2>Built for how workshops actually operate.</h2>
        </div>

        <div className="feature-grid">
          {[
            "Customer details",
            "Bookings calendar",
            "Workshop job management",
            "Customer and vehicle history",
            "Quotes and invoices",
            "30-day account customers",
            "Payment terms",
            "Overdue tracking",
            "Reporting",
            "SMS reminders",
            "Staff accounts",
            "Integrations",
          ].map((feature) => (
            <div key={feature} className="feature-pill">
              <Check size={17} />
              {feature}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CustomSoftwarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Cpu size={17} />
          Custom Software
        </div>

        <h1>Software built around your business workflow.</h1>

        <p>
          COSA designs and builds custom software for businesses that need
          cleaner operations, better visibility and tools that match the way
          their team actually works.
        </p>
      </section>

      <section className="section">
        <div className="simple-list">
          {customSoftware.map((item) => (
            <article key={item} className="simple-card">
              <Sparkles size={24} />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <FeatureSection />
    </>
  );
}

function CustomHardwarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Monitor size={17} />
          Custom Hardware
        </div>

        <h1>Hardware setups that support your software and workflow.</h1>

        <p>
          COSA can help with the screens, computers, tablets, printers,
          networking and devices your team needs to run your system properly.
        </p>
      </section>

      <section className="section">
        <div className="hardware-grid">
          {hardwareServices.map((item) => (
            <article className="service-card" key={item}>
              <div className="icon-box">
                {item.includes("PC") || item.includes("workstation") ? (
                  <Laptop size={25} />
                ) : item.includes("tablet") ? (
                  <TabletSmartphone size={25} />
                ) : item.includes("network") ? (
                  <HardDrive size={25} />
                ) : (
                  <Monitor size={25} />
                )}
              </div>

              <h3>{item}</h3>
              <p>
                Supplied, configured and set up so your team can use it without
                needing to understand the technical side.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Mail size={17} />
          Contact
        </div>

        <h1>Tell COSA what you want to build.</h1>

        <p>
          Send through what your business does, what is slowing your team down
          and what kind of software or hardware system you need.
        </p>
      </section>
    </>
  );
}

function CorePreview() {
  return (
    <section className="split-section">
      <div className="feature-panel">
        <p className="label">COSA Core</p>

        <h2>Made for workshops that want less chaos.</h2>

        <p className="muted">
          COSA Core is built to help workshops see what is booked, what is in
          progress, what needs attention and who still needs to pay.
        </p>

        <div className="feature-list">
          {[
            "Bookings and job tracking",
            "Customer and vehicle history",
            "Quotes and invoices",
            "30-day account customers",
            "Reporting and reminders",
          ].map((feature) => (
            <div key={feature}>
              <Check size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <DashboardCard />
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="split-section">
      <div className="feature-panel">
        <p className="label">Why COSA</p>

        <h2>Built for real businesses, not just tech people.</h2>

        <p className="muted">
          COSA focuses on simple systems that staff can actually use. We keep
          the wording clear, the screens clean and the workflow practical.
        </p>

        <div className="feature-list">
          {[
            "Designed for phones, tablets, PCs and TVs",
            "Hosted and maintained by COSA",
            "Secure staff logins",
            "Custom changes available",
            "Ongoing support and improvements",
          ].map((feature) => (
            <div key={feature}>
              <Check size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="side-panels">
        <div className="side-panel highlight">
          <Wrench size={30} />
          <h3>Workshop ready.</h3>
          <p>
            Built around bookings, jobs, customers, invoices, account customers
            and reminders.
          </p>
        </div>

        <div className="side-panel">
          <Cpu size={30} />
          <h3>Custom software.</h3>
          <p>
            Need something different? COSA can build custom systems around your
            exact workflow.
          </p>
        </div>

        <div className="side-panel">
          <Monitor size={30} />
          <h3>Custom hardware.</h3>
          <p>
            Screens, workstations, tablets and devices set up to support the
            software.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-copy">
        <p className="label">Start a project</p>

        <h2>Ready to clean up your workflow?</h2>

        <p>
          Tell us what your business does and what feels messy. COSA will help
          turn it into a simple software, hardware or full workflow system.
        </p>

        <div className="contact-details">
          <a href="mailto:caleb@cosa.net.au">
            <Mail size={18} />
            caleb@cosa.net.au
          </a>

          <a href="tel:">
            <Phone size={18} />
            Phone available on request
          </a>
        </div>
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
          What are you looking to improve?
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
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 COSA. Software. Hardware. Workflow.</p>
      <p>Built in Australia.</p>
    </footer>
  );
}

function getPage() {
  const path = window.location.pathname;

  if (path === "/core") {
    return <CorePage />;
  }

  if (path === "/custom-software") {
    return <CustomSoftwarePage />;
  }

  if (path === "/custom-hardware") {
    return <CustomHardwarePage />;
  }

  if (path === "/contact") {
    return <ContactPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <main>
      <Header />
      {getPage()}
      <ContactSection />
      <Footer />
    </main>
  );
}
