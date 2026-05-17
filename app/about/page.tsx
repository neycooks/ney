import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main className="pt-28 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4">
              About Me
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              Get to know me a bit better
            </p>
          </ScrollReveal>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
                Who am I?
              </h2>
              <div className="space-y-5 text-[rgb(var(--md-sys-color-on-surface-variant))] leading-relaxed">
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
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="md-card">
              <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Name', value: 'Ney' },
                  { label: 'Role', value: 'Developer &amp; Creator' },
                  { label: 'Location', value: 'Earth' },
                  { label: 'Experience', value: 'Building cool stuff' },
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-30 transition-all duration-300 ease-out hover:pl-2">
                    <span className="text-[rgb(var(--md-sys-color-on-surface-variant))]">{fact.label}</span>
                    <span className="text-[rgb(var(--md-sys-color-on-surface))] font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-8 text-center">
              Skills &amp; Expertise
            </h2>
          </ScrollReveal>
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
                category: 'Tools &amp; Others',
                skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'Agile'],
              },
            ].map((group, index) => (
              <ScrollReveal key={index} direction="scale" delay={0.1 * index}>
                <div className="md-card">
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
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Interests */}
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-8 text-center">
            Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Open Source', 'Web Development', 'UI/UX Design', 'Problem Solving', 'Learning New Tech', 'Building Products'].map((interest, index) => (
              <span key={index} className="md-chip" style={{ animationDelay: `${0.05 * index}s` }}>
                {interest}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-4">
              Want to work together?
            </h2>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-6">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <Link href="/socials" className="md-button">
              Let&apos;s Connect
            </Link>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
