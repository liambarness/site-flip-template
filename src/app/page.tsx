import { Phone, Mail, MapPin, Star, Clock, ChevronRight } from "./icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold">Business Name</span>
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
            href="tel:+15551234567"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Professional Services You Can Trust
            </h1>
            <p className="mt-4 text-lg text-blue-100 md:text-xl">
              Serving the local community with quality and care. Contact us today
              for a free consultation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
              >
                <Phone />
                (555) 123-4567
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Get a Free Quote
                <ChevronRight />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-blue-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <span>4.8/5 from 120+ reviews</span>
            </div>
          </div>
        </div>
        <img
          src="https://picsum.photos/1200/800"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mt-3 text-gray-600">
              Quality solutions tailored to your needs
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Service One",
                description:
                  "A short description of this service and why customers love it.",
              },
              {
                title: "Service Two",
                description:
                  "A short description of this service and why customers love it.",
              },
              {
                title: "Service Three",
                description:
                  "A short description of this service and why customers love it.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Clock />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
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
            <h2 className="text-3xl font-bold md:text-4xl">
              About Our Business
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With years of experience serving the local community, we take pride
              in delivering exceptional results. Our team is dedicated to quality
              workmanship and customer satisfaction.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe in honest pricing, reliable service, and building
              long-term relationships with our customers.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/600/400"
              alt="About our business"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-gray-600">
              Real reviews from real customers
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Customer Name",
                text: "Excellent service from start to finish. Highly recommend to anyone looking for quality work.",
                rating: 5,
              },
              {
                name: "Customer Name",
                text: "Professional, punctual, and great attention to detail. Will definitely use again.",
                rating: 5,
              },
              {
                name: "Customer Name",
                text: "Fair pricing and outstanding results. They went above and beyond our expectations.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{review.name}</p>
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
                Ready to get started? Reach out for a free consultation.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail />
                  <span>info@business.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin />
                  <span>123 Main Street, City, State 12345</span>
                </div>
              </div>
            </div>
            <form className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
          <span>&copy; {new Date().getFullYear()} Business Name. All rights reserved.</span>
          <span>123 Main Street, City, State 12345</span>
        </div>
      </footer>
    </div>
  );
}
