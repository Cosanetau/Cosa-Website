import React from "react";
import {
  ArrowRight,
  Check,
  Shield,
  Cpu,
  Wrench,
  BarChart3,
  Lock,
  Globe2,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Custom Workshop Software",
    description:
      "Job boards, technician tracking, vehicle status, parts workflows and internal systems built around how your business actually runs.",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    description:
      "Replace messy spreadsheets, whiteboards and repeat admin tasks with clean tools your staff can use from any device.",
  },
  {
    icon: BarChart3,
    title: "Live Reporting",
    description:
      "See jobs, revenue, staff activity, parts delays, follow-ups and operational performance without digging through paperwork.",
  },
];

const features = [
  "Cloud hosted and accessible anywhere",
  "Secure user logins and password management",
  "Built for phones, tablets, office PCs and workshop TVs",
  "Custom workflows for your exact business",
  "Management access for up to 15 starting accounts",
  "Ongoing support, updates and improvements",
];

const process = [
  "We learn how your business currently works.",
  "We design the system around your real workflow.",
  "We build, host and support the software for your team.",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-[-260px] left-[-180px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-700 shadow-lg shadow-orange-500/20">
            <span className="text-lg font-black tracking-tight">C</span>
          </div>

          <span className="text-xl font-semibold tracking-[0.22em]">
            COSA
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="mailto:hello@cosa.net.au"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:inline-flex"
        >
          Start a project
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
            <Shield size={16} />
            Custom operating software for Australian businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Premium software built around your business.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            COSA designs and builds custom internal software for workshops,
            service businesses and growing teams that need cleaner systems than
            spreadsheets, whiteboards and generic apps.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@cosa.net.au"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
            >
              Build my system
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/60 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0b0b] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Live Operations</p>
                  <h2 className="text-xl font-bold">Workshop Command</h2>
                </div>

                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Online
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Bay 1", "In Progress", "BMW X5", "2h 15m"],
                  ["Bay 2", "Waiting Parts", "Toyota Hilux", "1d"],
                  ["Bay 3", "Ready", "Mazda 3", "Now"],
                  ["Front", "Customer Approval", "Ford Ranger", "Urgent"],
                ].map(([bay, status, vehicle, time]) => (
                  <div
                    key={bay}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        {bay}
                      </span>

                      <span className="rounded-full bg-orange-400/10 px-2 py-1 text-[11px] font-semibold text-orange-300">
                        {time}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">{vehicle}</p>

                    <p className="mt-1 text-sm font-semibold text-zinc-200">
                      {status}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 to-transparent p-5">
                <p className="text-sm text-orange-200">
                  Today’s snapshot
                </p>

                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-black">18</p>
                    <p className="text-xs text-zinc-500">Active jobs</p>
                  </div>

                  <div>
                    <p className="text-2xl font-black">6</p>
                    <p className="text-xs text-zinc-500">Ready</p>
                  </div>

                  <div>
                    <p className="text-2xl font-black">4</p>
                    <p className="text-xs text-zinc-500">Delayed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            What we build
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Systems that fit the way your team already works.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="features"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            Included
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Built properly from day one.
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            COSA is built for businesses that want software that feels simple
            for staff but powerful for management.
          </p>

          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <Check
                  className="mt-0.5 shrink-0 text-orange-400"
                  size={18}
                />

                <span className="text-zinc-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/20 via-white/[0.04] to-white/[0.02] p-8">
            <Globe2 className="text-orange-300" size={28} />

            <h3 className="mt-8 text-3xl font-black">
              Access anywhere.
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Office PC, workshop TV, tablet, phone or home laptop. Your team
              can access the system securely wherever they need it.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <Lock className="text-orange-300" size={28} />

            <h3 className="mt-8 text-3xl font-black">
              Secure by default.
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              User accounts, role access, password resets and managed login
              control are built into the platform from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                Process
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Simple build process. Real business outcome.
              </h2>
            </div>

            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-black">
                    {index + 1}
                  </div>

                  <p className="pt-2 text-lg font-semibold text-zinc-100">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center lg:px-8"
      >
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Ready to build your operating system?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Tell us what your business is currently doing manually and we’ll help
          turn it into clean custom software.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@cosa.net.au"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
          >
            hello@cosa.net.au
          </a>

          <a
            href="https://cosa.net.au"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            cosa.net.au
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 COSA. Custom operating software for Australian businesses.
          </p>

          <p>Built in Australia.</p>
        </div>
      </footer>
    </main>
  );
}
