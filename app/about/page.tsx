import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4 opacity-0 animate-slide-up">
            About Me
          </h1>
          <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Get to know me a bit better
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="opacity-0 animate-slide-in-left">
            <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-4">
              Who am I?
            </h2>
            <div className="space-y-4 text-[rgb(var(--md-sys-color-on-surface-variant))] leading-relaxed">
              <p>
                I&apos;m Ney, a passionate developer who loves building things that live on the internet. 
                I specialize in creating elegant, efficient, and user-friendly applications.
              </p>
              <p>
                My journey in development started with curiosity and has evolved into a career 
                focused on delivering high-quality digital experiences. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest technologies.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="opacity-0 animate-slide-in-right">
            <div className="md-card">
              <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Name', value: 'Ney' },
                  { label: 'Role', value: 'Developer & Creator' },
                  { label: 'Location', value: 'Earth' },
                  { label: 'Experience', value: 'Building cool stuff' },
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-30">
                    <span className="text-[rgb(var(--md-sys-color-on-surface-variant))]">{fact.label}</span>
                    <span className="text-[rgb(var(--md-sys-color-on-surface))] font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Python', 'REST APIs', 'Database Design'],
              },
              {
                category: 'Tools & Others',
                skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'Agile'],
              },
            ].map((group, index) => (
              <div key={index} className="md-card">
                <h3 className="text-lg font-semibold text-[rgb(var(--md-sys-color-primary))] mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="md-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
            Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {['Open Source', 'Web Development', 'UI/UX Design', 'Problem Solving', 'Learning New Tech', 'Building Products'].map((interest, index) => (
              <span key={index} className="md-chip">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-4">
            Want to work together?
          </h2>
          <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-6">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <Link href="/contact" className="md-button">
            Let&apos;s Talk
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
