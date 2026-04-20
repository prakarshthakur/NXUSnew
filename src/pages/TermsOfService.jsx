export default function TermsOfService() {
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
        <h1 className="nxus-legal-title">Terms of Service</h1>
        <div className="nxus-legal-updated">Last updated: April 2026</div>
        <div className="nxus-legal-divider" />

        <p className="nxus-legal-body">
          Welcome to <strong>NXUS</strong>. By accessing or using the NXUS platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
        </p>

        <h2 className="nxus-legal-section-title">1. Eligibility</h2>
        <p className="nxus-legal-body">
          NXUS is available exclusively to individuals who meet the following criteria:
        </p>
        <ul className="nxus-legal-list">
          <li>You must be at least <strong>18 years of age</strong>.</li>
          <li>You must be a currently enrolled student at an accredited university or higher education institution, or have recently graduated (within the last 12 months).</li>
          <li>You must provide a valid university email address for account verification when required.</li>
        </ul>
        <p className="nxus-legal-body">
          By registering, you represent and warrant that you meet these eligibility requirements.
        </p>

        <h2 className="nxus-legal-section-title">2. Account Responsibilities</h2>
        <ul className="nxus-legal-list">
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You agree to provide accurate, current, and complete information during registration.</li>
          <li>You must notify us immediately of any unauthorized use of your account.</li>
        </ul>

        <h2 className="nxus-legal-section-title">3. Acceptable Use</h2>
        <p className="nxus-legal-body">When using NXUS, you agree <strong>not</strong> to:</p>
        <ul className="nxus-legal-list">
          <li>Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</li>
          <li>Impersonate any person or entity, or misrepresent your university affiliation.</li>
          <li>Use the platform to promote commercial products, services, or spam.</li>
          <li>Attempt to gain unauthorized access to other users' accounts or platform infrastructure.</li>
          <li>Use automated tools, bots, or scrapers to access the Service.</li>
          <li>Post events or activities that involve illegal substances, underage drinking, or otherwise violate local laws in the UAE.</li>
        </ul>

        <h2 className="nxus-legal-section-title">4. User Content</h2>
        <p className="nxus-legal-body">
          You retain ownership of the content you post on NXUS. However, by posting content, you grant NXUS a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content solely for the purpose of operating and promoting the platform.
        </p>
        <p className="nxus-legal-body">
          We reserve the right to remove any content that violates these Terms or that we deem inappropriate, without prior notice.
        </p>

        <h2 className="nxus-legal-section-title">5. Event Participation & Safety</h2>
        <p className="nxus-legal-body">
          NXUS is a coordination platform — we facilitate connections between users who want to participate in activities together. <strong>NXUS does not organize, host, or supervise any events.</strong>
        </p>
        <ul className="nxus-legal-list">
          <li>You participate in any activity at your own risk.</li>
          <li>You are responsible for your own safety and for exercising reasonable judgement when meeting other users.</li>
          <li>NXUS is not liable for any injury, loss, damage, or dispute arising from in-person interactions or events coordinated through the platform.</li>
        </ul>

        <h2 className="nxus-legal-section-title">6. Limitation of Liability</h2>
        <p className="nxus-legal-body">
          To the maximum extent permitted by applicable law, NXUS and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, personal injury, or property damage, arising out of or relating to your use of the Service.
        </p>
        <p className="nxus-legal-body">
          The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, either express or implied.
        </p>

        <h2 className="nxus-legal-section-title">7. Termination</h2>
        <p className="nxus-legal-body">
          We reserve the right to suspend or terminate your account at any time, for any reason, including violation of these Terms. Upon termination, your right to use the Service ceases immediately, and we may delete your data in accordance with our Privacy Policy.
        </p>

        <h2 className="nxus-legal-section-title">8. Governing Law</h2>
        <p className="nxus-legal-body">
          These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
        </p>

        <h2 className="nxus-legal-section-title">9. Changes to Terms</h2>
        <p className="nxus-legal-body">
          We may revise these Terms at any time by updating this page. Your continued use of NXUS following the publication of revised Terms constitutes your acceptance of those changes.
        </p>

        <div className="nxus-legal-contact">
          <p className="nxus-legal-body" style={{ margin: 0 }}>
            <strong>Questions about these Terms?</strong> Contact us at{' '}
            <a href="mailto:prakarsh@nxus.fun">prakarsh@nxus.fun</a>
          </p>
        </div>
      </div>
    </main>
  );
}
