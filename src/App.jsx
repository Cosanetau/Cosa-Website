import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Mail,
  Menu,
  Shield,
  Users,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const coreFeatures = [
  "Bookings calendar",
  "Workshop job management",
  "Customer details",
  "Customer and vehicle history",
  "Quotes and invoices",
  "30-day account customers",
  "Payment terms",
  "Overdue tracking",
  "Reporting",
  "SMS reminders",
  "Staff accounts",
  "Two main controllers",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/" },
    { label: "COSA Core", href: "/core" },
    { label: "Contact Us", href: "/contact" },
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

function HomePage() {
  return (
    <>
      <section className="hero clean-hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Shield size={17} />
            Proudly Perth Built & Operated
          </div>

          <h1>Modern workshop operating software built for real businesses.</h1>

          <p>
            COSA Core helps workshops manage bookings, jobs, customers,
            invoices, account customers, reporting and reminders in one clean
            system that staff can actually use.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/core">
              View COSA Core
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <AboutVideo />

      <section className="section">
        <div className="section-heading">
          <p>What COSA Does</p>
          <h2>Simple workshop software without the chaos.</h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <CalendarDays size={30} />
            <h3>Bookings</h3>
            <p>
              Keep workshop bookings, job dates, customer requests and daily
              workflow organised in one place.
            </p>
          </article>

          <article className="about-card">
            <Wrench size={30} />
            <h3>Workshop Management</h3>
            <p>
              Track jobs, status, notes, staff activity, customer history and
              work that needs attention.
            </p>
          </article>

          <article className="about-card">
            <BarChart3 size={30} />
            <h3>Reporting</h3>
            <p>
              See what is happening across invoices, account customers,
              reminders, jobs and overdue work.
            </p>
          </article>
        </div>
      </section>

      <CorePreview />
    </>
  );
}

function AboutVideo() {
  return (
    <section className="about-video-section">
      <div className="about-video-header">
        <p>Proudly Perth Built & Operated</p>

        <h2>
          COSA Core is designed around real workshop workflows, modern systems
          and simple software that staff can actually use.
        </h2>
      </div>

      <div className="about-video-frame">
        <video src="/about-video.mp4" controls playsInline />
      </div>

      <p className="video-note">
        Add your horizontal video later as public/about-video.mp4.
      </p>
    </section>
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

        <h1>Workshop software for bookings, jobs, invoices and customers.</h1>

        <p>
          COSA Core gives workshops a clean way to manage daily operations,
          customer history, account customers, reminders and reporting.
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
              invoices and reminders in one simple system.
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
              Built for growing workshops that need more staff accounts and room
              to manage larger daily workflows.
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
          <h2>Two main controllers for safer account access.</h2>

          <p className="muted">
            Each business can have two main controllers. They can manage staff
            access, disable users and help keep the account accessible if one
            controller forgets their password.
          </p>

          <div className="feature-list">
            {[
              "Two main controller accounts",
              "Staff accounts",
              "User limits by plan",
              "Disable staff access",
              "Password control planned",
              "Manual billing first, Stripe later",
            ].map((feature) => (
              <div key={feature}>
                <Check size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-panel dark-panel">
          <p className="label">Proudly Perth Built</p>
          <h2>Local software for Australian workshops.</h2>

          <p>
            COSA Core is built in Perth for workshops that want a cleaner,
            simpler and more modern way to run the day.
          </p>
        </div>
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
            "Reporting and SMS reminders",
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
          <h3>Staff friendly.</h3>
          <p>
            Designed to be simple enough for staff to use without needing to be
            good with computers.
          </p>
        </div>

        <div className="side-panel">
          <Shield size={30} />
          <h3>Local and managed.</h3>
          <p>
            Proudly Perth built and operated, with the platform hosted and
            maintained by COSA.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Mail size={17} />
          Contact Us
        </div>

        <h1>Talk to COSA about Core.</h1>

        <p>
          For COSA Core setup, pricing or early access, email COSA directly.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="mailto:caleb@cosa.net.au">
            Email COSA
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="contact-card">
          <p className="label">Email</p>
          <h2>caleb@cosa.net.au</h2>
          <p>
            COSA is proudly built and operated in Perth, Western Australia.
          </p>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 COSA. Proudly Perth Built & Operated.</p>
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
      <Footer />
    </main>
  );
}
