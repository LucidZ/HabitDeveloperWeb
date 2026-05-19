import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E8E0D5' }}>
      <header style={{ backgroundColor: '#1A1A1A' }} className="py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center transition-opacity hover:opacity-70"
            style={{ color: '#D4A574' }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-body">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-sm">
          <img
            src="/assets/habit-developer-icon.png"
            alt="Habit Developer"
            className="w-20 h-20 rounded-3xl mx-auto mb-8 opacity-60"
          />
          <p
            className="font-display text-6xl font-semibold mb-4"
            style={{ color: '#D4A574' }}
          >
            404
          </p>
          <h1
            className="font-display text-2xl font-semibold mb-3"
            style={{ color: '#1A1A1A' }}
          >
            This page seems underdeveloped.
          </h1>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.5)' }}>
            Even the best habits take time to form. This one just doesn't exist yet.
          </p>
          <Link
            to="/"
            className="inline-block font-body text-sm px-6 py-3 rounded-xl transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#1A1A1A', color: '#D4A574' }}
          >
            Go home
          </Link>
        </div>
      </main>

      <footer className="py-8 px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm" style={{ color: 'rgba(0,0,0,0.4)' }}>
            &copy; {new Date().getFullYear()} Javi Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Privacy
            </Link>
            <Link to="/support" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Support
            </Link>
            <Link to="/terms" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
