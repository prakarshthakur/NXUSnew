export default function PrivacyPolicy() {
  return (
    <main className="nxus-legal-shell">
      <style>{`
        .nxus-legal-shell {
          min-height: 100vh;
          background: #0A0A0A;
          color: #F0EDE8;
          font-family: 'DM Sans', 'Outfit', sans-serif;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 4vw, 3rem);
          position: relative;
        }

        .nxus-legal-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.12), transparent 40vw),
            #0A0A0A;
        }

        .nxus-legal-wrap {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }

        .nxus-legal-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid rgba(240, 237, 232, 0.15);
          background: transparent;
          color: rgba(240, 237, 232, 0.7);
          padding: 0.5rem 0.9rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 140ms ease, color 140ms ease;
          margin-bottom: 2rem;
        }

        .nxus-legal-back:hover {
          background: rgba(240, 237, 232, 0.06);
          color: #F0EDE8;
        }

        .nxus-legal-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #E8001C;
          margin-bottom: 0.6rem;
        }

        .nxus-legal-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.6rem, 6vw, 4rem);
          line-height: 0.92;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 0.5rem;
        }

        .nxus-legal-updated {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          color: rgba(240, 237, 232, 0.4);
          letter-spacing: 0.08em;
          margin-bottom: 2.4rem;
        }

        .nxus-legal-divider {
          height: 1px;
          background: linear-gradient(90deg, #E8001C, rgba(240, 237, 232, 0.06));
          margin: 0 0 2.4rem;
          opacity: 0.6;
        }

        .nxus-legal-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          margin: 2rem 0 0.6rem;
          border-left: 3px solid #E8001C;
          padding-left: 0.7rem;
        }

        .nxus-legal-body {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          margin: 0 0 1rem;
        }

        .nxus-legal-body strong {
          color: rgba(240, 237, 232, 0.9);
        }

        .nxus-legal-list {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          padding-left: 1.2rem;
          margin: 0 0 1rem;
        }

        .nxus-legal-list li {
          margin-bottom: 0.35rem;
        }

        .nxus-legal-contact {
          margin-top: 2rem;
          padding: 1rem;
          border: 1px solid rgba(232, 0, 28, 0.3);
          background: rgba(232, 0, 28, 0.04);
        }

        .nxus-legal-contact a {
          color: #E8001C;
          text-decoration: none;
        }

        .nxus-legal-contact a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="nxus-legal-wrap">
        <a href="/" className="nxus-legal-back">&larr; Back</a>

        <div className="nxus-legal-eyebrow">Legal</div>
        <h1 className="nxus-legal-title">Privacy Policy</h1>
        <div className="nxus-legal-updated">Last updated: April 2026</div>
        <div className="nxus-legal-divider" />

        <p className="nxus-legal-body">
          This Privacy Policy describes how <strong>NXUS</strong> ("we", "our", or "the Platform") collects, uses, and protects information from users ("you") of the NXUS mobile web application — a social coordination platform designed for university students in Dubai.
        </p>

        <h2 className="nxus-legal-section-title">1. Information We Collect</h2>
        <p className="nxus-legal-body">When you create an account or use NXUS, we may collect:</p>
        <ul className="nxus-legal-list">
          <li><strong>Account information:</strong> name, email address, and university affiliation provided during signup.</li>
          <li><strong>User-generated content:</strong> activity posts, event descriptions, and any text you submit through the platform.</li>
          <li><strong>Usage data:</strong> pages visited, features used, interaction timestamps, and device/browser information collected automatically through analytics.</li>
          <li><strong>Authentication data:</strong> login credentials managed securely through Firebase Authentication. We do not store passwords in plaintext.</li>
        </ul>

        <h2 className="nxus-legal-section-title">2. How We Use Your Information</h2>
        <ul className="nxus-legal-list">
          <li>To operate and maintain the NXUS platform and your account.</li>
          <li>To display activity listings and facilitate connections between users who want to participate.</li>
          <li>To send important service-related communications (e.g., account verification, security alerts).</li>
          <li>To improve the platform through aggregated, anonymized usage analytics.</li>
          <li>To enforce our Terms of Service and protect the safety of our community.</li>
        </ul>

        <h2 className="nxus-legal-section-title">3. Data Sharing & Third Parties</h2>
        <p className="nxus-legal-body">
          We do <strong>not</strong> sell your personal information to third parties. We may share limited data with:
        </p>
        <ul className="nxus-legal-list">
          <li><strong>Firebase (Google):</strong> for authentication, database hosting, and analytics.</li>
          <li><strong>Google Analytics:</strong> for anonymized usage metrics.</li>
          <li><strong>Law enforcement:</strong> if required by law or to protect the safety of users.</li>
        </ul>

        <h2 className="nxus-legal-section-title">4. Data Storage & Security</h2>
        <p className="nxus-legal-body">
          Your data is stored on Google Cloud infrastructure through Firebase. We implement reasonable security measures including encrypted connections (HTTPS), secure authentication flows, and access-controlled databases. However, no method of electronic transmission or storage is 100% secure.
        </p>

        <h2 className="nxus-legal-section-title">5. Your Rights</h2>
        <p className="nxus-legal-body">You have the right to:</p>
        <ul className="nxus-legal-list">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your account and associated data.</li>
          <li>Withdraw consent for optional data processing at any time.</li>
        </ul>
        <p className="nxus-legal-body">
          To exercise any of these rights, contact us at the email listed below.
        </p>

        <h2 className="nxus-legal-section-title">6. Cookies & Local Storage</h2>
        <p className="nxus-legal-body">
          NXUS uses browser local storage and session storage to maintain your authentication state and user preferences. We use Google Analytics cookies for anonymized traffic analysis. No advertising cookies are used.
        </p>

        <h2 className="nxus-legal-section-title">7. Children's Privacy</h2>
        <p className="nxus-legal-body">
          NXUS is intended for users aged 18 and older who are enrolled at accredited universities. We do not knowingly collect information from anyone under 18. If we become aware of such collection, we will promptly delete the data.
        </p>

        <h2 className="nxus-legal-section-title">8. Changes to This Policy</h2>
        <p className="nxus-legal-body">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of NXUS after changes constitutes acceptance of the updated policy.
        </p>

        <div className="nxus-legal-contact">
          <p className="nxus-legal-body" style={{ margin: 0 }}>
            <strong>Questions or concerns?</strong> Reach us at{' '}
            <a href="mailto:prakarsh@nxus.fun">prakarsh@nxus.fun</a>
          </p>
        </div>
      </div>
    </main>
  );
}
