import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="animate-fade-in">
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg md:text-xl mb-4 opacity-0 stagger-1 animate-slide-up">
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[rgb(var(--md-sys-color-primary))] mb-6 opacity-0 stagger-2 animate-slide-up">
              Ney
            </h1>
            <p className="text-[rgb(var(--md-sys-color-on-surface))] text-xl md:text-2xl max-w-2xl opacity-0 stagger-3 animate-slide-up">
              Developer & Creator crafting digital experiences with clean code and thoughtful design.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 opacity-0 stagger-4 animate-slide-up">
            <Link href="/projects" className="md-button">
              View Projects
            </Link>
            <Link href="/contact" className="md-button-tonal">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-4xl md:text-5xl text-[rgb(var(--md-sys-color-on-surface))] mb-12 opacity-0 stagger-5 animate-slide-up">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Development',
                description: 'Building robust applications with modern technologies and best practices.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Design',
                description: 'Creating intuitive interfaces with focus on user experience and accessibility.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                title: 'Creation',
                description: 'Bringing ideas to life through code, from concept to deployment.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="md-card opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <div className="text-[rgb(var(--md-sys-color-primary))] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-2">
                  {item.title}
                </h3>
                <p className="text-[rgb(var(--md-sys-color-on-surface-variant))]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-4xl md:text-5xl text-[rgb(var(--md-sys-color-on-surface))] mb-8 opacity-0 stagger-5 animate-slide-up">
            Tech Stack
          </h2>
          
          <div className="flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'Git'].map((tech, index) => (
              <span key={index} className="md-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
