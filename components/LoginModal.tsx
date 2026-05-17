'use client';

import { useState, useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setError('');
      setUsername('');
      setPassword('');
      setIsRegister(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || 'Something went wrong');
      return;
    }

    onLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative md-card w-full max-w-md animate-scale-in">
        <h2 className="text-2xl font-semibold text-[rgb(var(--md-sys-color-on-surface))] mb-6 text-center">
          {isRegister ? 'Create Account' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
              placeholder="your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[rgb(var(--md-sys-color-on-surface-variant))] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--md-sys-color-surface-container-high))] border border-[rgb(var(--md-sys-color-outline-variant))] border-opacity-50 focus:border-[rgb(var(--md-sys-color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--md-sys-color-primary))] focus:ring-opacity-30 transition-all duration-200 text-[rgb(var(--md-sys-color-on-surface))]"
              placeholder="your password"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="md-button w-full disabled:opacity-50"
          >
            {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className="text-center text-[rgb(var(--md-sys-color-on-surface-variant))] text-sm mt-6">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-[rgb(var(--md-sys-color-primary))] hover:underline font-medium"
          >
            {isRegister ? 'Login' : 'Create one'}
          </button>
        </p>
      </div>
    </div>
  );
}
