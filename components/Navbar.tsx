'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useRef, useState, useEffect, useCallback } from 'react';

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
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', () => setIsHovered(true));
    el.addEventListener('mouseleave', () => {
      setIsHovered(false);
      setMousePos({ x: 0.5, y: 0.5 });
    });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', () => setIsHovered(true));
      el.removeEventListener('mouseleave', () => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      });
    };
  }, [handleMouseMove]);

  const glareX = mousePos.x * 100;
  const glareY = mousePos.y * 100;
  const refractionX = (mousePos.x - 0.5) * 10;
  const refractionY = (mousePos.y - 0.5) * 10;
  const fresnelIntensity = isHovered ? 0.15 : 0.08;

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="relative rounded-full overflow-hidden transition-all duration-500 ease-out"
        style={{
          background: `
            radial-gradient(ellipse at ${glareX}% ${glareY}%, rgba(255,255,255,${fresnelIntensity}) 0%, transparent 60%),
            linear-gradient(135deg, rgba(var(--md-sys-color-surface-container), 0.12) 0%, rgba(var(--md-sys-color-surface-container), 0.06) 100%)
          `,
          backdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
          border: '1px solid rgba(var(--md-sys-color-outline-variant), 0.15)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.15),
            0 2px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05),
            inset ${refractionX}px ${refractionY}px 20px rgba(255, 255, 255, 0.03)
          `,
          transform: isHovered
            ? `scale(1.02) perspective(1000px) rotateX(${(mousePos.y - 0.5) * -3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg)`
            : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease-out',
        }}
      >
        {/* Edge blur/fade overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at ${glareX}% ${glareY}%, transparent 40%, rgba(var(--md-sys-color-surface-container), 0.1) 100%)`,
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
          }}
        />

        {/* Glare streak */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none opacity-60"
          style={{
            background: `linear-gradient(${45 + (mousePos.x - 0.5) * 30}deg, transparent 30%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)`,
            transform: `translateX(${(mousePos.x - 0.5) * 20}px)`,
            transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* Refraction distortion layer */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(var(--md-sys-color-primary), 0.04) 0%, transparent 50%)`,
            filter: `blur(${isHovered ? 2 : 1}px)`,
            transform: `translate(${refractionX * 0.5}px, ${refractionY * 0.5}px)`,
            transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        <nav className="relative z-10 flex items-center gap-6 px-8 py-3 font-sans">
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
      </div>
    </header>
  );
}
