'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

interface Social {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  discord: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  github: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  codeberg: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4l4 6H8l4-6zm-5 8l2 3h6l2-3H7z" />
    </svg>
  ),
  gitlab: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.605 12.585L21.495 8.79a.915.915 0 0 0-.615-.615l-3.795-1.11a.915.915 0 0 0-.885.225L12 11.27l-4.2-3.975a.915.915 0 0 0-.885-.225L3.12 8.175a.915.915 0 0 0-.615.615L1.395 12.585a.915.915 0 0 0 .225.885l3.975 4.2a.915.915 0 0 0 .615.225h11.58a.915.915 0 0 0 .615-.225l3.975-4.2a.915.915 0 0 0 .225-.885z" />
    </svg>
  ),
  roblox: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.22 2L2 6.22l4.22 4.22L12 4.66 6.22 2zm11.56 0L12 4.66l5.78 5.78L22 6.22 17.78 2zM2 17.78L6.22 22 12 16.22 6.22 12 2 17.78zm15.56 0L12 16.22l5.78 5.78L22 17.78 17.78 12zM12 7.78L7.78 12 12 16.22 16.22 12 12 7.78z" />
    </svg>
  ),
};

export default function Socials() {
  const [socials, setSocials] = useState<Social[]>([]);

  useEffect(() => {
    fetch('/api/socials')
      .then((r) => r.json())
      .then((data) => setSocials(data));
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main className="pt-28 max-w-6xl mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4">
              Socials
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              Let&apos;s connect and build something together
            </p>
          </ScrollReveal>
        </div>

        {socials.length === 0 ? (
          <ScrollReveal direction="up">
            <p className="text-center text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              No socials added yet.
            </p>
          </ScrollReveal>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socials.map((social, index) => (
              <ScrollReveal key={social.id} direction="scale" delay={index * 0.1}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgb(var(--md-sys-color-surface-container))] rounded-[28px] p-6 transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1 group overflow-visible"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[rgb(var(--md-sys-color-primary-container))] flex items-center justify-center text-[rgb(var(--md-sys-color-on-primary-container))] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg shrink-0">
                      {iconMap[social.icon.toLowerCase()] || iconMap.github}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[rgb(var(--md-sys-color-on-surface))] transition-colors duration-300 group-hover:text-[rgb(var(--md-sys-color-primary))] truncate">
                        {social.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[rgb(var(--md-sys-color-on-surface-variant))] text-sm">
                        <svg className="w-3 h-3 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Visit
                      </div>
                    </div>
                  </div>
                  <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-sm leading-relaxed">
                    {social.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-20 text-center">
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
              Prefer a direct message?
            </p>
            <a
              href="mailto:hello@ney.dev"
              className="md-button inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
}
