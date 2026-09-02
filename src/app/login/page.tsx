'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lock, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(
        signInError.message === 'Invalid login credentials'
          ? 'Incorrect email or password. Please try again.'
          : signInError.message
      );
      setLoading(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-sand-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-100">
          <Lock size={24} strokeWidth={1.5} className="text-navy-700" />
        </div>
        <h1 className="mt-6 text-center font-display text-3xl font-semibold tracking-tight text-navy-950">
          Admin login
        </h1>
        <p className="mt-2 text-center text-sm text-navy-900/60">
          Sussex Inlet Golf Club content management
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm shadow-navy-900/5 sm:rounded-2xl sm:px-10 ring-1 ring-navy-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-800">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-lg border border-navy-200 px-4 py-3 text-navy-950 placeholder-navy-300 shadow-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/30 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-navy-800">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-lg border border-navy-200 px-4 py-3 text-navy-950 placeholder-navy-300 shadow-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/30 sm:text-sm transition-colors"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
                {error}
              </p>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 disabled:cursor-wait disabled:opacity-70"
              >
                {loading ? (
                  <>
                    Signing in
                    <Loader2 size={18} strokeWidth={1.5} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-navy-900/60 hover:text-navy-900 transition-colors"
            >
              &larr; Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
