import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="nxus-site-footer">
      <style>{`
        .nxus-site-footer {
          width: 100%;
          border-top: 1px solid rgba(232, 0, 28, 0.22);
          background: #080808;
          padding: 1rem clamp(1.2rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
          flex-wrap: wrap;
          font-family: 'Space Mono', 'IBM Plex Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          position: relative;
          z-index: 2;
        }

        .nxus-site-footer a {
          color: rgba(240, 237, 232, 0.52);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 140ms ease;
        }

        .nxus-site-footer a:hover {
          color: #E8001C;
        }

        .nxus-footer-dot {
          color: rgba(232, 0, 28, 0.4);
          user-select: none;
        }
      `}</style>

      <Link to="/privacy">Privacy Policy</Link>
      <span className="nxus-footer-dot" aria-hidden="true">&middot;</span>
      <Link to="/terms">Terms of Service</Link>
      <span className="nxus-footer-dot" aria-hidden="true">&middot;</span>
      <a href="mailto:prakarsh@nxus.fun">Support</a>
    </footer>
  );
}
