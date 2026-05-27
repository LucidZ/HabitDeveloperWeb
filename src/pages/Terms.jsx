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
                Habit Developer · Last updated: May 26, 2026
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

          <Section title="1. Acceptance of Terms">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              By downloading, installing, or using Habit Developer (the "App"), you agree to be bound
              by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              These Terms apply to all users of the App, regardless of platform. Your continued use of
              the App following any update to these Terms constitutes acceptance of the revised Terms.
              We will notify you of material changes by updating the "Last Updated" date above.
            </p>
          </Section>

          <Section title="2. About the App">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Habit Developer is a personal habit-tracking application that helps you build routines
              through daily practice and photo-based rewards. The App runs entirely on your device. We
              do not operate accounts, cloud storage, or servers that store your personal data.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              You must be at least 13 years of age to use the App. If you are between 13 and 18, you
              must have consent from a parent or legal guardian. By using the App, you represent that
              you meet these requirements.
            </p>
          </Section>

          <Section title="4. Free Tier and Subscription">
            <Subsection title="4.1 Free Tier">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App is available for free with a limit of{' '}
                <strong style={{ color: '#1A1A1A' }}>two (2) habits</strong>. All core features —
                daily sessions, photo reveal, streak history, and habit reminders — are available
                within the free tier.
              </p>
            </Subsection>
            <Subsection title="4.2 Paid Subscription">
              <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                A paid subscription removes the habit limit, allowing you to create an unlimited
                number of habits. Subscriptions are available in the following plans:
              </p>
              <ul className="font-body leading-relaxed list-disc pl-5 space-y-1" style={{ color: 'rgba(0,0,0,0.65)' }}>
                <li><strong style={{ color: '#1A1A1A' }}>Monthly:</strong> billed monthly</li>
                <li><strong style={{ color: '#1A1A1A' }}>Annual:</strong> billed once per year</li>
              </ul>
              <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Current pricing is displayed in the App before purchase. Prices may vary by region
                and are set in accordance with Apple App Store or Google Play Store pricing tiers.
              </p>
            </Subsection>
            <Subsection title="4.3 Free Trials">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                If a free trial is offered, the trial duration and what happens at its conclusion
                will be clearly disclosed before you subscribe. Payment is charged at the end of
                the trial period unless you cancel before it expires.
              </p>
            </Subsection>
          </Section>

          <Section title="5. Subscription Billing, Renewal, and Cancellation">
            <Subsection title="5.1 Auto-Renewal">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Subscriptions <strong style={{ color: '#1A1A1A' }}>automatically renew</strong> at
                the end of each billing period at the then-current price unless cancelled at least{' '}
                <strong style={{ color: '#1A1A1A' }}>24 hours before</strong> the renewal date.
                Renewal charges are processed through your Apple ID or Google Play account.
              </p>
            </Subsection>
            <Subsection title="5.2 How to Cancel">
              <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
                <li>
                  <strong style={{ color: '#1A1A1A' }}>iOS:</strong> Open the Settings app → tap
                  your name → Subscriptions → Habit Developer → Cancel Subscription.
                </li>
                <li>
                  <strong style={{ color: '#1A1A1A' }}>Android:</strong> Open the Google Play
                  Store → tap your profile icon → Payments &amp; subscriptions → Subscriptions →
                  Habit Developer → Cancel Subscription.
                </li>
              </ul>
              <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Cancellation takes effect at the end of the current billing period. You retain
                access to paid features until then.
              </p>
            </Subsection>
            <Subsection title="5.3 Price Changes">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                We reserve the right to change subscription prices. If your price changes, we will
                notify you in advance through the App Store or Play Store, and you may cancel
                before the change takes effect.
              </p>
            </Subsection>
            <Subsection title="5.4 Refunds">
              <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                All purchases are processed by Apple or Google. Refund requests must be submitted
                to them directly:
              </p>
              <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
                <li>
                  <strong style={{ color: '#1A1A1A' }}>Apple:</strong>{' '}
                  <a
                    href="https://reportaproblem.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#D4A574' }}
                    className="hover:opacity-70 transition-opacity underline"
                  >
                    reportaproblem.apple.com
                  </a>
                </li>
                <li>
                  <strong style={{ color: '#1A1A1A' }}>Google:</strong> Through the Google Play
                  Store Help Center
                </li>
              </ul>
              <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                We do not control and cannot process refunds ourselves.
              </p>
            </Subsection>
            <Subsection title="5.5 Restore Purchases">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                If you have an active subscription and reinstall the App or switch devices, use the
                "Restore Purchase" option on the subscription screen to recover access.
              </p>
            </Subsection>
          </Section>

          <Section title="6. License Grant">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable license to install and use the App on devices you own or control, solely for
              your personal, non-commercial purposes. This license does not include the right to
              sublicense, modify, adapt, translate, reverse engineer, decompile, disassemble, or
              create derivative works based on the App.
            </p>
          </Section>

          <Section title="7. Permissions and Data">
            <Subsection title="7.1 Local-Only Storage">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                All data you create in the App — including habits, session history, and settings —
                is stored <strong style={{ color: '#1A1A1A' }}>exclusively on your device</strong>{' '}
                using the device's local storage. We do not have access to this data. Uninstalling
                the App permanently deletes all locally stored habit data unless your device or
                OS-level backup has preserved it.
              </p>
            </Subsection>
            <Subsection title="7.2 Photo Library Access">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App may request access to your device's photo library to use personal photos as
                daily rewards. Your photos are processed entirely on-device and are{' '}
                <strong style={{ color: '#1A1A1A' }}>never transmitted to us or any third party</strong>.
                Photo library access is optional; you may decline it and use curated photos from
                our third-party photo partners instead.
              </p>
            </Subsection>
            <Subsection title="7.3 Notification Permissions">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App may request permission to send local push notifications for habit reminders.
                You may enable or disable these per habit from within the App, or manage them at
                the system level in your device settings.
              </p>
            </Subsection>
            <Subsection title="7.4 No User Accounts">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App does not require you to create an account. We do not collect your name,
                email address, or any identifying information as part of normal App usage.
              </p>
            </Subsection>
            <Subsection title="7.5 Remote Photo Sources">
              <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                When you use curated photo collections, the App fetches images from the following
                third-party services. No personal data is transmitted with these requests — only
                content filters and date parameters:
              </p>
              <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
                <li><strong style={{ color: '#1A1A1A' }}>Pexels</strong> (pexels.com) — curated photography</li>
                <li><strong style={{ color: '#1A1A1A' }}>NASA Astronomy Picture of the Day</strong> (api.nasa.gov) — public domain imagery</li>
                <li><strong style={{ color: '#1A1A1A' }}>Wikimedia Commons</strong> (commons.wikimedia.org) — freely licensed media</li>
                <li><strong style={{ color: '#1A1A1A' }}>Cleveland Museum of Art Open Access</strong> (openaccess-api.clevelandart.org) — CC0 artwork</li>
              </ul>
              <p className="font-body leading-relaxed mt-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Fetched images are cached locally on your device for up to 7 days and then
                automatically removed. Use of these services is subject to their respective terms
                and policies.
              </p>
            </Subsection>
            <Subsection title="7.6 Over-the-Air Updates">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App uses Expo Updates to deliver bug fixes and improvements without requiring a
                full App Store update. These updates may be applied silently in the background. No
                personal data is transmitted during this process.
              </p>
            </Subsection>
            <Subsection title="7.7 Data Portability and Deletion">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Because all data is stored locally, you control it entirely. To delete your data,
                uninstall the App. There is no account to deactivate and no server-side data to
                request deletion of.
              </p>
            </Subsection>
          </Section>

          <Section title="8. Intellectual Property">
            <Subsection title="8.1 Our Content">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The App, including its design, code, text, graphics, and curated content, is owned
                by Javi Labs LLC and protected by applicable intellectual property laws. Nothing in
                these Terms transfers any ownership to you.
              </p>
            </Subsection>
            <Subsection title="8.2 Your Content">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Photos you select from your own library remain entirely your property. You grant us
                no rights to your personal photos.
              </p>
            </Subsection>
            <Subsection title="8.3 Third-Party Photos">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Curated photos sourced from Pexels, NASA, Wikimedia Commons, and the Cleveland
                Museum of Art are subject to their respective licenses (Creative Commons, CC0, or
                attribution-required). Attribution information is included within the App where
                required.
              </p>
            </Subsection>
          </Section>

          <Section title="9. Prohibited Uses">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              You agree not to:
            </p>
            <ul className="font-body leading-relaxed list-disc pl-5 space-y-2" style={{ color: 'rgba(0,0,0,0.65)' }}>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Circumvent or tamper with subscription or feature gating mechanisms</li>
              <li>Interfere with the App's functionality or security</li>
              <li>Use the App to infringe on any third party's intellectual property rights</li>
            </ul>
          </Section>

          <Section title="10. Third-Party Services and Links">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              The App may contain links to third-party websites or services (such as the support
              page or photo provider sites). We are not responsible for the content, privacy
              practices, or availability of third-party services. Your use of third-party services
              is at your own risk and subject to their terms.
            </p>
          </Section>

          <Section title="11. Disclaimer of Warranties">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)', fontVariant: 'small-caps' }}>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR FREE OF
              VIRUSES. YOUR USE OF THE APP IS AT YOUR SOLE RISK.
            </p>
          </Section>

          <Section title="12. Limitation of Liability">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JAVI LABS LLC
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
              ARISING OUT OF OR RELATED TO YOUR USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES.
            </p>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP SHALL
              NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE (12)
              MONTHS PRECEDING THE CLAIM, OR (B) FIFTY U.S. DOLLARS ($50.00).
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              NOTHING IN THESE TERMS LIMITS LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY
              NEGLIGENCE, FRAUD, OR ANY OTHER LIABILITY THAT CANNOT BE EXCLUDED BY APPLICABLE LAW.
            </p>
          </Section>

          <Section title="13. Indemnification">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              You agree to indemnify, defend, and hold harmless Javi Labs LLC from and against any
              claims, liabilities, damages, losses, and expenses (including legal fees) arising out
              of your use of the App in violation of these Terms.
            </p>
          </Section>

          <Section title="14. Governing Law and Dispute Resolution">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(0,0,0,0.65)' }}>
              These Terms are governed by the laws of the State of Colorado, United States, without
              regard to its conflict-of-law provisions. Any disputes arising from these Terms or
              your use of the App shall be resolved in the state or federal courts located in
              Colorado, and you consent to personal jurisdiction in those courts.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              If you are an EU/EEA resident, you may also have the right to bring a claim in the
              courts of your country of residence.
            </p>
          </Section>

          <Section title="15. Changes to the App">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We reserve the right to modify, suspend, or discontinue the App or any feature at any
              time, with or without notice. We are not liable to you or any third party for any
              modification, suspension, or discontinuation of the App.
            </p>
          </Section>

          <Section title="16. Termination">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              We may suspend or terminate your access to the App if you violate these Terms. You
              may stop using the App at any time. Sections 8 (Intellectual Property), 11
              (Disclaimer of Warranties), 12 (Limitation of Liability), 13 (Indemnification), and
              14 (Governing Law) survive termination.
            </p>
          </Section>

          <Section title="17. Apple-Specific Terms">
            <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,0.65)' }}>
              The following terms apply to App versions downloaded from the Apple App Store and are
              required by Apple Inc.
            </p>
            <Subsection title="17.1 Acknowledgement">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                You and we acknowledge that these Terms are concluded between you and Javi Labs LLC
                only, and not with Apple Inc. ("Apple"). Javi Labs LLC, not Apple, is solely
                responsible for the App and its content.
              </p>
            </Subsection>
            <Subsection title="17.2 Scope of License">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                The license granted to you is limited to a non-transferable license to use the App
                on any Apple-branded products you own or control, as permitted by the Usage Rules
                set forth in the Apple Media Services Terms and Conditions.
              </p>
            </Subsection>
            <Subsection title="17.3 Maintenance and Support">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Javi Labs LLC is solely responsible for providing maintenance and support services
                for the App. Apple has no obligation whatsoever to furnish any maintenance and
                support services with respect to the App.
              </p>
            </Subsection>
            <Subsection title="17.4 Warranty">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                In the event of any failure of the App to conform to any applicable warranty, you
                may notify Apple, and Apple will refund the purchase price for the App (if any) to
                you. To the maximum extent permitted by applicable law, Apple will have no other
                warranty obligation whatsoever with respect to the App. Any other claims, losses,
                liabilities, damages, costs, or expenses attributable to failure to conform to any
                warranty will be our sole responsibility.
              </p>
            </Subsection>
            <Subsection title="17.5 Product Claims">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Javi Labs LLC, not Apple, is responsible for addressing any claims by you or any
                third party relating to the App or your possession and/or use of the App, including
                but not limited to: (i) product liability claims; (ii) any claim that the App fails
                to conform to any applicable legal or regulatory requirement; and (iii) claims
                arising under consumer protection, privacy, or similar legislation.
              </p>
            </Subsection>
            <Subsection title="17.6 Intellectual Property Rights">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                In the event of any third-party claim that the App or your possession and use of
                the App infringes that third party's intellectual property rights, Javi Labs LLC,
                not Apple, will be solely responsible for the investigation, defense, settlement,
                and discharge of any such intellectual property infringement claim.
              </p>
            </Subsection>
            <Subsection title="17.7 Legal Compliance">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                You represent and warrant that (i) you are not located in a country that is subject
                to a U.S. Government embargo or that has been designated by the U.S. Government as
                a "terrorist supporting" country; and (ii) you are not listed on any U.S.
                Government list of prohibited or restricted parties.
              </p>
            </Subsection>
            <Subsection title="17.8 Third-Party Beneficiary">
              <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                You and we acknowledge and agree that Apple, and Apple's subsidiaries, are
                third-party beneficiaries of these Terms, and that, upon your acceptance of these
                Terms, Apple will have the right (and will be deemed to have accepted the right) to
                enforce these Terms against you as a third-party beneficiary thereof.
              </p>
            </Subsection>
          </Section>

          <Section title="18. Severability">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              If any provision of these Terms is found to be invalid or unenforceable, that
              provision will be limited or eliminated to the minimum extent necessary, and the
              remaining Terms will remain in full force and effect.
            </p>
          </Section>

          <Section title="19. Entire Agreement">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              These Terms, together with our{' '}
              <Link
                to="/privacy"
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Javi Labs LLC regarding your use of
              the App and supersede all prior agreements and understandings.
            </p>
          </Section>

          <Section title="20. Contact">
            <p className="font-body leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Questions about these Terms?{' '}
              <button
                onClick={() => setModalOpen(true)}
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                Get in touch
              </button>
              . You can also visit our{' '}
              <Link
                to="/support"
                style={{ color: '#D4A574' }}
                className="hover:opacity-70 transition-opacity underline"
              >
                support page
              </Link>
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

function Subsection({ title, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3
        className="font-display text-base font-semibold mb-2"
        style={{ color: '#1A1A1A' }}
      >
        {title}
      </h3>
      {children}
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
          <Link to="/support" className="font-body text-sm hover:opacity-70 transition-opacity" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Terms;
