import { useState, useEffect, useRef, useCallback } from 'react';
import { withAlpha } from '../theme';

function LOIModal({ college, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    function handleKeyDown(e) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus(); }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="loi-modal-title"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-xl shadow-2xl max-w-[620px] w-[90%] p-10" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl font-light transition-colors"
          style={{ color: college.primaryColor }}
          aria-label="Close dialog"
        >
          ×
        </button>
        <div className="flex items-center gap-2 mb-6">
          <img src={college.smallLogo} alt={college.shortName} className="h-10 w-10 object-contain" />
          <span className="text-white font-dm-sans font-bold text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: college.accentColor }}>
            NEW
          </span>
        </div>
        <p id="loi-modal-title" className="font-dm-sans text-[15px] leading-[26px] text-[#1a1a1a] mb-5">
          We are pleased to inform you that the{' '}
          <strong style={{ color: college.primaryColor }}>Ministry of Education</strong>, upon the recommendation of the University Grants Commission (UGC), has issued a{' '}
          <strong style={{ color: college.primaryColor }}>Letter of Intent (LoI)</strong> to{' '}
          <strong style={{ color: college.primaryColor }}>{college.shortName}</strong>.
        </p>
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#1a1a1a]">
          This signifies that {college.shortName} has been invited to fulfil the necessary requirements toward being granted{' '}
          <strong style={{ color: college.primaryColor }}>Deemed-to-be University</strong> status.
        </p>
        <div className="mt-8">
          <button
            onClick={onClose}
            className="text-white font-dm-sans font-semibold text-[13px] px-6 py-2.5 rounded transition-colors"
            style={{ backgroundColor: college.primaryColor }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function TickerContent({ announcements, college, onLOIClick }) {
  return (
    <div className="flex items-center gap-8 text-[13px] font-dm-sans font-medium shrink-0">
      {announcements.map((ann, idx) => (
        <span key={idx} className="flex items-center gap-8">
          {idx > 0 && (
            <span className="select-none" style={{ color: withAlpha(college.primaryColor, 0.25) }}>|</span>
          )}
          {ann.isLOI ? (
            <button
              onClick={onLOIClick}
              className="flex items-center gap-2 group"
              style={{ color: college.accentColor }}
            >
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span className="font-bold text-[10px] px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: '#F59E0B' }}>
                  {ann.badge}
                </span>
              )}
            </button>
          ) : (
            <a
              href={ann.href || '#'}
              target={ann.href && ann.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
              style={{ color: college.accentColor }}
            >
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span className="font-bold text-[10px] px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: '#F59E0B' }}>
                  {ann.badge}
                </span>
              )}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar({ college }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-white" style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}` }}>
        <div className="max-w-[1320px] mx-auto px-4 md:px-10 lg:px-[60px] flex items-center gap-2 md:gap-4 h-[44px]">

          {/* ANNOUNCEMENTS pill */}
          <div
            className="flex items-center gap-1.5 rounded px-2 md:px-3 py-1 md:py-1.5 shrink-0"
            style={{ backgroundColor: college.primaryColor }}
          >
            <svg className="w-3.5 h-3.5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969l.504.031c.627 0 1.25-.048 1.867-.142l.759 1.518A3.375 3.375 0 0010.125 17.5h.375a3.375 3.375 0 003.375-3.375v-.628a19.289 19.289 0 013.04-2.07.75.75 0 00.085-1.297A18.995 18.995 0 0113.92 3.845z" />
            </svg>
            <span className="hidden sm:inline font-dm-sans font-bold text-[11px] uppercase tracking-wider text-white">
              Announcements
            </span>
          </div>

          <span className="hidden sm:inline select-none shrink-0" style={{ color: withAlpha(college.primaryColor, 0.25) }}>|</span>

          <div className="overflow-hidden flex-1">
            <div className="ticker-track">
              <TickerContent announcements={college.announcements} college={college} onLOIClick={() => setModalOpen(true)} />
              <div style={{ width: '50vw' }} className="shrink-0" />
              <TickerContent announcements={college.announcements} college={college} onLOIClick={() => setModalOpen(true)} />
              <div style={{ width: '50vw' }} className="shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <LOIModal college={college} onClose={handleModalClose} />}
    </>
  );
}
