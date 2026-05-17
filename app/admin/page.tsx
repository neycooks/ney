'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AdminPanel from '@/components/AdminPanel';
import ScrollReveal from '@/components/ScrollReveal';

export default function AdminPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/api/auth/session')
      .then((r) => r.json())
      .then((d) => {
        if (d.authenticated && d.isAdmin) {
          setIsAdmin(true);
        } else {
          router.push('/');
        }
      });
  }, [router]);

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-float text-[rgb(var(--md-sys-color-primary))] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main className="pt-28 max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal direction="up">
          <AdminPanel
            onProjectCreated={() => {}}
            onSocialCreated={() => {}}
            onFriendCreated={() => {}}
          />
        </ScrollReveal>
      </main>
    </div>
  );
}
