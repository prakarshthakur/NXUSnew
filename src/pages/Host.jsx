import React, { useState, useRef, useCallback } from 'react';
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MapPicker from '../components/MapPicker';

const inputStyle = {
  background: '#0d0d0d',
  border: '1px solid #1a1a1a',
  color: '#ffffff',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.88rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.72rem',
  color: '#555',
  textTransform: 'lowercase',
  marginBottom: '0.35rem',
  display: 'block',
};

function StepIndicator({ step }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '2rem' }}>
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: i <= step ? '#FF2D2D' : '#1a1a1a',
            border: '1px solid',
            borderColor: i <= step ? '#FF2D2D' : '#333',
            transition: 'background 0.3s, border-color 0.3s',
          }} />
          {i < 2 && (
            <div style={{
              width: '40px',
              height: '1px',
              background: i < step ? '#FF2D2D' : '#1a1a1a',
              transition: 'background 0.3s',
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function PreviewCard({ form }) {
  const formatDate = () => {
    if (!form.date || !form.time) return 'date tbd';
    try {
      const d = new Date(`${form.date}T${form.time}`);
      return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
        ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } catch { return 'date tbd'; }
  };

  return (
    <div className="host-preview-card" style={{
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      border: '1px solid rgba(255,45,45,0.2)',
      borderRadius: '20px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    }}>
      <h2 className="host-preview-title" style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '2rem',
        fontWeight: 800,
        color: '#FF2D2D',
        textTransform: 'lowercase',
        lineHeight: 1.1,
      }}>
        {form.title || 'your event'}
      </h2>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem', color: '#666', textTransform: 'lowercase' }}>
        {formatDate()}
      </div>
      {form.eventType === 'offline' && form.locationName && (
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#666', textTransform: 'lowercase' }}>
          📍 {form.locationName}
        </div>
      )}
      {form.eventType === 'online' && (
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#666', textTransform: 'lowercase' }}>
          🔗 online event
        </div>
      )}
      {form.description && (
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.9rem',
          color: '#aaa',
          lineHeight: 1.6,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textTransform: 'lowercase',
        }}>
          {form.description}
        </div>
      )}
      {form.hostCircle && (
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: '#444', textTransform: 'lowercase' }}>
          by {form.hostCircle}
        </div>
      )}
    </div>
  );
}

export default function Host() {
  const user = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [slideDir, setSlideDir] = useState('next');
  const [animating, setAnimating] = useState(false);
  const locationInputRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    hostCircle: '',
    eventType: 'offline',
    locationName: '',
    lat: null,
    lng: null,
    eventLink: '',
    maxAttendees: '',
  });

  const setField = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const goNext = () => {
    setSlideDir('next');
    setAnimating(true);
    setTimeout(() => {
      setStep(s => s + 1);
      setAnimating(false);
    }, 180);
  };

  const goBack = () => {
    setSlideDir('back');
    setAnimating(true);
    setTimeout(() => {
      setStep(s => s - 1);
      setAnimating(false);
    }, 180);
  };

  const handleLocationSelect = useCallback((lat, lng, locName) => {
    setField('lat', lat);
    setField('lng', lng);
    if (locName) setField('locationName', locName);
  }, []);

  const handleSubmit = async () => {
    if (!form.title.trim()) { setError('event name is required'); return; }
    if (!form.date || !form.time) { setError('date and time are required'); return; }
    setError('');
    setSubmitting(true);
    try {
      const datetimeObj = new Date(`${form.date}T${form.time}`);
      await addDoc(collection(db, 'events'), {
        title: form.title.trim(),
        description: form.description.trim(),
        datetime: Timestamp.fromDate(datetimeObj),
        eventType: form.eventType,
        locationName: form.eventType === 'offline' ? form.locationName.trim() : '',
        lat: form.eventType === 'offline' ? (form.lat || null) : null,
        lng: form.eventType === 'offline' ? (form.lng || null) : null,
        eventLink: form.eventType === 'online' ? form.eventLink.trim() : '',
        hostUid: user.uid,
        hostCircle: form.hostCircle.trim(),
        maxAttendees: form.maxAttendees ? parseInt(form.maxAttendees) : null,
        attendeeCount: 0,
        createdAt: serverTimestamp(),
      });
      navigate('/my-events');
    } catch (err) {
      setError((err.message || 'failed to create event').toLowerCase());
      setSubmitting(false);
    }
  };

  const slideStyle = {
    animation: animating
      ? (slideDir === 'next'
        ? 'slideOutLeft 0.18s ease forwards'
        : 'slideOutRight 0.18s ease forwards')
      : (slideDir === 'next'
        ? 'slideInRight 0.18s ease'
        : 'slideInLeft 0.18s ease'),
  };

  const navBtnStyle = (ghost) => ({
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.85rem',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    border: ghost ? '1px solid #333' : 'none',
    background: ghost ? 'transparent' : '#FF2D2D',
    color: ghost ? '#666' : '#000',
    cursor: 'pointer',
    textTransform: 'lowercase',
    fontWeight: ghost ? 400 : 700,
  });

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideOutLeft { to { opacity: 0; transform: translateX(-40px); } }
        @keyframes slideOutRight { to { opacity: 0; transform: translateX(40px); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        .host-input:focus { border-color: #FF2D2D !important; }
        .host-textarea:focus { border-color: #FF2D2D !important; }
      `}</style>
      <NavBar />
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="page-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          marginBottom: '0.5rem',
        }}>
          host an event
        </h1>
        <p style={{ color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', marginBottom: '2rem' }}>
          drop something fun for your crew
        </p>

        <StepIndicator step={step} />

        <div style={slideStyle}>
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.1rem',
                color: '#ffffff',
                fontWeight: 700,
                textTransform: 'lowercase',
                marginBottom: '0.5rem',
              }}>
                the basics
              </div>

              <div>
                <label style={labelStyle}>event name</label>
                <input
                  className="host-input"
                  style={inputStyle}
                  type="text"
                  placeholder="what's the vibe called?"
                  value={form.title}
                  onChange={e => setField('title', e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>vibe description <span style={{ color: '#444' }}>{form.description.length} / 280</span></label>
                <textarea
                  className="host-textarea"
                  style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                  placeholder="describe the energy, what to expect..."
                  maxLength={280}
                  value={form.description}
                  onChange={e => setField('description', e.target.value)}
                />
              </div>

              <div className="host-datetime-row" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>date</label>
                  <input
                    className="host-input"
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    type="date"
                    value={form.date}
                    onChange={e => setField('date', e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>time</label>
                  <input
                    className="host-input"
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    type="time"
                    value={form.time}
                    onChange={e => setField('time', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>circle / group name</label>
                <input
                  className="host-input"
                  style={inputStyle}
                  type="text"
                  placeholder="your crew's name"
                  value={form.hostCircle}
                  onChange={e => setField('hostCircle', e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>event type</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['offline', 'online'].map(type => (
                    <button
                      key={type}
                      onClick={() => setField('eventType', type)}
                      style={{
                        flex: 1,
                        padding: '0.65rem 1rem',
                        borderRadius: '8px',
                        border: form.eventType === type ? '1px solid #FF2D2D' : '1px solid #1a1a1a',
                        background: form.eventType === type ? 'rgba(255,45,45,0.1)' : '#0d0d0d',
                        color: form.eventType === type ? '#FF2D2D' : '#555',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.82rem',
                        textTransform: 'lowercase',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      {type === 'offline' ? '📍 offline' : '🔗 online'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.1rem',
                color: '#ffffff',
                fontWeight: 700,
                textTransform: 'lowercase',
                marginBottom: '0.5rem',
              }}>
                {form.eventType === 'online' ? 'the link' : 'the place'}
              </div>

              {form.eventType === 'offline' ? (
                <>
                  <div>
                    <label style={labelStyle}>location name</label>
                    <input
                      ref={locationInputRef}
                      className="host-input"
                      style={inputStyle}
                      type="text"
                      placeholder="e.g. rooftop, downtown dubai"
                      value={form.locationName}
                      onChange={e => setField('locationName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>drop a pin</label>
                    <MapPicker onLocationSelect={handleLocationSelect} inputRef={locationInputRef} />
                    {form.lat && form.lng && (
                      <div style={{ color: '#444', fontSize: '0.7rem', fontFamily: "'IBM Plex Mono', monospace", marginTop: '0.4rem' }}>
                        📍 {form.lat.toFixed(5)}, {form.lng.toFixed(5)}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div>
                  <label style={labelStyle}>meeting link</label>
                  <input
                    className="host-input"
                    style={inputStyle}
                    type="url"
                    placeholder="zoom, google meet, discord..."
                    value={form.eventLink}
                    onChange={e => setField('eventLink', e.target.value)}
                  />
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', color: '#333', marginTop: '0.4rem' }}>
                    link is only shared with accepted attendees
                  </div>
                </div>
              )}

              <div>
                <label style={labelStyle}>max attendees (optional)</label>
                <input
                  className="host-input"
                  style={inputStyle}
                  type="number"
                  placeholder="leave empty for unlimited"
                  min="1"
                  value={form.maxAttendees}
                  onChange={e => setField('maxAttendees', e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.1rem',
                color: '#ffffff',
                fontWeight: 700,
                textTransform: 'lowercase',
              }}>
                review & drop
              </div>
              <PreviewCard form={form} />
              {error && (
                <p style={{ color: '#FF2D2D', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', textTransform: 'lowercase' }}>
                  {error}
                </p>
              )}
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  background: '#FF2D2D',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '1rem',
                  color: '#000',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'lowercase',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.7 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                {submitting ? 'dropping...' : 'drop it 🔴'}
              </button>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <div>
            {step > 0 && (
              <button onClick={goBack} style={navBtnStyle(true)}>← back</button>
            )}
          </div>
          <div>
            {step < 2 && (
              <button onClick={goNext} style={navBtnStyle(false)}>next →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
