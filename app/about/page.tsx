import Link from 'next/link';
import Navbar from '@/components/Navbar';
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
                  im niko gonzales. im 16, born on 26th october 2009, living in sao paulo, brazil. ive been into programming for about 5 years now, started young and never really stopped since. i love building things from scratch, figuring out how stuff works, and making ideas come alive through code.
                </p>
                <p>
                  besides coding, im really into designing. i like making things look clean and feel right, whether its a website, an interface, or just something visual. i also play football, been part of academy futsal, and that discipline carries over into everything i do.
                </p>
                <p>
                  im the type of person who gets obsessed with something until i understand it. if its a new framework, a design tool, or even a football tactic, i dive in deep. i dont just want to use things, i want to know how they work and how to make them better.
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
                  { label: 'Name', value: 'Niko Gonzales' },
                  { label: 'Role', value: 'Dev, Academy Futsal' },
                  { label: 'Location', value: 'Brazil, Sao Paulo' },
                  { label: 'Experience', value: '5yrs' },
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
            {['Open Source', 'Web Development', 'UI/UX Design', 'Football', 'Learning New Tech', 'Building Products'].map((interest, index) => (
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
    </div>
  );
}
