import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section - Centered */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--md-sys-color-primary))] opacity-5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(var(--md-sys-color-tertiary))] opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="text-center max-w-4xl relative z-10">
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg md:text-xl mb-6 opacity-0 animate-fade-in-up stagger-1">
              Hello, I&apos;m
            </p>
            <h1 className="tangerine-bold text-7xl md:text-9xl lg:text-[12rem] text-[rgb(var(--md-sys-color-primary))] mb-8 opacity-0 animate-fade-in-up stagger-2 leading-none">
              Ney
            </h1>
            <p className="text-[rgb(var(--md-sys-color-on-surface))] text-xl md:text-2xl max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-3 leading-relaxed">
              Developer &amp; Creator crafting digital experiences with clean code and thoughtful design.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up stagger-4">
              <Link href="/projects" className="md-button">
                View Projects
              </Link>
              <Link href="/socials" className="md-button-tonal">
                Connect
              </Link>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <ScrollReveal direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-[rgb(var(--md-sys-color-on-surface))] mb-16 text-center">
              What I Do
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <ScrollReveal key={index} direction="blur" delay={index * 0.15}>
                <div className="md-card group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[rgb(var(--md-sys-color-primary-container))] flex items-center justify-center text-[rgb(var(--md-sys-color-on-primary-container))] mb-5 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <ScrollReveal direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-[rgb(var(--md-sys-color-on-surface))] mb-12 text-center">
              Tech Stack
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Node.js', 'Python', 'Git', 'TypeScript', 'React'].map((tech, index) => (
                <span key={index} className="md-chip" style={{ animationDelay: `${0.05 * index}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
