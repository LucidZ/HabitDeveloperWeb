import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

const FAQ = [
  {
    q: 'How does the photo reveal work?',
    a: 'Each habit is paired with a photo from your library. The photo starts dark and blurry — like undeveloped film — and gradually clears as you complete your daily tasks. Once you hit 95% completion, give your phone a shake to trigger the final reveal.',
  },
  {
    q: 'What\'s included in the free version vs. Premium?',
    a: 'Habit Developer is free to use with core tracking features. Habit Developer Premium ($4.99/year) unlocks unlimited habits, advanced stats, and more. Your data is never deleted if you downgrade.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Open the Settings app on your iPhone → Apple ID → Subscriptions → Habit Developer → Cancel Subscription. You keep access until the end of the current billing period.',
  },
  {
    q: 'Where are my photos and habits stored?',
    a: 'Everything stays on your device. Your photos are never uploaded to any server, and habit data is stored locally and synced across your own devices via iCloud. Because we don\'t hold your data on our servers, we can\'t recover it if it\'s lost — for example, after a device reset or an iCloud issue. We recommend keeping regular device backups.',
  },
  {
    q: 'Where do the habit photos come from?',
    a: 'You can use photos from your own library, or choose from a curated set of sources: NASA\'s Astronomy Picture of the Day, Wikimedia\'s Picture of the Day, the Cleveland Museum of Art collection, and Pexels. Each habit can have its own source.',
  },
  {
    q: 'The app isn\'t working as expected. What should I do?',
    a: 'Try closing and reopening the app. If the issue persists, use the contact form above with a description of the problem and your iOS version.',
  },
];

function Support() {
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
                Support
              </h1>
              <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Habit Developer · Javi Labs
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Contact card */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: '#1A1A1A', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}
          >
            <h2
              className="font-display text-2xl font-semibold mb-3"
              style={{ color: 'rgba(212,165,116,0.95)' }}
            >
              Get in Touch
            </h2>
            <p className="font-body leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Have a question, found a bug, or want to share feedback? We read every message.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'rgba(212,165,116,0.95)',
                color: '#1A1A1A',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a message
            </button>
          </div>

          {/* FAQ */}
          <div>
            <h2
              className="font-display text-3xl font-semibold mb-6"
              style={{ color: '#1A1A1A' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>

          {/* Privacy link */}
          <div
            className="rounded-xl p-5"
            style={{
              borderLeft: '3px solid #D4A574',
              backgroundColor: 'rgba(212,165,116,0.06)',
            }}
          >
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>
              For information on how we handle your data, see the{' '}
              <Link
                to="/privacy"
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#D4A574' }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
    >
      <h3 className="font-body font-medium text-base mb-2" style={{ color: '#1A1A1A' }}>
        {question}
      </h3>
      <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>
        {answer}
      </p>
    </div>
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
          <Link to="/terms" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Support;
