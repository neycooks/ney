'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

interface FontFile {
  name: string;
  url: string;
  type: string;
}

interface Font {
  id: string;
  name: string;
  description: string;
  files: FontFile[];
}

export default function FontsPage() {
  const [fonts, setFonts] = useState<Font[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [fontFaces, setFontFaces] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/api/fonts')
      .then((r) => r.json())
      .then((data) => {
        setFonts(data);
        data.forEach((font: Font) => {
          if (font.files?.length) {
            const firstFile = font.files[0];
            const fontName = `dynamic-${font.id}`;
            const style = document.createElement('style');
            style.textContent = `@font-face { font-family: '${fontName}'; src: url('${firstFile.url}'); }`;
            document.head.appendChild(style);
            setFontFaces(prev => ({ ...prev, [font.id]: fontName }));
          }
        });
      });
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main className="pt-28 max-w-4xl mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4">
              Fonts
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              cool fonts i found
            </p>
          </ScrollReveal>
        </div>

        {fonts.length === 0 ? (
          <ScrollReveal direction="up">
            <p className="text-center text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              no fonts added yet.
            </p>
          </ScrollReveal>
        ) : (
          <div className="space-y-4">
            {fonts.map((font, index) => {
              const isExpanded = expandedId === font.id;
              const fontFamily = fontFaces[font.id];
              return (
                <ScrollReveal key={font.id} direction="up" delay={index * 0.08}>
                  <button
                    onClick={() => toggleExpand(font.id)}
                    className={`w-full text-left rounded-[28px] overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isExpanded
                        ? 'bg-[rgb(var(--md-sys-color-surface-container))] p-6'
                        : 'bg-[rgb(var(--md-sys-color-surface-container))] p-6 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3
                          className="text-4xl md:text-5xl text-[rgb(var(--md-sys-color-on-surface))] leading-tight"
                          style={fontFamily ? { fontFamily } : {}}
                        >
                          {font.name}
                        </h3>
                        <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] mt-2">
                          {font.description}
                        </p>
                      </div>
                      <svg
                        className={`w-6 h-6 text-[rgb(var(--md-sys-color-on-surface-variant))] transition-transform duration-500 ease-out flex-shrink-0 mt-2 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {isExpanded && (
                      <div className="mt-6 animate-fade-in">
                        <h4 className="text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-3">
                          Files ({font.files?.length || 0})
                        </h4>
                        <div className="space-y-2">
                          {font.files?.map((file, i) => (
                            <a
                              key={i}
                              href={file.url}
                              download={file.name}
                              className="group flex items-center justify-between px-4 py-3 bg-[rgb(var(--md-sys-color-surface-container-high))] rounded-xl transition-all duration-200 hover:bg-[rgb(var(--md-sys-color-primary-container))] hover:text-[rgb(var(--md-sys-color-on-primary-container))]"
                            >
                              <span className="text-[rgb(var(--md-sys-color-on-surface))] group-hover:text-[rgb(var(--md-sys-color-on-primary-container))]">
                                {file.name}
                              </span>
                              <svg
                                className="w-5 h-5 text-[rgb(var(--md-sys-color-on-surface-variant))] group-hover:text-[rgb(var(--md-sys-color-on-primary-container))] opacity-0 group-hover:opacity-100 transition-all duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
