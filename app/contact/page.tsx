import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4 opacity-0 animate-slide-up">
            Contact
          </h1>
          <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Let&apos;s get in touch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="opacity-0 animate-slide-in-left">
            <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
              Get in Touch
            </h2>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@ney.dev',
                  link: 'mailto:hello@ney.dev',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                  label: 'GitHub',
                  value: 'github.com/neycooks',
                  link: 'https://github.com/neycooks',
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md-card flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgb(var(--md-sys-color-primary-container))] flex items-center justify-center text-[rgb(var(--md-sys-color-on-primary-container))] group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--md-sys-color-on-surface-variant))]">
                      {contact.label}
                    </p>
                    <p className="text-[rgb(var(--md-sys-color-on-surface))] font-medium">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-slide-in-right">
            <div className="md-card">
              <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="md-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
