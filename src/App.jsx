import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  HardDrive,
  Laptop,
  Mail,
  Menu,
  Monitor,
  Shield,
  Sparkles,
  TabletSmartphone,
  Users,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const dashboardItems = [
  ["Bookings", "Today", "18 jobs", "Live"],
  ["Workshop", "In Progress", "9 vehicles", "Active"],
  ["Accounts", "Due Soon", "$8.4k", "30 Days"],
  ["Reminders", "Ready", "24 SMS", "Queued"],
];

const coreFeatures = [
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
  "Main account controller",
];

const workstationTiers = [
  {
    name: "COSA Core Workstation",
    price: "$1,499",
    description:
      "For front counters, admin desks, invoicing, workshop software, emails and everyday business use.",
    specs: ["Compact premium case", "32GB RAM", "1TB NVMe SSD", "Windows ready"],
  },
  {
    name: "COSA Performance Workstation",
    price: "$2,299",
    description:
      "For businesses that need heavier multitasking, multiple screens, large files and smoother long-term performance.",
    specs: ["Compact premium case", "64GB RAM", "2TB NVMe SSD", "Performance cooling"],
  },
  {
    name: "COSA Ultra Workstation",
    price: "$3,499+",
    description:
      "For demanding workloads like editing, CAD, creative work and large multi-display setups.",
    specs: ["High-end CPU", "64GB+ RAM", "Large NVMe storage", "Dedicated GPU option"],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/" },
    { label: "COSA Core", href: "/core" },
    { label: "Workstations", href: "/workstations" },
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

      <a className="header-button" href="/core">
        View COSA Core
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

          <a className="mobile-cta" href="/core">
            View COSA Core
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

          <h1>COSA Core and workstation systems for Australian businesses.</h1>

          <p>
            COSA builds modern workshop software and fast business workstations
            that help companies manage bookings, jobs, customers, invoices,
            reporting and daily workflow without messy systems or slow computers.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/core">
              View COSA Core
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="/workstations">
              View Workstations
            </a>
          </div>
        </div>

        <DashboardCard />
      </section>

      <section className="video-section">
        <div className="section-heading">
          <p>About COSA</p>
          <h2>A clean system for businesses that want less chaos.</h2>
        </div>

        <div className="video-frame">
          <video src="/about-video.mp4" controls playsInline />
        </div>

        <p className="video-note">
          Add your horizontal video later as public/about-video.mp4.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>What COSA Does</p>
          <h2>Two simple offers. No confusing tech talk.</h2>
        </div>

        <div className="about-grid two-column">
          <article className="about-card">
            <Wrench size={30} />
            <h3>COSA Core</h3>
            <p>
              Workshop operating software for bookings, jobs, customers,
              invoices, account customers, reporting, reminders and staff
              access.
            </p>
          </article>

          <article className="about-card">
            <Monitor size={30} />
            <h3>Workstations</h3>
            <p>
              Compact, premium business workstations built to be fast, reliable
              and ready for real workloads without lag.
            </p>
          </article>
        </div>
      </section>

      <CorePreview />
      <WorkstationPreview />
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
        <div className="pricing-grid">
          <article className="pricing-card">
            <p className="label">Starter</p>
            <h3>Up to 10 users</h3>
            <strong>$99/month</strong>
            <p>
              Ideal for small workshops that need bookings, jobs, customers,
              invoices and reminders in one system.
            </p>
            <a href="mailto:caleb@cosa.net.au?subject=COSA Core 10 User Plan">
              Start 10 user plan
            </a>
          </article>

          <article className="pricing-card featured">
            <p className="label">Growth</p>
            <h3>Up to 20 users</h3>
            <strong>$150/month</strong>
            <p>
              Built for growing teams that need more staff accounts and room to
              manage bigger workshop workflows.
            </p>
            <a href="mailto:caleb@cosa.net.au?subject=COSA Core 20 User Plan">
              Start 20 user plan
            </a>
          </article>
        </div>

        <div className="discount-banner">
          Pay yearly upfront and receive 5% off your COSA Core subscription.
        </div>
      </section>

      <section className="section tight-section">
        <div className="section-heading">
          <p>Core Features</p>
          <h2>Built for how workshops actually operate.</h2>
        </div>

        <div className="feature-grid">
          {coreFeatures.map((feature) => (
            <div key={feature} className="feature-pill">
              <Check size={17} />
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="feature-panel">
          <p className="label">Account Control</p>
          <h2>The main controller manages their own team.</h2>

          <p className="muted">
            Each business can have a main account controller who manages staff
            access, user limits, roles and disabled accounts without COSA needing
            to manually control every staff member.
          </p>

          <div className="feature-list">
            {[
              "Owner / main controller account",
              "Staff accounts",
              "User limits by plan",
              "Disable staff access",
              "Role-based access later",
              "Manual billing first, Stripe later",
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
    </>
  );
}

function WorkstationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Monitor size={17} />
          Workstations
        </div>

        <h1>Fast business workstations that do not slow your team down.</h1>

        <p>
          COSA Workstations are compact, premium systems built for workshops,
          offices, front counters, multi-display setups and business workloads
          that need speed and reliability without lag.
        </p>
      </section>

      <section className="section">
        <div className="coming-soon">
          <p className="label">Coming Soon</p>
          <h2>Check back on July 1st 2026.</h2>
          <p>
            COSA workstation systems are being built around small premium cases,
            clean parts, reliable performance and ready-to-use business setups.
          </p>
        </div>
      </section>

      <section className="section tight-section">
        <div className="section-heading">
          <p>Planned Workstation Levels</p>
          <h2>Three clean options for different workloads.</h2>
        </div>

        <div className="workstation-grid">
          {workstationTiers.map((tier) => (
            <article className="workstation-card" key={tier.name}>
              <Laptop size={28} />
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.description}</p>

              <div className="spec-list">
                {tier.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <FeatureSection />
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
            "Reporting and SMS reminders",
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

function WorkstationPreview() {
  return (
    <section className="split-section">
      <div className="feature-panel">
        <p className="label">Workstations</p>

        <h2>Built for speed, reliability and no lag.</h2>

        <p className="muted">
          COSA Workstations are planned as compact, premium business PCs that
          arrive ready to use. They are made for workshops and businesses that
          need reliable systems without gamer styling or slow office computers.
        </p>

        <div className="feature-list">
          {[
            "Compact premium builds",
            "No RGB gamer styling",
            "Windows ready",
            "Drivers configured",
            "Tested before shipping",
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
          <Laptop size={30} />
          <h3>Ready to use.</h3>
          <p>
            Built, configured and tested before shipping so the customer can
            plug it in and start working.
          </p>
        </div>

        <div className="side-panel">
          <Monitor size={30} />
          <h3>Multiple displays.</h3>
          <p>
            Designed for real business desks, front counters and multi-screen
            workflows.
          </p>
        </div>

        <div className="side-panel">
          <HardDrive size={30} />
          <h3>Reliable parts.</h3>
          <p>
            Focused on clean performance, quiet operation and long-term daily
            use.
          </p>
        </div>
      </div>
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
          COSA focuses on simple systems that staff can actually use. The
          wording is clear, the screens are clean and the workflow is practical.
        </p>

        <div className="feature-list">
          {[
            "Easy for staff to understand",
            "Designed for phones, tablets, PCs and TVs",
            "Hosted and maintained by COSA",
            "Secure staff logins",
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
          <Users size={30} />
          <h3>Controlled accounts.</h3>
          <p>
            The main account controller can manage staff access without COSA
            manually handling every user.
          </p>
        </div>

        <div className="side-panel">
          <Sparkles size={30} />
          <h3>Simple and premium.</h3>
          <p>
            Clean design, clear wording and systems that make the business feel
            more organised.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 COSA. Built around the way your business works.</p>
      <a href="mailto:caleb@cosa.net.au">
        <Mail size={16} />
        caleb@cosa.net.au
      </a>
    </footer>
  );
}

function getPage() {
  const path = window.location.pathname;

  if (path === "/core") {
    return <CorePage />;
  }

  if (path === "/workstations") {
    return <WorkstationsPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <main>
      <Header />
      {getPage()}
      <Footer />
    </main>
  );
}
