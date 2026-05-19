import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

function Privacy() {
  const [modalOpen, setModalOpen] = useState(false);

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
                Privacy Policy
              </h1>
              <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Habit Developer · Last updated: May 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-6">

          <Section title={null}>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              <strong style={{ color: '#1A1A1A' }}>Entity:</strong> Javi Labs LLC ("we," "us," or "our")
            </p>
          </Section>

          <Section title="Overview">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer is designed with your privacy as a first principle. We do not collect,
              transmit, or store your personal data on any server. Your habits, tasks, and history
              live only on your device.
            </p>
          </Section>

          <Section title="Photos">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Each habit's daily reveal can show one of two types of photos — your choice when setting
              up the habit:
            </p>
            <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
              <li>
                <strong style={{ color: '#1A1A1A' }}>Your photo library</strong> — photos are read
                locally from your device and are never uploaded, shared, or transmitted off your
                device in any form.
              </li>
              <li>
                <strong style={{ color: '#1A1A1A' }}>Curated external sources</strong> — the app
                fetches images from public, royalty-free APIs (NASA Astronomy Picture of the Day,
                Pexels, the Cleveland Museum of Art, and Wikimedia Commons). These requests are
                outbound-only: no personal data is sent, only a standard HTTP request that
                includes your IP address as part of normal internet traffic. No user-identifying
                information is transmitted.
              </li>
            </ul>
          </Section>

          <Section title="Analytics">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We do not collect any personal data or usage analytics from within the app. The only
              analytics we use are Apple's App Store Connect aggregate statistics (downloads, crash
              reports), which Apple provides automatically and do not include any personally
              identifiable information.
            </p>
          </Section>

          <Section title="Data Storage">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              All app data — your habits, tasks, streaks, and completion history — is stored locally
              on your device using the device's secure storage. No data is sent to our servers.
            </p>
          </Section>

          <Section title="In-App Purchases">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer offers optional subscriptions (monthly and annual) processed entirely
              through Apple's App Store. Javi Labs does not receive or store your payment information.
              All billing and receipt validation is handled by Apple.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              The app connects to the following external services solely to fetch curated content.
              No personal data, account information, or usage data is sent to any of them.
            </p>
            <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
              <li><strong style={{ color: '#1A1A1A' }}>NASA APOD API</strong> — daily astronomy photographs from NASA</li>
              <li><strong style={{ color: '#1A1A1A' }}>Pexels</strong> — curated stock photography</li>
              <li><strong style={{ color: '#1A1A1A' }}>Cleveland Museum of Art</strong> — open-access CC0 artwork</li>
              <li><strong style={{ color: '#1A1A1A' }}>Wikimedia Commons</strong> — Picture of the Day</li>
              <li><strong style={{ color: '#1A1A1A' }}>Apple App Store Connect</strong> — aggregate, anonymized download and crash statistics provided automatically by Apple as part of iOS distribution</li>
            </ul>
            <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We do not use any third-party analytics or tracking SDKs.
            </p>
          </Section>

          <Section title="Children">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer is not directed at children under 13. We do not knowingly collect
              information from children under 13.
            </p>
          </Section>

          <Section title="Changes">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We may update this policy as the app evolves. The "last updated" date at the top of
              this page will reflect any changes.
            </p>
          </Section>

          <Section title="Contact">
            <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Questions about this policy?{' '}
              <button
                onClick={() => setModalOpen(true)}
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                Get in touch
              </button>
              .
            </p>
          </Section>
        </div>
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section
      className="rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
    >
      {title && (
        <h2
          className="font-display text-2xl font-semibold mb-4"
          style={{ color: '#1A1A1A' }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
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
          <Link to="/support" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Privacy;
