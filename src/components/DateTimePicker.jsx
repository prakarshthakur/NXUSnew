import React, { useState, useMemo, useEffect, useRef } from 'react';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const DAYS_OF_WEEK = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function formatTime12(h, m) {
  const ampm = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

export default function DateTimePicker({ date, time, onDateChange, onTimeChange }) {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(() => {
    if (date) return parseInt(date.split('-')[0]);
    return today.getFullYear();
  });
  const [viewMonth, setViewMonth] = useState(() => {
    if (date) return parseInt(date.split('-')[1]) - 1;
    return today.getMonth();
  });
  const [activePanel, setActivePanel] = useState('date');
  const [selectedHour, setSelectedHour] = useState(() => {
    if (time) return parseInt(time.split(':')[0]);
    return 19; // default 7pm
  });
  const [selectedMinute, setSelectedMinute] = useState(() => {
    if (time) return parseInt(time.split(':')[1]);
    return 0;
  });

  // Parse selected date
  const selectedDay = date ? parseInt(date.split('-')[2]) : null;
  const selectedMonth = date ? parseInt(date.split('-')[1]) - 1 : null;
  const selectedYear = date ? parseInt(date.split('-')[0]) : null;

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const calendarDays = useMemo(() => {
    const days = [];
    // Blanks before first day
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [firstDay, daysInMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  const selectDay = (day) => {
    const dateStr = `${viewYear}-${pad(viewMonth + 1)}-${pad(day)}`;
    onDateChange(dateStr);
  };

  const isToday = (day) => {
    return day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  };

  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };

  const isSelected = (day) => {
    return day === selectedDay && viewMonth === selectedMonth && viewYear === selectedYear;
  };

  const confirmTime = (h, m) => {
    setSelectedHour(h);
    setSelectedMinute(m);
    onTimeChange(`${pad(h)}:${pad(m)}`);
    setActivePanel('date');
  };

  // Format display strings
  const dateDisplay = date
    ? (() => {
        const d = new Date(date + 'T00:00:00');
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      })()
    : null;

  const timeDisplay = time ? formatTime12(parseInt(time.split(':')[0]), parseInt(time.split(':')[1])) : null;

  // Quick time presets
  const timePresets = [
    { label: '12 pm', h: 12, m: 0 },
    { label: '2 pm', h: 14, m: 0 },
    { label: '4 pm', h: 16, m: 0 },
    { label: '6 pm', h: 18, m: 0 },
    { label: '7 pm', h: 19, m: 0 },
    { label: '8 pm', h: 20, m: 0 },
    { label: '9 pm', h: 21, m: 0 },
    { label: '10 pm', h: 22, m: 0 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <style>{`
        @keyframes dtPickerFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dtp-day-btn:active {
          transform: scale(0.92);
        }
        .dtp-preset-btn:active {
          transform: scale(0.95);
        }
      `}</style>

      {/* ── Selected summary chips ── */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <div
          onClick={() => setActivePanel('date')}
          style={{
            flex: 1,
            minWidth: '120px',
            background: activePanel === 'date'
              ? (date ? 'rgba(255,45,45,0.12)' : 'rgba(255,45,45,0.05)')
              : (date ? 'rgba(255,45,45,0.08)' : '#0d0d0d'),
            border: activePanel === 'date'
              ? '1px solid rgba(255,45,45,0.5)'
              : (date ? '1px solid rgba(255,45,45,0.3)' : '1px solid #1a1a1a'),
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
        >
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.62rem',
            color: activePanel === 'date' ? '#FF2D2D' : '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            transition: 'color 0.2s',
          }}>
            📅 date
          </span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            color: date ? '#FF2D2D' : '#333',
            textTransform: 'lowercase',
            fontWeight: date ? 600 : 400,
          }}>
            {dateDisplay || 'pick a date below'}
          </span>
        </div>

        <div
          onClick={() => setActivePanel('time')}
          style={{
            flex: 1,
            minWidth: '120px',
            background: activePanel === 'time'
              ? (time ? 'rgba(255,45,45,0.12)' : 'rgba(255,45,45,0.05)')
              : (time ? 'rgba(255,45,45,0.08)' : '#0d0d0d'),
            border: activePanel === 'time'
              ? '1px solid rgba(255,45,45,0.5)'
              : (time ? '1px solid rgba(255,45,45,0.3)' : '1px solid #1a1a1a'),
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
        >
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.62rem',
            color: activePanel === 'time' ? '#FF2D2D' : '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            transition: 'color 0.2s',
          }}>
            🕐 time
          </span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            color: time ? '#FF2D2D' : '#333',
            textTransform: 'lowercase',
            fontWeight: time ? 600 : 400,
          }}>
            {timeDisplay || 'tap to set'}
          </span>
        </div>
      </div>

      {/* ── Calendar grid ── */}
      {activePanel === 'date' && (
      <div style={{
        background: '#0a0a0a',
        border: '1px solid #1a1a1a',
        borderRadius: '12px',
        padding: '1rem',
        animation: 'dtPickerFadeIn 0.2s ease',
      }}>
        {/* Month/Year nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem',
        }}>
          <button
            onClick={prevMonth}
            style={{
              background: 'none',
              border: '1px solid #222',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              color: '#666',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >
            ‹
          </button>
          <span style={{
            fontFamily: "grovant, sans-serif",
            fontSize: '0.95rem',
            fontWeight: 700,
            color: '#fff',
            textTransform: 'lowercase',
          }}>
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button
            onClick={nextMonth}
            style={{
              background: 'none',
              border: '1px solid #222',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              color: '#666',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >
            ›
          </button>
        </div>

        {/* Day-of-week header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px',
          marginBottom: '0.4rem',
        }}>
          {DAYS_OF_WEEK.map(d => (
            <div key={d} style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.6rem',
              color: '#444',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.25rem 0',
            }}>
              {d}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '3px',
        }}>
          {calendarDays.map((day, i) => {
            if (day === null) {
              return <div key={`blank-${i}`} />;
            }
            const past = isPast(day);
            const sel = isSelected(day);
            const tod = isToday(day);

            return (
              <button
                key={day}
                className="dtp-day-btn"
                disabled={past}
                onClick={() => selectDay(day)}
                style={{
                  background: sel
                    ? '#FF2D2D'
                    : tod
                    ? 'rgba(255,45,45,0.12)'
                    : 'transparent',
                  border: tod && !sel ? '1px solid rgba(255,45,45,0.3)' : '1px solid transparent',
                  borderRadius: '8px',
                  width: '100%',
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: sel ? 700 : 500,
                  color: sel
                    ? '#000'
                    : past
                    ? '#222'
                    : tod
                    ? '#FF2D2D'
                    : '#aaa',
                  cursor: past ? 'default' : 'pointer',
                  transition: 'background 0.15s, transform 0.1s, color 0.15s',
                  padding: 0,
                }}
                onMouseEnter={e => {
                  if (!past && !sel) {
                    e.currentTarget.style.background = 'rgba(255,45,45,0.15)';
                    e.currentTarget.style.color = '#FF2D2D';
                  }
                }}
                onMouseLeave={e => {
                  if (!past && !sel) {
                    e.currentTarget.style.background = tod ? 'rgba(255,45,45,0.12)' : 'transparent';
                    e.currentTarget.style.color = tod ? '#FF2D2D' : '#aaa';
                  }
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
      )}

      {/* ── Time picker ── */}
      {activePanel === 'time' && (
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '12px',
          padding: '1rem',
          animation: 'dtPickerFadeIn 0.2s ease',
        }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.65rem',
            color: '#444',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem',
          }}>
            quick pick
          </div>

          {/* Preset buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1rem',
          }}>
            {timePresets.map(p => {
              const active = selectedHour === p.h && selectedMinute === p.m && time;
              return (
                <button
                  key={p.label}
                  className="dtp-preset-btn"
                  onClick={() => confirmTime(p.h, p.m)}
                  style={{
                    background: active ? '#FF2D2D' : '#111',
                    border: active ? '1px solid #FF2D2D' : '1px solid #222',
                    borderRadius: '50px',
                    padding: '0.4rem 0.85rem',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: active ? 700 : 400,
                    color: active ? '#000' : '#888',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    textTransform: 'lowercase',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.borderColor = '#555';
                      e.currentTarget.style.color = '#ccc';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.borderColor = '#222';
                      e.currentTarget.style.color = '#888';
                    }
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* Custom time row */}
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.65rem',
            color: '#444',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            or set exact time
          </div>
          <CustomTimePicker
            hour={selectedHour}
            minute={selectedMinute}
            onConfirm={confirmTime}
          />
        </div>
      )}
    </div>
  );
}

function CustomTimePicker({ hour, minute, onConfirm }) {
  const [h, setH] = useState(hour);
  const [m, setM] = useState(minute);
  const [ampm, setAmpm] = useState(hour >= 12 ? 'pm' : 'am');

  const displayH = () => {
    let dh = ampm === 'pm' ? (h >= 12 ? h : h + 12) : (h === 12 ? 0 : h);
    return dh % 12 || 12;
  };

  // Compute 24h value from current state
  const get24h = (hVal, ampmVal) => {
    let hh = hVal % 12;
    if (ampmVal === 'pm') hh += 12;
    return hh;
  };

  const h12 = h % 12 || 12;

  const incH = () => {
    let newH12 = (h12 % 12) + 1;
    let newAmpm = ampm;
    // If going from 11 to 12, flip AM/PM
    if (h12 === 11) newAmpm = ampm === 'am' ? 'pm' : 'am';
    let h24 = newH12 % 12;
    if (newAmpm === 'pm') h24 += 12;
    setH(h24);
    setAmpm(newAmpm);
  };

  const decH = () => {
    let newH12 = h12 - 1;
    let newAmpm = ampm;
    if (newH12 < 1) {
      newH12 = 12;
      newAmpm = ampm === 'am' ? 'pm' : 'am';
    }
    let h24 = newH12 % 12;
    if (newAmpm === 'pm') h24 += 12;
    setH(h24);
    setAmpm(newAmpm);
  };

  const incM = () => setM(prev => (prev + 15) % 60);
  const decM = () => setM(prev => (prev - 15 + 60) % 60);

  const toggleAmpm = () => {
    const newAmpm = ampm === 'am' ? 'pm' : 'am';
    setAmpm(newAmpm);
    const h24 = get24h(h % 12 || 12, newAmpm);
    setH(h24);
  };

  const arrowBtnStyle = {
    background: 'none',
    border: '1px solid #222',
    borderRadius: '6px',
    width: '32px',
    height: '28px',
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    transition: 'border-color 0.15s, color 0.15s',
    padding: 0,
  };

  const numStyle = {
    fontFamily: "grovant, sans-serif",
    fontSize: '1.8rem',
    fontWeight: 800,
    color: '#fff',
    width: '52px',
    textAlign: 'center',
    lineHeight: 1,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}>
        {/* Hour */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
          <button onClick={incH} style={arrowBtnStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >▲</button>
          <div style={numStyle}>{h12}</div>
          <button onClick={decH} style={arrowBtnStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >▼</button>
        </div>

        {/* Colon */}
        <div style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '1.8rem',
          fontWeight: 800,
          color: '#FF2D2D',
          lineHeight: 1,
          marginTop: '0',
        }}>:</div>

        {/* Minute */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
          <button onClick={incM} style={arrowBtnStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >▲</button>
          <div style={numStyle}>{pad(m)}</div>
          <button onClick={decM} style={arrowBtnStyle}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#666'; }}
          >▼</button>
        </div>

        {/* AM/PM toggle */}
        <button
          onClick={toggleAmpm}
          style={{
            background: ampm === 'pm' ? 'rgba(255,45,45,0.15)' : 'rgba(255,255,255,0.05)',
            border: '1px solid',
            borderColor: ampm === 'pm' ? 'rgba(255,45,45,0.4)' : '#222',
            borderRadius: '8px',
            padding: '0.55rem 0.65rem',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            fontWeight: 700,
            color: ampm === 'pm' ? '#FF2D2D' : '#888',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'all 0.15s',
            letterSpacing: '0.04em',
            marginLeft: '0.25rem',
          }}
        >
          {ampm}
        </button>
      </div>

      {/* Confirm button */}
      <button
        onClick={() => onConfirm(h, m)}
        style={{
          background: '#FF2D2D',
          border: 'none',
          borderRadius: '50px',
          padding: '0.55rem 1.5rem',
          color: '#000',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'lowercase',
          cursor: 'pointer',
          alignSelf: 'center',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        set {formatTime12(h, m)}
      </button>
    </div>
  );
}
