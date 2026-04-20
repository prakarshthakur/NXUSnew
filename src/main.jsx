import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

registerSW({ immediate: true });

const style = document.createElement('style');
style.textContent = `
  :root {
    --nxus-red: #E8001C;
    --nxus-black: #0A0A0A;
    --nxus-panel: #111111;
    --nxus-cream: #F0EDE8;
    --nxus-muted: rgba(240, 237, 232, 0.68);
    --nxus-dim: rgba(240, 237, 232, 0.42);
    --nxus-hairline: rgba(232, 0, 28, 0.38);
    --display-font: 'Bebas Neue', 'Barlow Condensed', sans-serif;
    --body-font: 'DM Sans', 'Outfit', sans-serif;
    --mono-font: 'Space Mono', 'IBM Plex Mono', monospace;
  }
  @font-face {
    font-family: 'grovant';
    src: url('/fonts/grovant.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0A0A0A; color: #ffffff; font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; font-family: inherit; }
  input, textarea, select { font-family: inherit; }
  ::placeholder { color: rgba(240,237,232,0.32); }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
`;
document.head.appendChild(style);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("React Crash:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red', background: 'black', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2>Oops, the app crashed!</h2>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
