import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withAlpha } from '../theme';

function buildIndex(college) {
  const entries = [];

  const add = (label, href, category) => {
    if (label && href) entries.push({ label, href, category });
  };

  for (const link of college.navLinks || []) {
    add(link.name, link.href, 'Page');
    for (const item of link.dropdown || []) add(item.label, item.href, link.name);
  }
  for (const item of college.quickLinks || []) add(item.label, item.href, 'Quick Links');
  for (const item of college.resources || []) add(item.label, item.href, 'Resources');

  // Deduplicate by href
  const seen = new Set();
  return entries.filter(({ href }) => seen.has(href) ? false : seen.add(href));
}

export default function InfoBar({ college }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const index = buildIndex(college);

  const results = query.trim().length > 0
    ? index.filter(({ label, category }) =>
        `${label} ${category}`.toLowerCase().includes(query.trim().toLowerCase())
      ).slice(0, 7)
    : [];

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  function go(href) {
    setOpen(false);
    setQuery('');
    if (href.startsWith('http')) window.open(href, '_blank', 'noopener,noreferrer');
    else navigate(href);
  }

  function handleKeyDown(e) {
    if (!open || !results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (results[active]) go(results[active].href); }
    else if (e.key === 'Escape') setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (results.length) go(results[active]?.href || results[0].href);
  }

  return (
    <div
      className="w-full bg-white hidden md:block"
      style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}` }}
    >
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center h-[40px]">

        {/* Left — counselling code */}
        <div className="flex items-center gap-2.5">
          <span
            className="font-dm-sans font-medium text-[13px] leading-4"
            style={{ color: college.primaryColor }}
          >
            {college.counsellingExam} counselling code:
          </span>
          <span
            className="font-dm-sans font-bold text-[11px] tracking-wide text-white px-2 py-0.5 rounded"
            style={{ backgroundColor: college.accentColor }}
          >
            {college.counsellingCode}
          </span>
        </div>

        {/* Right — search */}
        <div ref={wrapRef} className="relative">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
              onFocus={(e) => { setOpen(true); e.currentTarget.style.borderColor = college.primaryColor; }}
              onBlur={(e) => (e.currentTarget.style.borderColor = '')}
              onKeyDown={handleKeyDown}
              placeholder="Search pages…"
              autoComplete="off"
              className="font-dm-sans text-[13px] text-gray-700 placeholder-gray-400 border border-gray-300 rounded-l px-3 h-[30px] w-[200px] focus:outline-none transition-colors bg-white"
            />
            <button
              type="submit"
              className="h-[30px] w-[34px] flex items-center justify-center text-white rounded-r flex-shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: college.primaryColor }}
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeLinecap="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </form>

          {/* Dropdown */}
          {open && results.length > 0 && (
            <div
              className="absolute right-0 top-[30px] w-[300px] bg-white rounded-md shadow-lg border overflow-hidden z-[200]"
              style={{ borderColor: withAlpha(college.primaryColor, 0.15) }}
            >
              {results.map((item, i) => (
                <button
                  key={item.href}
                  onMouseDown={() => go(item.href)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full text-left px-3 py-2 flex items-center justify-between gap-3 transition-colors"
                  style={{
                    backgroundColor: i === active ? withAlpha(college.primaryColor, 0.06) : 'white',
                  }}
                >
                  <span className="font-dm-sans text-[13px] text-gray-800 truncate">{item.label}</span>
                  <span
                    className="font-dm-sans text-[10px] font-semibold uppercase tracking-wide flex-shrink-0 px-1.5 py-0.5 rounded"
                    style={{
                      color: college.primaryColor,
                      backgroundColor: withAlpha(college.primaryColor, 0.08),
                    }}
                  >
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {open && query.trim().length > 0 && results.length === 0 && (
            <div
              className="absolute right-0 top-[34px] w-[300px] bg-white rounded-md shadow-lg border px-3 py-2.5 z-50"
              style={{ borderColor: withAlpha(college.primaryColor, 0.15) }}
            >
              <span className="font-dm-sans text-[13px] text-gray-400">No pages found for "{query}"</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
