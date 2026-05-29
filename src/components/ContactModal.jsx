import { useState, useEffect } from 'react';

const FORMSPARK_FORM_ID = 'UYtrJ0oQz';
const BOTPOISON_PUBLIC_KEY = 'pk_0b5ee14f-cc9f-41ed-badb-3a63058d8f36';

function ContactModal({ isOpen, onClose, source }) {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@botpoison/browser';
      script.async = true;
      document.head.appendChild(script);
      return () => { if (document.head.contains(script)) document.head.removeChild(script); };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ email: '', subject: '', message: '', phone: '' });
      setSubmitStatus(null);
      onClose();
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (formData.phone) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      let botpoisonSolution = null;
      if (window.Botpoison) {
        try {
          const bp = new window.Botpoison({ publicKey: BOTPOISON_PUBLIC_KEY });
          botpoisonSolution = await bp.challenge();
        } catch { /* continue without it */ }
      }

      const { phone, ...rest } = formData;
      const payload = {
        ...rest,
        _source: 'Habit Developer Support',
        ...(source && { source }),
        ...(botpoisonSolution && { _botpoison: botpoisonSolution.solution }),
      };

      const response = await fetch(`https://submit-form.com/${FORMSPARK_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', subject: '', message: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const inputStyle = {
    width: '100%',
    padding: '0.625rem 1rem',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(212,165,116,0.25)',
    borderRadius: '0.75rem',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: 'inherit',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(6px)',
        padding: 'max(1rem, env(safe-area-inset-top)) 1rem max(1rem, env(safe-area-inset-bottom))',
      }}
      onClick={handleClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-y-auto"
        style={{
          backgroundColor: '#1A1A1A',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(212,165,116,0.15)' }}
        >
          <h2 className="font-display text-2xl font-semibold" style={{ color: '#D4A574' }}>
            Get in Touch
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 0 }}
            className="hover:opacity-70 transition-opacity disabled:opacity-30"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-10">
              <svg className="w-14 h-14 mx-auto mb-4" fill="none" stroke="#D4A574" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#D4A574' }}>
                Message Sent!
              </h3>
              <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Thanks for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Have a question, found a bug, or want to share feedback? We read every message.
              </p>

              <div>
                <label className="font-body block text-sm font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Email Address <span style={{ color: '#D4A574' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="your@email.com"
                  style={inputStyle}
                  className="font-body"
                />
              </div>

              <div>
                <label className="font-body block text-sm font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Topic <span style={{ color: '#D4A574' }}>*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  className="font-body"
                >
                  <option value="">Select a topic...</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="General Question">General Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-body block text-sm font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Message <span style={{ color: '#D4A574' }}>*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  className="font-body"
                />
              </div>

              {/* Honeypot */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
              />

              {submitStatus === 'error' && (
                <div
                  className="rounded-xl px-4 py-3"
                  style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}
                >
                  <p className="font-body text-sm" style={{ color: 'rgba(239,100,100,0.9)' }}>
                    Something went wrong. Please try again or email us directly at feedback@javilabs.dev
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-body font-medium text-sm rounded-xl py-3 transition-opacity hover:opacity-80 disabled:opacity-40"
                style={{ backgroundColor: 'rgba(212,165,116,0.95)', color: '#1A1A1A' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="font-body text-xs text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Protected by BotPoison spam detection. See our{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(212,165,116,0.7)' }} className="hover:opacity-70 transition-opacity">
                  privacy policy
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
