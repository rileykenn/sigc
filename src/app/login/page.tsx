import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-fairway-100">
          <Lock className="h-6 w-6 text-fairway-700" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-fairway-900">
          Admin Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sussex Inlet Golf Club Content Management System
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-fairway-900/5 sm:rounded-2xl sm:px-10 ring-1 ring-gray-100">
          <form className="space-y-6" action="/admin">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  className="block w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-fairway-500 focus:outline-none focus:ring-fairway-500 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                  className="block w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-fairway-500 focus:outline-none focus:ring-fairway-500 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-fairway-600 focus:ring-fairway-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-fairway-600 hover:text-fairway-500 transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group flex w-full justify-center rounded-xl border border-transparent bg-fairway-700 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-fairway-800 focus:outline-none focus:ring-2 focus:ring-fairway-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Sign in to Dashboard
                <ArrowRight className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
             <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
               &larr; Back to website
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
