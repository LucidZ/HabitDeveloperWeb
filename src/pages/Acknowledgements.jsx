import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Acknowledgements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8E0D5' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1A1A1A' }} className="py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center mb-6 transition-opacity hover:opacity-70"
            style={{ color: '#D4A574' }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-body">Back</span>
          </Link>
          <div className="flex items-center gap-4">
            <img
              src="/assets/habit-developer-icon.png"
              alt="Habit Developer"
              className="w-12 h-12 rounded-2xl"
            />
            <div>
              <h1
                className="font-display text-3xl md:text-4xl font-semibold"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Acknowledgements
              </h1>
              <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Habit Developer wouldn't be possible without these
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-6">

          <Section title="Content & Media">
            <ul className="space-y-4">
              <Credit
                name="Pexels"
                body="Beautiful photos provided by Pexels and their contributing photographers, licensed under the Pexels License."
              />
              <Credit
                name="NASA"
                body="Space imagery from NASA's Astronomy Picture of the Day (APOD) and curated image collection. NASA content is in the public domain."
              />
              <Credit
                name="Cleveland Museum of Art"
                body="Artwork from the Cleveland Museum of Art Open Access collection, made available under CC0 (public domain)."
              />
            </ul>
          </Section>

          <Section title="Open Source Software">
            <ul className="space-y-4">
              <Credit name="React Native" body="MIT License" />
              <Credit name="Expo" body="MIT License" />
              <Credit name="Google Fonts" body="Fonts licensed under the SIL Open Font License" />
              <Credit name="TelemetryDeck" body="Privacy-friendly analytics" />
            </ul>
          </Section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section
      className="rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
    >
      <h2
        className="font-display text-2xl font-semibold mb-4"
        style={{ color: '#1A1A1A' }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Credit({ name, body }) {
  return (
    <li>
      <p className="font-body font-semibold" style={{ color: '#1A1A1A' }}>
        {name}
      </p>
      <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
        {body}
      </p>
    </li>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 mt-12" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm" style={{ color: 'rgba(0,0,0,0.4)' }}>
          &copy; {new Date().getFullYear()} Javi Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Home
          </Link>
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
  );
}

export default Acknowledgements;
