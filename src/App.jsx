import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  FileText,
  Mail,
  Menu,
  MessageSquareText,
  PlugZap,
  Shield,
  Users,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const navLinks = [
  { label: "About Us", href: "/" },
  { label: "COSA Core", href: "/core" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Contact Us", href: "/contact" },
];

const heroStats = [
  { value: "100+", label: "features" },
  { value: "Perth", label: "owned & operated" },
  { value: "5%", label: "off when paying yearly" },
];

const aboutCards = [
  {
    icon: Wrench,
    title: "Built around real workshops",
    text: "COSA Core is designed for the daily flow of bookings, jobs, customers, invoices and account customers.",
  },
  {
    icon: Users,
    title: "Easy for staff to use",
    text: "Clean screens, simple actions and practical tools that do not need a software expert to understand.",
  },
  {
    icon: Shield,
    title: "Proudly Perth operated",
    text: "Built and operated locally for workshops that want better systems without corporate bloat.",
  },
];

const coreFeatures = [
  {
    icon: CalendarDays,
    title: "Bookings calendar",
    text: "Keep bookings organised with clear daily visibility across workshop activity.",
  },
  {
    icon: Wrench,
    title: "Workshop job management",
    text: "Track jobs, job status, notes and work that needs attention from one clean system.",
  },
  {
    icon: FileText,
    title: "Digital job cards",
    text: "Create clean digital job cards with easy formatting and simple printing for workshop use.",
  },
  {
    icon: Users,
    title: "Customer details",
    text: "Store customer information, contact details and useful workshop notes in one place.",
  },
  {
    icon: FileText,
    title: "Customer and vehicle history",
    text: "Quickly view previous work, vehicle records, invoices and customer history.",
  },
  {
    icon: FileText,
    title: "Quotes and invoices",
    text: "Create quotes and invoices with a workflow built around real workshop needs.",
  },
  {
    icon: Shield,
    title: "30-day account customers",
    text: "Manage account customers, payment terms and overdue tracking with better visibility.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    text: "See useful workshop information across jobs, invoices, reminders and account customers.",
  },
  {
    icon: MessageSquareText,
    title: "SMS reminders",
    text: "Keep customers informed with reminders that support smoother workshop communication.",
  },
];

const featurePills = [
  "Bookings calendar",
  "Workshop job management",
  "Digital job cards",
  "Easy formatting and printing",
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
  "Account customer tracking",
  "Workshop reporting tools",
];

const plans = [
  {
    name: "Starter",
    users: "5 users",
    monthlyPrice: 99,
    subject: "COSA Core 5 User Plan",
  },
  {
    name: "Growth",
    users: "10 users",
    monthlyPrice: 149,
    subject: "COSA Core 10 User Plan",
    featured: true,
  },
  {
    name: "Scale",
    users: "20 users",
    monthlyPrice: 249,
    subject: "COSA Core 20 User Plan",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isCorePage = window.location.pathname === "/core";
  const headerCta = isCorePage
    ? { label: "Contact Us", href: "/contact" }
    : { label: "COSA Core", href: "/core" };

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="COSA home">
        <img src="/cosawordlogo.png" alt="COSA logo" />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-button" href={headerCta.href}>
        {headerCta.label}
        <ArrowRight size={16} />
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <a className="mobile-cta" href={headerCta.href} onClick={closeMenu}>
            {headerCta.label}
            <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Shield size={17} />
            Proudly Perth Built & Operated
          </p>

          <h1>Modern workshop operating software built for real businesses.</h1>

          <p className="hero-text">
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

        <div className="hero-media">
          <div className="video-shell">
            <video src="/about-video.mp4" controls playsInline />
          </div>

          <div className="hero-stat-row">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="section">
        <div className="section-heading centered">
          <p className="section-kicker">COSA Core</p>
          <h2>Made for workshops that want less chaos.</h2>
          <span>
            Bookings, jobs, invoices, customers, reminders and reporting in one
            practical operating system.
          </span>
        </div>

        <FeatureGrid />

        <div className="section-cta">
          <a className="primary-button" href="/core">
            Explore COSA Core
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="section-kicker">About Us</p>
        <h2>Software built for the way workshops actually work.</h2>
        <p>
          COSA is focused on clean, modern workshop operating software that
          removes messy admin and gives staff a system they can actually use
          every day.
        </p>
      </div>

      <div className="about-card-grid">
        {aboutCards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className="about-card">
              <Icon size={28} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CorePage() {
  return (
    <>
      <section className="page-intro core-intro">
        <div>
          <p className="eyebrow">
            <Wrench size={17} />
            COSA Core
          </p>

          <h1>Workshop software for bookings, jobs, invoices and customers.</h1>

          <p>
            COSA Core gives workshops a clean way to manage daily operations,
            customer history, account customers, reminders and reporting.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/pricing">
              Review Pricing
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="/contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="preview-card">
          <video src="/cosa-core-preview.mp4" controls playsInline />
        </div>
      </section>

      <AboutSection />

      <section className="section">
        <div className="section-heading centered">
          <p className="section-kicker">Features</p>
          <h2>Everything needed to run the workshop day cleaner.</h2>
          <span>
            COSA Core keeps the same software features across every plan. The
            only difference is the amount of users.
          </span>
        </div>

        <FeatureGrid />
      </section>

      <section className="section compact-section">
        <div className="feature-strip">
          {featurePills.map((feature) => (
            <div key={feature} className="feature-pill">
              <Check size={17} />
              {feature}
            </div>
          ))}
        </div>
      </section>

      <ControllerSection />
    </>
  );
}

function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const isYearly = billingCycle === "yearly";

  function getYearlyPrice(monthlyPrice) {
    return Math.round(monthlyPrice * 12 * 0.95);
  }

  function getDiscountedMonthlyPrice(monthlyPrice) {
    return (monthlyPrice * 0.95).toFixed(2);
  }

  return (
    <>
      <section className="pricing-hero">
        <p className="eyebrow">
          <FileText size={17} />
          Pricing
        </p>

        <h1>Simple COSA Core pricing.</h1>

        <p>
          All COSA Core plans include the same software features. You only pick
          the amount of users your business needs.
        </p>

        <div className="billing-toggle-wrap">
          <div className="billing-toggle" aria-label="Billing cycle">
            <button
              type="button"
              className={!isYearly ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className={isYearly ? "active" : ""}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>

          <p>
            <strong>5%</strong>
            <span>off when paying yearly</span>
          </p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="pricing-grid">
          {plans.map((plan) => {
            const yearlyPrice = getYearlyPrice(plan.monthlyPrice);
            const discountedMonthlyPrice = getDiscountedMonthlyPrice(
              plan.monthlyPrice,
            );

            return (
              <article
                key={plan.name}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
              >
                <div>
                  <p className="plan-name">{plan.name}</p>
                  <h3>{plan.users}</h3>

                  {isYearly ? (
                    <>
                      <strong>${discountedMonthlyPrice}/month</strong>
                      <p className="gst-note">All prices include GST.</p>
                      <p className="yearly-note">
                        ${yearlyPrice}/year paid upfront to receive the yearly
                        discount.
                      </p>
                    </>
                  ) : (
                    <>
                      <strong>${plan.monthlyPrice}/month</strong>
                      <p className="gst-note">All prices include GST.</p>
                    </>
                  )}

                  <p>
                    Includes all COSA Core features. Plans are based on user
                    limits only.
                  </p>
                </div>

                <a href={`mailto:caleb@cosa.net.au?subject=${plan.subject}`}>
                  Start {plan.users} plan
                  <ChevronRight size={18} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="custom-plan-card">
          <div>
            <p className="section-kicker">Need more users?</p>
            <h2>Reach out to COSA for custom software opportunities.</h2>
            <p>
              If your workshop needs more users, extra workflow planning or a
              custom setup, COSA can discuss a plan that fits the business.
            </p>
          </div>

          <a className="primary-button" href="/contact">
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function IntegrationsPage() {
  return (
    <section className="integrations-page">
      <div className="integrations-panel">
        <p className="eyebrow">
          <PlugZap size={17} />
          Integrations
        </p>

        <h1>Integrations are in progress.</h1>

        <p>
          COSA Core integrations are currently being planned and built. The
          first integration release target is 1 July 2026.
        </p>

        <div className="integration-center">
          <div className="integration-status">
            <span>Work in progress</span>
            <strong>Target: 1 July 2026</strong>
          </div>

          <a className="primary-button" href="/contact">
            Ask about integrations
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ControllerSection() {
  return (
    <section className="section">
      <div className="controller-panel">
        <div>
          <p className="section-kicker">Account Control</p>
          <h2>Two main controllers for safer account access.</h2>
          <p>
            Each company can have two main controller accounts. Controllers can
            manage staff accounts, disable users and help keep accounts secure
            and accessible.
          </p>
        </div>

        <div className="controller-list">
          {[
            "Two main controller accounts",
            "Controllers manage staff accounts",
            "Controllers can disable users",
            "Staff accounts included",
            "Accounts stay secure and accessible",
          ].map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <div className="feature-grid">
      {coreFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon">
              <Icon size={24} />
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.text}</p>

            <a href="/contact">
              Contact Us
              <ChevronRight size={17} />
            </a>
          </article>
        );
      })}
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mojbqzpn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return;
    }

    form.reset();
    setSent(true);
  }

  return (
    <section className="contact-page">
      <div className="contact-panel">
        <p className="eyebrow">
          <Mail size={17} />
          Contact Us
        </p>

        <h1>Modern workshop software proudly built and operated in Perth.</h1>

        <p>
          COSA Core is designed around real workshop workflows, modern systems
          and simple software that staff can actually use.
        </p>

        <div className="contact-mini-grid">
          {["Bookings", "Customers", "Reporting"].map((item) => (
            <div key={item} className="contact-mini-card">
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {sent ? (
          <div className="success-message">
            <Check size={34} />
            <h2>Message sent.</h2>
            <p>COSA will get back to you shortly.</p>
          </div>
        ) : (
          <>
            <div className="form-heading">
              <p className="section-kicker">Enquiry Form</p>
              <h2>Tell us what you need.</h2>
            </div>

            <label>
              Name
              <input name="name" type="text" required />
            </label>

            <label>
              Business name
              <input name="business" type="text" required />
            </label>

            <label>
              What are you looking for?
              <textarea name="message" rows="5" required />
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
          </>
        )}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <img src="/cosawordlogo.png" alt="COSA logo" />
        <p>© 2026 COSA. Proudly Perth Built & Operated.</p>
      </div>

      <nav>
        <a href="/">About Us</a>
        <a href="/core">COSA Core</a>
        <a href="/pricing">Pricing</a>
        <a href="/integrations">Integrations</a>
        <a href="/contact">Contact Us</a>
        <a href="mailto:caleb@cosa.net.au">caleb@cosa.net.au</a>
      </nav>
    </footer>
  );
}

function getPage() {
  const path = window.location.pathname;

  if (path === "/core") {
    return <CorePage />;
  }

  if (path === "/pricing") {
    return <PricingPage />;
  }

  if (path === "/integrations") {
    return <IntegrationsPage />;
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
