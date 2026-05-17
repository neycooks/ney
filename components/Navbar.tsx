'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const LiquidGlass = dynamic(() => import('liquid-glass-react'), { ssr: false });

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/socials', label: 'Socials' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <header ref={containerRef} className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <LiquidGlass
        mouseContainer={containerRef}
        elasticity={0.3}
        cornerRadius={999}
        displacementScale={70}
        blurAmount={0.0625}
        saturation={140}
        aberrationIntensity={2}
        mode="standard"
        overLight={theme === 'light'}
        padding="0"
        className="font-sans"
        style={{
          background: 'rgba(var(--md-sys-color-surface-container), 0.1)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(var(--md-sys-color-outline-variant), 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        <nav className="flex items-center gap-6 px-8 py-3">
          <Link href="/" className="text-xl text-[rgb(var(--md-sys-color-primary))] hover:opacity-80 transition-all duration-300 ease-out hover:scale-110">
            ney
          </Link>

          <div className="h-5 w-px bg-[rgb(var(--md-sys-color-outline-variant))] opacity-20" />

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? 'nav-link-active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="h-5 w-px bg-[rgb(var(--md-sys-color-outline-variant))] opacity-20" />

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[rgb(var(--md-sys-color-on-surface-variant))] hover:text-[rgb(var(--md-sys-color-primary))] transition-all duration-300 ease-out active:scale-90 hover:scale-110 hover:rotate-12"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
      </LiquidGlass>
    </header>
  );
}
