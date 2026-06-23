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
  Package,
  PlugZap,
  Shield,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { integrationCategories } from "./data/integrationsCatalog";
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
      "Connect COSA Core with Xero, QuickBooks, and Podium. GoHighLevel, parts suppliers, and the COSA mobile app are on the way.",
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
    text: "COSA Core is designed for the daily flow of bookings, jobs, customers, and invoices.",
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
    icon: Package,
    title: "Parts and inventory",
    text: "Track parts, suppliers, stock levels and waiting parts without leaving your job workflow.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    text: "See useful workshop information across jobs, invoices, and reminders.",
  },
  {
    icon: MessageSquareText,
    title: "Service reminders",
    text: "Keep follow-ups and service reminders visible in one place.",
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
  "Parts and inventory",
  "Reporting",
  "Service reminders",
  "Staff accounts",
  "Two main controllers",
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
    question: "What counts as a paid user?",
    answer:
      "Admin and staff accounts with their own COSA Core login count toward your plan limit. Technician accounts are unlimited and do not count as paid users.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Yes. Main controllers can upgrade from Staff settings or Manage billing in Settings. Stripe updates your plan automatically and prorates the change for the rest of your billing period.",
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
  {
    question: "Do all plans include the same features?",
    answer:
      "Yes. Every COSA Core plan includes the same software. You only choose how many admin and staff users your workshop needs.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isCorePage = window.location.pathname === "/core";
  const headerCta = isCorePage
    ? { label: "Pricing", href: "/pricing" }
    : { label: "COSA Core", href: "/core" };

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="COSA home">
          <img src="/cosa-wordmark.png" alt="COSA" />
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
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {menuOpen ? (
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
      ) : null}
    </>
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
            invoices, reporting and reminders in one clean system that staff can
            actually use.
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
            <video
              src="/about-video.mp4"
              controls
              playsInline
              poster="/about-video-cover.png"
            />
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
            customer history, reminders and reporting.
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
            <video
              src="/cosa-core-preview.mp4"
              controls
              playsInline
              poster="/cosa-core-video-cover.png"
            />
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
      href={`${CORE_APP_URL}${app.coreRoute || `/integrations/${app.id}`}`}
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
        </p>
      </section>

      <section className="section integrations-catalog">
        <div className="integrations-hub-stack">
          {integrationCategories.map((category) => (
            <div className="integrations-category" key={category.id}>
              <header className="integrations-category-head">
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </header>

              <div className="integrations-app-grid">
                {category.apps.map((app) => (
                  <IntegrationCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a className="primary-button" href="/contact">
            Need a specific integration? Contact us today
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
        This policy explains how COSA (&quot;we&quot;, &quot;us&quot;) handles personal
        information when you visit cosa.net.au, enquire about our services, subscribe
        to COSA Core, or use the workshop software at core.cosa.net.au.
      </p>

      <h2>What we collect</h2>
      <p>
        We collect information you give us directly — such as your name, business name,
        email, phone number, billing details, and messages sent through our contact
        form or support channels.
      </p>
      <p>
        When you use COSA Core, we also store workshop data you enter into your account,
        including customer and vehicle details, bookings, job cards, invoices, parts,
        staff accounts, uploaded photos or files, and support tickets.
      </p>
      <p>
        We collect basic technical information such as browser type, device information,
        and usage needed to run and secure the service.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information to provide and improve COSA Core, process subscriptions
        and payments, send service-related emails, respond to enquiries, provide support,
        and keep accounts secure.
      </p>
      <p>We do not sell your personal information.</p>

      <h2>Who we share it with</h2>
      <p>
        We use trusted service providers to run COSA Core, including hosting, database,
        authentication, email, and payment providers. Where a workshop connects an
        integration such as Xero, QuickBooks, Podium, or Go High Level, relevant data may
        be shared with that provider according to the workshop&apos;s settings.
      </p>
      <p>
        We may also disclose information where required by law or to protect the rights,
        safety, and security of COSA, our customers, and others.
      </p>

      <h2>Storage and security</h2>
      <p>
        Data is stored using reputable cloud infrastructure. We take reasonable steps to
        protect information from misuse, loss, and unauthorised access, but no online
        service can guarantee absolute security.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep information for as long as your account is active or as needed to provide
        the service, meet legal obligations, resolve disputes, and enforce our agreements.
        Workshops can contact us about account closure or data requests.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of personal information we
        hold about you, subject to applicable law and our need to retain certain records.
        Workshops are responsible for the customer data they enter into COSA Core.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact{" "}
        <a href="mailto:support@cosa.net.au">support@cosa.net.au</a> or{" "}
        <a href="mailto:caleb@cosa.net.au">caleb@cosa.net.au</a>.
      </p>

      <p className="legal-updated">Last updated: 21 June 2026</p>
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
        These terms apply to your use of COSA Core and related services provided by COSA.
        By starting a subscription, creating an account, or using the software, you agree
        to these terms.
      </p>

      <h2>The service</h2>
      <p>
        COSA Core is cloud-based workshop software for managing bookings, jobs, customers,
        invoices, parts, staff access, reporting, and connected integrations. Features may
        change or improve over time.
      </p>

      <h2>Accounts and access</h2>
      <p>
        Each workshop account is separate. The main controller is responsible for inviting
        staff, setting access levels, keeping login details secure, and all activity under
        the account.
      </p>
      <p>
        You must provide accurate account information and not share logins in a way that
        breaches your plan limits or these terms.
      </p>

      <h2>Subscriptions and billing</h2>
      <p>
        Paid plans are billed according to the pricing shown at signup unless otherwise
        agreed in writing. Fees are generally charged in advance through our payment
        provider. Failed payments may result in restricted access until billing is
        resolved.
      </p>
      <p>
        Plan changes, cancellations, and billing questions can be raised through support or
        your billing portal where available.
      </p>

      <h2>Your data</h2>
      <p>
        You retain ownership of the business data you enter into COSA Core. You are
        responsible for ensuring you have the right to store and use that data, including
        customer and staff information, and for complying with applicable privacy laws in
        your business.
      </p>
      <p>
        You grant COSA permission to host, process, back up, and display your data only as
        needed to provide and support the service.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You must not misuse the service, attempt to access other workshops&apos; data,
        interfere with system security, upload unlawful content, or use COSA Core in a way
        that harms COSA, other users, or third parties.
      </p>

      <h2>Integrations and third parties</h2>
      <p>
        Optional integrations are provided by third-party services with their own terms and
        privacy policies. COSA is not responsible for third-party outages, data handling,
        or changes to those services.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We aim to keep COSA Core reliable, but occasional maintenance, outages, or updates
        may occur. We may modify features, pricing, or these terms with reasonable notice
        where practical.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, COSA is not liable for indirect or consequential
        loss arising from use of the service. Our total liability for any claim relating
        to the service is limited to the fees paid by your workshop in the 3 months before
        the event giving rise to the claim, except where liability cannot be excluded by
        law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:support@cosa.net.au">support@cosa.net.au</a>,{" "}
        <a href="/contact">Contact Us</a>, or{" "}
        <a href="mailto:caleb@cosa.net.au">caleb@cosa.net.au</a>.
      </p>

      <p className="legal-updated">Last updated: 21 June 2026</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <img src="/cosa-wordmark.png" alt="COSA" />
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
