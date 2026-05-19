import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Intersection observer hook for scroll-in animations ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Feature card ─── */
function FeatureCard({ icon, title, body, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 md:p-7 transition-all duration-700"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'rgba(212,165,116,0.1)', color: '#D4A574' }}
      >
        {icon}
      </div>
      <h3
        className="font-display text-xl font-semibold mb-2"
        style={{ color: '#1A1A1A' }}
      >
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>
        {body}
      </p>
    </div>
  );
}

/* ─── Step card for the darkroom section ─── */
function StepCard({ number, title, body, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="flex gap-4 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-body font-medium text-sm"
        style={{ backgroundColor: '#1A1A1A', color: '#D4A574' }}
      >
        {number}
      </div>
      <div>
        <h4 className="font-body font-medium text-sm mb-1" style={{ color: '#1A1A1A' }}>
          {title}
        </h4>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
          {body}
        </p>
      </div>
    </div>
  );
}

/* ─── App Store badge (placeholder until live) ─── */
function AppStoreBadge() {
  return (
    <a
      href="#"
      aria-label="Download on the App Store (coming soon)"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-body font-medium text-sm transition-opacity hover:opacity-80"
      style={{
        backgroundColor: '#1A1A1A',
        color: 'rgba(255,255,255,0.9)',
        boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
      }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      Download on the App Store
    </a>
  );
}

/* ─── Main component ─── */
function Home() {
  const [heroRef, heroInView] = useInView(0.05);
  const [mechanicRef, mechanicInView] = useInView(0.1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8E0D5' }}>

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-50 px-6 py-4"
        style={{
          backgroundColor: 'rgba(232,224,213,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/habit-developer-icon.png"
              alt="Habit Developer"
              className="w-8 h-8 rounded-xl"
            />
            <span className="font-display text-lg font-semibold" style={{ color: '#1A1A1A' }}>
              Habit Developer
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/support"
              className="font-body text-sm transition-opacity hover:opacity-60"
              style={{ color: 'rgba(0,0,0,0.5)' }}
            >
              Support
            </Link>
            <Link
              to="/privacy"
              className="font-body text-sm transition-opacity hover:opacity-60"
              style={{ color: 'rgba(0,0,0,0.5)' }}
            >
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="px-6 pt-20 pb-24">
        <div
          ref={heroRef}
          className="max-w-5xl mx-auto transition-all duration-1000"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs font-medium mb-8"
                  style={{
                    backgroundColor: 'rgba(212,165,116,0.12)',
                    color: '#D4A574',
                    border: '1px solid rgba(212,165,116,0.3)',
                  }}
                >
                  <span>📸</span>
                  iOS App · Free to start
                </div>
              </div>

              <h1
                className="font-display font-semibold mb-6"
                style={{
                  color: '#1A1A1A',
                  fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                }}
              >
                Develop your photos.<br />
                <span style={{ color: '#D4A574' }}>Develop yourself.</span>
              </h1>

              <p
                className="font-body text-lg leading-relaxed mb-10 mx-auto md:mx-0"
                style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '460px' }}
              >
                Your daily photo starts dark and blurry — like undeveloped film. Complete your habits
                and watch it slowly reveal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
                <AppStoreBadge />
                <span className="font-body text-sm" style={{ color: 'rgba(0,0,0,0.35)' }}>
                  Free for 2 habits · Subscription to unlock more
                </span>
              </div>

            </div>

            {/* Right: phone screenshot */}
            <div className="flex-shrink-0">
              <img
                src="/assets/Habit%20Gallery.png"
                alt="Habit Developer app showing the Habit Gallery with completed habits"
                className="w-56 sm:w-64 md:w-[270px]"
                style={{
                  filter: 'drop-shadow(0 32px 56px rgba(0,0,0,0.2))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Darkroom mechanic ── */}
      <section
        ref={mechanicRef}
        className="py-20"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        {/* Header */}
        <div className="px-6 max-w-5xl mx-auto mb-14">
          <div
            className="transition-all duration-700"
            style={{
              opacity: mechanicInView ? 1 : 0,
              transform: mechanicInView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <p
              className="font-body text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: 'rgba(212,165,116,0.7)' }}
            >
              The Mechanic
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-semibold mb-4"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Every habit is a darkroom.
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px' }}
            >
              Each day, a photo from your library is loaded — but hidden. Complete your tasks and
              watch it develop. The final reveal needs one more thing.
            </p>
          </div>
        </div>

        {/* Paired screenshot + step — responsive grid: 4 col → 2×2 → 1×4 */}
        <div
          className="px-6 max-w-5xl mx-auto"
          style={{
            opacity: mechanicInView ? 1 : 0,
            transition: 'opacity 0.8s ease',
            transitionDelay: '200ms',
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {[
              { n: '1', src: '/assets/cat%20-%2001.png', title: 'Photo loaded, locked',    body: 'Dark, blurred, sepia — a photo waiting to be earned.' },
              { n: '2', src: '/assets/cat%20-%2002.png', title: 'Tasks unlock the light',  body: 'Every check-off lifts the darkness a little more.' },
              { n: '3', src: '/assets/cat%20-%2003.png', title: '67% — almost there',      body: 'Tasks get you most of the way. The rest needs something different.' },
              { n: '4', src: '/assets/cat%20-%2004.png', title: 'Shake to develop',        body: 'A shake, a flash, a haptic pulse — fully revealed.' },
            ].map(({ n, src, title, body }, i) => {
              const isFinal = i === 3;
              return (
                <div key={n} className="flex flex-col">
                  <div
                    className="w-full overflow-hidden"
                    style={{
                      aspectRatio: '9 / 19.5',
                      filter: isFinal
                        ? 'drop-shadow(0 24px 56px rgba(212,165,116,0.55))'
                        : 'drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
                    }}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center font-body font-medium text-xs mb-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: '#D4A574' }}
                    >
                      {n}
                    </div>
                    <h4 className="font-body font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {title}
                    </h4>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p
              className="font-body text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: 'rgba(212,165,116,0.8)' }}
            >
              Features
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-semibold"
              style={{ color: '#1A1A1A' }}
            >
              Built for consistency.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              delay={0}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Photo-driven motivation"
              body="Your own photos become the reward. The more consistent you are, the more you see."
            />
            <FeatureCard
              delay={80}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
              title="Multi-task habits"
              body="Break any habit into steps. Each task drives the reveal forward — every check-off counts."
            />
            <FeatureCard
              delay={160}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Private by design"
              body="Your photos never leave your device. No accounts, no uploads, no tracking."
            />
            <FeatureCard
              delay={240}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Streak tracking"
              body="Build momentum with daily streaks. Your gallery grows as your consistency does."
            />
          </div>
        </div>
      </section>

      {/* ── Pricing / CTA ── */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: 'rgba(212,165,116,0.7)' }}
          >
            Pricing
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Start developing.
          </h2>
          <p
            className="font-body text-base leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '420px', margin: '0 auto 2.5rem' }}
          >
            Your first 2 habits are free — forever. Ready to build more? Unlock unlimited habits
            with an annual subscription.
          </p>
          <AppStoreBadge />
          <p className="font-body text-xs mt-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            iOS only · Requires iOS 17+
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="px-6 py-10"
        style={{ borderTop: '1px solid rgba(0,0,0,0.1)', backgroundColor: '#E8E0D5' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/habit-developer-icon.png" alt="" className="w-7 h-7 rounded-xl" />
            <span className="font-display text-base font-semibold" style={{ color: '#1A1A1A' }}>
              Habit Developer
            </span>
          </div>
          <p className="font-body text-sm" style={{ color: 'rgba(0,0,0,0.4)' }}>
            by{' '}
            <a
              href="https://javilabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#D4A574' }}
            >
              Javi Labs
            </a>
          </p>
          <div className="flex gap-6">
            <Link to="/support" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Support
            </Link>
            <Link to="/privacy" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Privacy
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
