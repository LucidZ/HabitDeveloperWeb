import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

function Terms() {
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
                Terms of Use
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

          <Section title="Agreement">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              By downloading or using Habit Developer, you agree to these Terms of Use. If you do not
              agree, do not use the app.
            </p>
          </Section>

          <Section title="Subscriptions">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer offers optional auto-renewing subscriptions (monthly and annual) that
              unlock premium features. Subscriptions are billed through your Apple ID at the price
              shown at the time of purchase.
            </p>
            <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
              <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current billing period.</li>
              <li>You can manage or cancel your subscription at any time in your Apple ID account settings.</li>
              <li>Cancelling stops future charges but does not end access for the remainder of the paid period.</li>
            </ul>
          </Section>

          <Section title="Refund Policy">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              All purchases are processed by Apple through the App Store. Javi Labs does not handle
              billing directly and cannot issue refunds. To request a refund, please use Apple's
              standard refund process at{' '}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </Section>

          <Section title="Data Use">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Your habit data, tasks, and history are stored locally on your device and are never
              transmitted to our servers. The app fetches content from public third-party APIs (such
              as NASA and Pexels) to display curated photos; no personal data is sent as part of these
              requests. For full details, see our{' '}
              <Link
                to="/privacy"
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Acceptable Use">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              You agree to use Habit Developer only for lawful purposes and in accordance with these
              terms. You may not attempt to reverse engineer, decompile, or otherwise extract the
              source code of the app.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer is provided <strong style={{ color: '#1A1A1A' }}>"as is"</strong> without
              warranty of any kind, express or implied. We do not guarantee that the app will be
              error-free, uninterrupted, or meet your specific requirements. To the fullest extent
              permitted by applicable law, Javi Labs disclaims all warranties and liability for any
              damages arising from your use of the app.
            </p>
          </Section>

          <Section title="Changes">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We may update these terms as the app evolves. Continued use of the app after changes
              are posted constitutes your acceptance of the revised terms. The "last updated" date
              at the top of this page will reflect any changes.
            </p>
          </Section>

          <Section title="Contact">
            <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Questions about these terms?{' '}
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
          <Link to="/privacy" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Privacy
          </Link>
          <Link to="/support" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Terms;
