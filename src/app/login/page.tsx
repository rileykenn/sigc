import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';

export default function LoginPage() {
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
          <form className="space-y-6" action="/admin">
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
                  defaultValue="admin@sigolfclub.com.au"
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
                  defaultValue="password"
                  className="block w-full appearance-none rounded-lg border border-navy-200 px-4 py-3 text-navy-950 placeholder-navy-300 shadow-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/30 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-navy-300 text-navy-700 focus:ring-navy-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-navy-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-navy-700 underline underline-offset-4 decoration-gold-500/60 hover:decoration-gold-500 transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Sign in
                <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
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
