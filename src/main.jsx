import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/mobile.css';

const style = document.createElement('style');
style.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #000000; color: #ffffff; font-family: 'IBM Plex Mono', monospace; min-height: 100vh; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; font-family: inherit; }
  input, textarea, select { font-family: inherit; }
  ::placeholder { color: #444444; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
