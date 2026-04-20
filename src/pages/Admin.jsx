import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useAuth } from '../contexts/AuthContext';

const EMPTY_FORM = {
  title: '',
  shortDescription: '',
  fullDescription: '',
  date: '',
  location: '',
  formLink: '',
};

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);
  const [editingLinkValue, setEditingLinkValue] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'events'), snapshot => {
      setEvents(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async e => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      await addDoc(collection(db, 'events'), { ...form });
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error('Add event failed:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async id => {
    try {
      await deleteDoc(doc(db, 'events', id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const startEditLink = (id, currentLink) => {
    setEditingLinkId(id);
    setEditingLinkValue(currentLink || '');
  };

  const saveEditLink = async id => {
    try {
      await updateDoc(doc(db, 'events', id), { formLink: editingLinkValue });
    } catch (err) {
      console.error('Update link failed:', err);
    } finally {
      setEditingLinkId(null);
      setEditingLinkValue('');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <main className="nxus-admin-shell">
      <style>{`
        .nxus-admin-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
        }

        .nxus-admin-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 30% 15%, rgba(232, 0, 28, 0.14), transparent 34vw),
            #0A0A0A;
        }

        /* ── NAV ── */
        .nxus-admin-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem clamp(1.2rem, 4vw, 3rem);
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(232, 0, 28, 0.18);
        }

        .nxus-admin-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nxus-admin-nav-logo {
          width: 36px;
          height: auto;
        }

        .nxus-admin-nav-brand {
          font-family: var(--display-font);
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .nxus-admin-nav-badge {
          background: var(--nxus-red);
          color: #FFFFFF;
          font-family: var(--mono-font);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
        }

        .nxus-admin-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nxus-admin-nav-home {
          border: 1px solid rgba(240, 237, 232, 0.14);
          border-radius: 0;
          background: transparent;
          color: rgba(240, 237, 232, 0.72);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 160ms ease;
        }

        .nxus-admin-nav-home:hover {
          background: rgba(240, 237, 232, 0.04);
        }

        .nxus-admin-nav-signout {
          border: 1px solid rgba(232, 0, 28, 0.42);
          border-radius: 0;
          background: transparent;
          color: var(--nxus-red);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 160ms ease;
        }

        .nxus-admin-nav-signout:hover {
          background: rgba(232, 0, 28, 0.08);
        }

        /* ── LAYOUT ── */
        .nxus-admin-content {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          padding: clamp(1.4rem, 4vw, 3rem);
          display: grid;
          gap: 2.4rem;
        }

        .nxus-admin-header {
          display: grid;
          gap: 0.3rem;
        }

        .nxus-admin-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-admin-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(2.6rem, 7vw, 4rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        /* ── ADD FORM ── */
        .nxus-admin-add-section {
          border: 1px solid rgba(232, 0, 28, 0.28);
          background: var(--nxus-panel);
          padding: clamp(1.2rem, 3vw, 2rem);
          display: grid;
          gap: 1rem;
        }

        .nxus-admin-section-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nxus-admin-form {
          display: grid;
          gap: 0.9rem;
        }

        .nxus-admin-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }

        @media (max-width: 640px) {
          .nxus-admin-form-row {
            grid-template-columns: 1fr;
          }
        }

        .nxus-admin-field {
          display: grid;
          gap: 0.38rem;
        }

        .nxus-admin-label {
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .nxus-admin-input,
        .nxus-admin-textarea {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          font: 500 0.92rem/1.3 var(--body-font);
          outline: none;
          padding: 0.85rem 0.9rem;
          transition: border-color 180ms ease;
        }

        .nxus-admin-input:focus,
        .nxus-admin-textarea:focus {
          border-color: rgba(232, 0, 28, 0.42);
        }

        .nxus-admin-textarea {
          min-height: 80px;
          resize: vertical;
        }

        .nxus-admin-submit {
          justify-self: start;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          padding: 0.85rem 2rem;
          font-family: var(--mono-font);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
        }

        .nxus-admin-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 26px rgba(232, 0, 28, 0.36);
        }

        .nxus-admin-submit:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        /* ── EVENT LIST ── */
        .nxus-admin-list-section {
          display: grid;
          gap: 1rem;
        }

        .nxus-admin-event-row {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: var(--nxus-panel);
          padding: 1rem 1.2rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: start;
          gap: 1rem;
          transition: background 160ms ease;
        }

        .nxus-admin-event-row:hover {
          background: #161212;
        }

        .nxus-admin-event-info h3 {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.4rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
        }

        .nxus-admin-event-info p {
          margin: 0.3rem 0 0;
          color: rgba(240, 237, 232, 0.48);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .nxus-admin-event-link-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .nxus-admin-event-link-label {
          color: rgba(240, 237, 232, 0.36);
          font-family: var(--mono-font);
          font-size: 0.64rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .nxus-admin-event-link-value {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          word-break: break-all;
          cursor: pointer;
          border-bottom: 1px dashed rgba(232, 0, 28, 0.38);
          transition: opacity 160ms ease;
        }

        .nxus-admin-event-link-value:hover {
          opacity: 0.7;
        }

        .nxus-admin-link-edit-input {
          flex: 1;
          min-width: 120px;
          border: 1px solid rgba(232, 0, 28, 0.38);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          font: 500 0.78rem/1.2 var(--mono-font);
          outline: none;
          padding: 0.4rem 0.6rem;
        }

        .nxus-admin-link-edit-input:focus {
          border-color: var(--nxus-red);
        }

        .nxus-admin-link-save {
          border: 1px solid rgba(52, 168, 83, 0.48);
          border-radius: 0;
          background: rgba(52, 168, 83, 0.08);
          color: #34A853;
          padding: 0.35rem 0.65rem;
          font-family: var(--mono-font);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease;
        }

        .nxus-admin-link-save:hover {
          background: rgba(52, 168, 83, 0.16);
        }

        .nxus-admin-link-cancel {
          border: 1px solid rgba(240, 237, 232, 0.12);
          border-radius: 0;
          background: transparent;
          color: rgba(240, 237, 232, 0.52);
          padding: 0.35rem 0.65rem;
          font-family: var(--mono-font);
          font-size: 0.64rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease;
        }

        .nxus-admin-link-cancel:hover {
          background: rgba(240, 237, 232, 0.04);
        }

        .nxus-admin-event-actions {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: flex-end;
        }

        .nxus-admin-delete {
          border: 1px solid rgba(255, 80, 80, 0.32);
          border-radius: 0;
          background: rgba(255, 80, 80, 0.06);
          color: #ff6b6b;
          padding: 0.42rem 0.8rem;
          font-family: var(--mono-font);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease, box-shadow 140ms ease;
        }

        .nxus-admin-delete:hover {
          background: rgba(255, 80, 80, 0.14);
          box-shadow: 0 0 18px rgba(255, 80, 80, 0.2);
        }

        .nxus-admin-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: rgba(240, 237, 232, 0.34);
          font-family: var(--mono-font);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .nxus-admin-event-row {
            grid-template-columns: 1fr;
          }

          .nxus-admin-event-actions {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>

      <nav className="nxus-admin-nav">
        <div className="nxus-admin-nav-left">
          <img className="nxus-admin-nav-logo" src="/assets/nxus_logo_icon.svg" alt="NXUS" />
          <span className="nxus-admin-nav-brand">NXUS</span>
          <span className="nxus-admin-nav-badge">Admin</span>
        </div>
        <div className="nxus-admin-nav-right">
          <button className="nxus-admin-nav-home" onClick={() => navigate('/home')}>
            Home
          </button>
          <button className="nxus-admin-nav-signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>

      <div className="nxus-admin-content">
        <header className="nxus-admin-header">
          <div className="nxus-admin-eyebrow">Control Panel</div>
          <h1 className="nxus-admin-title">Manage Events</h1>
        </header>

        {/* ── ADD EVENT ── */}
        <section className="nxus-admin-add-section">
          <h2 className="nxus-admin-section-title">Add New Event</h2>
          <form className="nxus-admin-form" onSubmit={handleAdd}>
            <label className="nxus-admin-field">
              <span className="nxus-admin-label">Title</span>
              <input
                className="nxus-admin-input"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Event title"
                required
              />
            </label>

            <div className="nxus-admin-form-row">
              <label className="nxus-admin-field">
                <span className="nxus-admin-label">Date</span>
                <input
                  className="nxus-admin-input"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  placeholder="e.g. May 10, 2025"
                  required
                />
              </label>
              <label className="nxus-admin-field">
                <span className="nxus-admin-label">Location</span>
                <input
                  className="nxus-admin-input"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. JBR Beach, Dubai"
                  required
                />
              </label>
            </div>

            <label className="nxus-admin-field">
              <span className="nxus-admin-label">Short Description</span>
              <input
                className="nxus-admin-input"
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                placeholder="One-liner for the card"
                required
              />
            </label>

            <label className="nxus-admin-field">
              <span className="nxus-admin-label">Full Description</span>
              <textarea
                className="nxus-admin-textarea"
                name="fullDescription"
                value={form.fullDescription}
                onChange={handleChange}
                placeholder="Expanded details shown when card is clicked"
                required
              />
            </label>

            <label className="nxus-admin-field">
              <span className="nxus-admin-label">Form Link</span>
              <input
                className="nxus-admin-input"
                name="formLink"
                value={form.formLink}
                onChange={handleChange}
                placeholder="https://forms.google.com/..."
                required
              />
            </label>

            <button className="nxus-admin-submit" type="submit" disabled={saving}>
              {saving ? 'Adding...' : 'Add Event \u2192'}
            </button>
          </form>
        </section>

        {/* ── EXISTING EVENTS ── */}
        <section className="nxus-admin-list-section">
          <h2 className="nxus-admin-section-title" style={{
            color: '#FFFFFF',
            fontFamily: 'var(--display-font)',
            fontSize: '1.8rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Existing Events ({events.length})
          </h2>

          {events.length === 0 ? (
            <div className="nxus-admin-empty">No events yet</div>
          ) : (
            events.map(event => (
              <div className="nxus-admin-event-row" key={event.id}>
                <div className="nxus-admin-event-info">
                  <h3>{event.title}</h3>
                  <p>{event.shortDescription}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginTop: '0.35rem',
                    color: 'rgba(240, 237, 232, 0.38)',
                    fontFamily: 'var(--mono-font)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    <span>{event.date}</span>
                    <span>\u00b7</span>
                    <span>{event.location}</span>
                  </div>

                  <div className="nxus-admin-event-link-row">
                    <span className="nxus-admin-event-link-label">Form Link:</span>
                    {editingLinkId === event.id ? (
                      <>
                        <input
                          className="nxus-admin-link-edit-input"
                          value={editingLinkValue}
                          onChange={e => setEditingLinkValue(e.target.value)}
                          autoFocus
                          onKeyDown={e => {
                            if (e.key === 'Enter') saveEditLink(event.id);
                            if (e.key === 'Escape') setEditingLinkId(null);
                          }}
                        />
                        <button
                          className="nxus-admin-link-save"
                          onClick={() => saveEditLink(event.id)}
                        >
                          Save
                        </button>
                        <button
                          className="nxus-admin-link-cancel"
                          onClick={() => setEditingLinkId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <span
                        className="nxus-admin-event-link-value"
                        title="Click to edit"
                        onClick={() => startEditLink(event.id, event.formLink)}
                      >
                        {event.formLink || 'No link set'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="nxus-admin-event-actions">
                  <button
                    className="nxus-admin-delete"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
