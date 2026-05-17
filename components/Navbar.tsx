'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--md-sys-color-surface))] bg-opacity-80 backdrop-blur-lg border-b border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-20 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-[rgb(var(--md-sys-color-primary))] hover:opacity-80 transition-opacity duration-200">
          ney
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`md-nav-item ${
                  pathname === item.href ? 'md-nav-item-active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[rgb(var(--md-sys-color-surface-container-high))] flex items-center justify-center hover:bg-[rgb(var(--md-sys-color-surface-container-highest))] transition-all duration-200 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
