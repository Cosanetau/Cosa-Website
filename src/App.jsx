import React, { useEffect, useState } from "react";
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
import { getAllIntegrations, getIntegrationStats } from "./data/integrationsCatalog";
import "./index.css";

const CORE_APP_LOGIN_URL = "https://core.cosa.net.au/login";
const CORE_APP_URL = "https://core.cosa.net.au";

function getSubscribeUrl(planKey, billingCycle) {
  return `${CORE_APP_URL}/subscribe?plan=${planKey}&billing=${billingCycle}`;
}

const pageMeta = {
  "/": {
    title: "COSA | Workshop software built in Perth",
    description:
      "COSA Core helps workshops manage bookings, job cards, customers, invoices and reporting in one practical system.",
  },
  "/core": {
    title: "COSA Core | Workshop operating software",
    description:
      "Explore COSA Core — bookings, jobs, digital job cards, invoices, customers and workshop reporting.",
  },
  "/pricing": {
    title: "COSA Core pricing | Workshop software plans",
    description:
      "Simple COSA Core pricing based on user limits. Pay monthly or yearly and get one month free on annual plans.",
  },
  "/integrations": {
    title: "COSA Core integrations | Accounting, parts, and marketing",
    description:
      "Connect COSA Core with Xero today. MYOB, QuickBooks, parts suppliers, marketing tools, and the COSA mobile app are coming soon.",
  },
  "/contact": {
    title: "Contact COSA",
    description: "Contact COSA for workshop software, pricing and custom setup enquiries.",
  },
  "/privacy": {
    title: "COSA privacy policy",
    description: "How COSA handles workshop software account and enquiry information.",
  },
  "/terms": {
    title: "COSA terms of service",
    description: "Terms for using COSA Core workshop software and related services.",
  },
};

function PageMeta() {
  const path = window.location.pathname;
  const meta = pageMeta[path] || pageMeta["/"];

  useEffect(() => {
    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", meta.description);
  }, [meta.description, meta.title]);

  return null;
}

const navLinks = [
  { label: "About Us", href: "/" },
  { label: "COSA Core", href: "/core" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Contact Us", href: "/contact" },
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
    title: "Service reminders",
    text: "Keep follow-ups and service reminders visible in one place. SMS delivery is planned.",
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
  "Service reminders",
  "Staff accounts",
  "Two main controllers",
  "Account customer tracking",
  "Workshop reporting tools",
];

const plans = [
  {
    name: "Starter",
    planKey: "starter",
    users: "5 users",
    monthlyPrice: 99,
    subject: "COSA Core 5 User Plan",
  },
  {
    name: "Growth",
    planKey: "growth",
    users: "10 users",
    monthlyPrice: 149,
    subject: "COSA Core 10 User Plan",
    featured: true,
  },
  {
    name: "Scale",
    planKey: "scale",
    users: "20 users",
    monthlyPrice: 249,
    subject: "COSA Core 20 User Plan",
  },
];

const pricingFaq = [
  {
    question: "What counts as a user?",
    answer:
      "A user is any staff member or technician with their own COSA Core login for your workshop.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Yes. If your team grows, contact COSA and we can move you to a larger plan.",
  },
  {
    question: "Is each workshop separate?",
    answer:
      "Yes. Every business gets its own isolated COSA Core workspace, login and data.",
  },
  {
    question: "What happens after I choose a plan?",
    answer:
      "You create your workshop login, pay securely, and COSA Core sets up your account automatically.",
  },
  {
    question: "Monthly or yearly?",
    answer:
      "Monthly billing is available on every plan. Pay a year up front and get one month free.",
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

      <div className="header-actions">
        <a
          className="header-button header-button-secondary"
          href={CORE_APP_LOGIN_URL}
        >
          Sign In
        </a>

        <a className="header-button" href={headerCta.href}>
          {headerCta.label}
          <ArrowRight size={16} />
        </a>
      </div>

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

          <a
            className="mobile-cta mobile-cta-secondary"
            href={CORE_APP_LOGIN_URL}
            onClick={closeMenu}
          >
            Sign In
          </a>

          <a className="mobile-cta" href={headerCta.href} onClick={closeMenu}>
            {headerCta.label}
            <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Choose your plan",
      text: "Pick the user limit that fits your workshop and start checkout from the pricing page.",
    },
    {
      title: "Create your login",
      text: "Enter your business details and set the email and password you want to use in COSA Core.",
    },
    {
      title: "Pay and get started",
      text: "After secure payment, your workshop is created automatically and you can sign straight into COSA Core.",
    },
  ];

  return (
    <section className="section how-it-works-section">
      <div className="section-heading centered">
        <p className="section-kicker">How it works</p>
        <h2>From plan to login in three steps.</h2>
        <span>Simple setup for workshops that want to get moving quickly.</span>
      </div>

      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="how-it-works-card">
            <span className="how-it-works-step">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="section-heading centered">
        <p className="section-kicker">FAQ</p>
        <h2>Common pricing questions.</h2>
      </div>

      <div className="faq-grid">
        {pricingFaq.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
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

        <div className="hero-media vertical-media-wrap">
          <div className="vertical-video-card">
            <video src="/about-video.mp4" controls playsInline />
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

      <HowItWorksSection />
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

            <a className="secondary-button" href={CORE_APP_LOGIN_URL}>
              Sign In
            </a>

            <a className="secondary-button" href="/contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="core-video-wrap">
          <div className="vertical-video-card">
            <video src="/cosa-core-preview.mp4" controls playsInline />
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="section">
        <div className="section-heading centered">
          <p className="section-kicker">Features</p>
          <h2>Everything needed to run the day cleaner.</h2>
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
    return monthlyPrice * 11;
  }

  return (
    <>
      <section className="pricing-hero">
        <p className="eyebrow">
          <FileText size={17} />
          Pricing
        </p>

        <h1>COSA Core pricing.</h1>

        <p>
          All COSA Core plans include the same software features. You only pick
          the amount of users your business needs. Choose a plan, create your
          login, pay securely, and your workshop is set up automatically.
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
            <strong>1 month</strong>
            <span>free when you pay a year up front</span>
          </p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="pricing-grid">
          {plans.map((plan) => {
            const yearlyPrice = getYearlyPrice(plan.monthlyPrice);

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
                      <strong>${yearlyPrice}/year</strong>
                      <p className="gst-note">All prices include GST.</p>
                      <p className="yearly-note">
                        Pay a year up front and get 1 month free. Value of $
                        {plan.monthlyPrice}.
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

                <a href={getSubscribeUrl(plan.planKey, billingCycle)}>
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

          <a className="primary-button custom-plan-button" href="/contact">
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <HowItWorksSection />
      <FaqSection />
    </>
  );
}

function IntegrationLogo({ app }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="integration-logo-fallback">{app.name.slice(0, 2)}</span>;
  }

  return (
    <img
      src={app.logoSrc}
      alt=""
      className="integration-app-card-logo-image"
      onError={() => setFailed(true)}
    />
  );
}

function IntegrationCard({ app }) {
  if (!app.available) {
    return (
      <div className="integration-app-card is-disabled" aria-disabled="true">
        <div className="integration-app-card-logo" aria-hidden="true">
          <IntegrationLogo app={app} />
        </div>
        <div className="integration-app-card-main">
          <div className="integration-app-card-copy">
            <strong>{app.name}</strong>
            <span>{app.summary}</span>
          </div>
          <span className="integration-app-card-badge is-soon">Coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <a
      className="integration-app-card is-available"
      href={`${CORE_APP_URL}/integrations/xero`}
    >
      <div className="integration-app-card-logo" aria-hidden="true">
        <IntegrationLogo app={app} />
      </div>
      <div className="integration-app-card-main">
        <div className="integration-app-card-copy">
          <strong>{app.name}</strong>
          <span>{app.summary}</span>
        </div>
        <span className="integration-app-card-badge is-available">Available</span>
      </div>
    </a>
  );
}

function IntegrationsPage() {
  const stats = getIntegrationStats();
  const allApps = getAllIntegrations();

  return (
    <>
      <section className="pricing-hero integrations-hero">
        <p className="eyebrow">
          <PlugZap size={17} />
          Integrations
        </p>

        <h1>Workshop integrations</h1>

        <p>
          Connect COSA Core with accounting, parts, marketing, and mobile tools.
          Xero is available now — everything else is on the roadmap.
        </p>
      </section>

      <section className="section integrations-catalog">
        <div className="integrations-hub-summary">
          <div className="integrations-hub-summary-stat is-live">
            <strong>{stats.availableCount}</strong>
            <span>Available now</span>
          </div>
          <div className="integrations-hub-summary-stat is-soon">
            <strong>{stats.comingSoonCount}</strong>
            <span>Coming soon</span>
          </div>
          <p className="integrations-hub-summary-copy">
            Xero is live today. MYOB, QuickBooks, parts suppliers, marketing
            platforms, and the COSA mobile app are planned next.
          </p>
        </div>

        <div className="integrations-app-grid">
          {allApps.map((app) => (
            <IntegrationCard key={app.id} app={app} />
          ))}
        </div>

        <div className="section-cta">
          <a className="primary-button" href={`${CORE_APP_URL}/integrations/xero`}>
            Set up Xero in COSA Core
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
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

            <a href="/pricing">
              View Pricing
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

function PrivacyPage() {
  return (
    <section className="legal-page">
      <p className="eyebrow">
        <Shield size={17} />
        Privacy
      </p>
      <h1>Privacy policy</h1>
      <p>
        COSA collects the information you provide when you enquire, subscribe or
        use COSA Core — such as business name, contact details, account email and
        workshop data entered into the software.
      </p>
      <p>
        We use this information to provide the service, support your workshop,
        process billing and respond to enquiries. We do not sell your personal
        information.
      </p>
      <p>
        For privacy questions, contact{" "}
        <a href="mailto:caleb@cosa.net.au">caleb@cosa.net.au</a>.
      </p>
    </section>
  );
}

function TermsPage() {
  return (
    <section className="legal-page">
      <p className="eyebrow">
        <FileText size={17} />
        Terms
      </p>
      <h1>Terms of service</h1>
      <p>
        COSA Core is provided as workshop operating software on a subscription
        basis. By starting a plan or using the service, you agree to pay the fees
        for your selected plan and to use the software lawfully for your business.
      </p>
      <p>
        Each workshop account is separate. You are responsible for managing staff
        access, keeping login details secure and the accuracy of data entered into
        your workspace.
      </p>
      <p>
        Subscription changes, billing questions or account issues can be raised via{" "}
        <a href="/contact">Contact Us</a> or{" "}
        <a href="mailto:caleb@cosa.net.au">caleb@cosa.net.au</a>.
      </p>
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
        <a href={CORE_APP_LOGIN_URL}>Sign In</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
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

  if (path === "/privacy") {
    return <PrivacyPage />;
  }

  if (path === "/terms") {
    return <TermsPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <main>
      <PageMeta />
      <Header />
      {getPage()}
      <Footer />
    </main>
  );
}
