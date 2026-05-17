import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of an awesome project built with modern technologies.',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Another cool project that solves real-world problems with elegant solutions.',
    tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'An innovative application showcasing cutting-edge web development practices.',
    tags: ['Python', 'FastAPI', 'React'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Four',
    description: 'A full-stack application demonstrating best practices in software architecture.',
    tags: ['Next.js', 'MongoDB', 'Docker'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4 opacity-0 animate-slide-up">
            Projects
          </h1>
          <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Some things I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="md-card opacity-0 animate-scale-in hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-[rgb(var(--md-sys-color-primary))]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--md-sys-color-on-surface-variant))] hover:text-[rgb(var(--md-sys-color-primary))] transition-colors duration-200"
                    aria-label="GitHub repository"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--md-sys-color-on-surface-variant))] hover:text-[rgb(var(--md-sys-color-primary))] transition-colors duration-200"
                    aria-label="External link"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0 0L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-2">
                {project.title}
              </h3>
              <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="md-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-4">
            Want to see more?
          </p>
          <a
            href="https://github.com/neycooks"
            target="_blank"
            rel="noopener noreferrer"
            className="md-button-tonal inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View GitHub
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
