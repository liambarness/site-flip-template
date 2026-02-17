import { Phone, Mail, MapPin, Star, Clock, ChevronRight } from "./icons";

/**
 * Landing page template — intentionally generic.
 *
 * V0 should replace ALL placeholder content below with real business data.
 * If any section cannot be customized (missing data), V0 should remove that
 * section entirely rather than leaving placeholder text.
 *
 * Sections: Nav, Hero, Services, About, Testimonials, Contact, Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold">[Business Name]</span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#reviews" className="text-sm text-gray-600 hover:text-gray-900">
              Reviews
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              [Headline goes here]
            </h1>
            <p className="mt-4 text-lg text-blue-100 md:text-xl">
              [Subheadline — a short sentence about what this business does and
              why customers should care.]
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
              >
                Get Started
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://picsum.photos/1200/800"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
            <p className="mt-3 text-gray-600">
              [Brief intro to services offered]
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Clock />
                </div>
                <h3 className="text-lg font-semibold">[Service {n}]</h3>
                <p className="mt-2 text-sm text-gray-600">
                  [Description of service {n}]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">About</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              [A paragraph about the business — who they are, how long
              they&apos;ve been operating, and what sets them apart.]
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/600/400"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Reviews</h2>
            <p className="mt-3 text-gray-600">
              [What customers are saying]
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} />
                  ))}
                </div>
                <p className="text-sm italic text-gray-600">
                  &ldquo;[Review text {n}]&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">[Reviewer {n}]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
              <p className="mt-3 text-gray-600">
                [Call-to-action text encouraging visitors to reach out.]
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone />
                  <span>[Phone number]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail />
                  <span>[Email address]</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin />
                  <span>[Street address]</span>
                </div>
              </div>
            </div>
            <form className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} [Business Name]. All rights
            reserved.
          </span>
          <span>[Street address]</span>
        </div>
      </footer>
    </div>
  );
}
