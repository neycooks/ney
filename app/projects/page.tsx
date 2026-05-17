'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  category: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main className="pt-28 max-w-6xl mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4">
              Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              Some things I&apos;ve built
            </p>
          </ScrollReveal>
        </div>

        {projects.length === 0 ? (
          <ScrollReveal direction="up">
            <p className="text-center text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              No projects added yet.
            </p>
          </ScrollReveal>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} direction="blur" delay={index * 0.12}>
                <div className="md-card group h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[rgb(var(--md-sys-color-primary-container))] flex items-center justify-center text-[rgb(var(--md-sys-color-on-primary-container))] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[rgb(var(--md-sys-color-surface-container-highest))] bg-opacity-50 flex items-center justify-center text-[rgb(var(--md-sys-color-on-surface-variant))] hover:text-[rgb(var(--md-sys-color-primary))] hover:bg-[rgb(var(--md-sys-color-primary-container))] transition-all duration-300 ease-out hover:scale-110 active:scale-90"
                        aria-label="GitHub repository"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-3 transition-colors duration-300 group-hover:text-[rgb(var(--md-sys-color-primary))]">
                    {project.name}
                  </h3>
                  <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="md-chip">{project.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mb-6">
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
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
