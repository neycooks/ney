'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

interface Friend {
  id: string;
  name: string;
  pfpUrl: string;
  description: string;
}

export default function Friends() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/friends')
      .then((r) => r.json())
      .then((data) => setFriends(data));
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main className="pt-28 max-w-6xl mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display text-5xl md:text-7xl text-[rgb(var(--md-sys-color-primary))] mb-4">
              Friends
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              people i know and like
            </p>
          </ScrollReveal>
        </div>

        {friends.length === 0 ? (
          <ScrollReveal direction="up">
            <p className="text-center text-[rgb(var(--md-sys-color-on-surface-variant))] text-lg">
              no friends added yet.
            </p>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {friends.map((friend, index) => {
              const isExpanded = expandedId === friend.id;
              return (
                <button
                  key={friend.id}
                  onClick={() => toggleExpand(friend.id)}
                  className={`relative rounded-[28px] overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                    isExpanded
                      ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-4 row-span-2 bg-[rgb(var(--md-sys-color-surface-container))] p-6'
                      : 'aspect-square bg-[rgb(var(--md-sys-color-surface-container))] hover:shadow-lg hover:-translate-y-1'
                  }`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {isExpanded ? (
                    <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in">
                      <img
                        src={friend.pfpUrl}
                        alt={friend.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-[rgb(var(--md-sys-color-primary-container))]"
                      />
                      <div className="text-left">
                        <h3 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-2">
                          {friend.name}
                        </h3>
                        <p className="text-[rgb(var(--md-sys-color-on-surface-variant))] leading-relaxed">
                          {friend.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-4">
                      <img
                        src={friend.pfpUrl}
                        alt={friend.name}
                        className="w-full h-full rounded-[28px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <p className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium text-[rgb(var(--md-sys-color-on-surface))] bg-gradient-to-t from-[rgb(var(--md-sys-color-surface-container))] to-transparent pt-8 pb-1">
                        {friend.name}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
