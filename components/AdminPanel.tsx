'use client';

import { useState } from 'react';

const icons = ['discord', 'github', 'codeberg', 'gitlab', 'roblox'];

interface AdminPanelProps {
  onProjectCreated: () => void;
  onSocialCreated: () => void;
  onFriendCreated: () => void;
}

export default function AdminPanel({ onProjectCreated, onSocialCreated, onFriendCreated }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'project' | 'social' | 'friend'>('project');

  return (
    <div className="md-card max-w-2xl mx-auto animate-scale-in">
      <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6 text-center">
        Admin Panel
      </h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab('project')}
          className={`md-chip ${activeTab === 'project' ? '!bg-[rgb(var(--md-sys-color-primary-container))] !text-[rgb(var(--md-sys-color-on-primary-container))]' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`md-chip ${activeTab === 'social' ? '!bg-[rgb(var(--md-sys-color-primary-container))] !text-[rgb(var(--md-sys-color-on-primary-container))]' : ''}`}
        >
          Socials
        </button>
        <button
          onClick={() => setActiveTab('friend')}
          className={`md-chip ${activeTab === 'friend' ? '!bg-[rgb(var(--md-sys-color-primary-container))] !text-[rgb(var(--md-sys-color-on-primary-container))]' : ''}`}
        >
          Friends
        </button>
      </div>

      {activeTab === 'project' ? (
        <CreateProjectForm onSuccess={onProjectCreated} />
      ) : activeTab === 'social' ? (
        <CreateSocialForm onSuccess={onSocialCreated} />
      ) : (
        <CreateFriendForm onSuccess={onFriendCreated} />
      )}
    </div>
  );
}

function CreateProjectForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, githubUrl, category }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Failed to create');
      return;
    }

    setName('');
    setDescription('');
    setGithubUrl('');
    setCategory('');
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Project Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="My Project"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))] resize-none"
          placeholder="What does this project do?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          GitHub URL
        </label>
        <input
          type="url"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="https://github.com/user/repo"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="e.g. Web App, Tool, API"
          required
        />
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button type="submit" disabled={loading} className="md-button w-full disabled:opacity-50">
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
}

function CreateSocialForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('github');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/socials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, url, description, icon }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Failed to create');
      return;
    }

    setName('');
    setUrl('');
    setDescription('');
    setIcon('github');
    onSuccess();
  };

  const getIconPreview = (iconName: string) => {
    switch (iconName) {
      case 'discord':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>;
      case 'github':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.742 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.903-1.296 2.742-1.027 2.742-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>;
      case 'codeberg':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4l4 6H8l4-6zm-5 8l2 3h6l2-3H7z" /></svg>;
      case 'gitlab':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.605 12.585L21.495 8.79a.915.915 0 0 0-.615-.615l-3.795-1.11a.915.915 0 0 0-.885.225L12 11.27l-4.2-3.975a.915.915 0 0 0-.885-.225L3.12 8.175a.915.915 0 0 0-.615.615L1.395 12.585a.915.915 0 0 0 .225.885l3.975 4.2a.915.915 0 0 0 .615.225h11.58a.915.915 0 0 0 .615-.225l3.975-4.2a.915.915 0 0 0 .225-.885z" /></svg>;
      case 'roblox':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.22 2L2 6.22l4.22 4.22L12 4.66 6.22 2zm11.56 0L12 4.66l5.78 5.78L22 6.22 17.78 2zM2 17.78L6.22 22 12 16.22 6.22 12 2 17.78zm15.56 0L12 16.22l5.78 5.78L22 17.78 17.78 12zM12 7.78L7.78 12 12 16.22 16.22 12 12 7.78z" /></svg>;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="Discord"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          URL
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="https://discord.gg/..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="Join my Discord server"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Icon
        </label>
        <div className="flex gap-2">
          {icons.map((iconName) => (
            <button
              key={iconName}
              type="button"
              onClick={() => setIcon(iconName)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                icon === iconName
                  ? 'bg-[rgb(var(--md-sys-color-primary-container))] text-[rgb(var(--md-sys-color-on-primary-container))] scale-110'
                  : 'bg-[rgb(var(--md-sys-color-surface-container-high))] text-[rgb(var(--md-sys-color-on-surface-variant))] hover:bg-[rgb(var(--md-sys-color-surface-container-highest))]'
              }`}
            >
              {getIconPreview(iconName)}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button type="submit" disabled={loading} className="md-button w-full disabled:opacity-50">
        {loading ? 'Creating...' : 'Create Social'}
      </button>
    </form>
  );
}

function CreateFriendForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pfp, setPfp] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pfp) {
      setError('Please upload a profile picture');
      return;
    }
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('pfp', pfp);

    const res = await fetch('/api/friends', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Failed to create');
      return;
    }

    setName('');
    setDescription('');
    setPfp(null);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          placeholder="Friend name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPfp(e.target.files?.[0] || null)}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
          What I think of them
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))] resize-none"
          placeholder="what i think of them..."
          required
        />
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button type="submit" disabled={loading} className="md-button w-full disabled:opacity-50">
        {loading ? 'Creating...' : 'Create Friend'}
      </button>
    </form>
  );
}
