import { withAlpha } from '../theme';

export default function NoticeBar({ college }) {
  const items = college.noticeItems || [];
  if (!items.length) return null;

  // Duplicate items so the seamless loop works: [items][items]
  const twoPass = [0, 1];

  return (
    <div
      className="w-full overflow-hidden flex items-center"
      style={{
        height: '38px',
        backgroundColor: college.softAccent,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.15)}`,
      }}
    >
      {/* NOTICE label pill */}
      <div className="flex items-center h-full flex-shrink-0 px-3 sm:px-4">
        <svg
          className="w-3.5 h-3.5 flex-shrink-0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          style={{ fill: college.primaryColor }}
        >
          <path d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969l.504.031c.627 0 1.25-.048 1.867-.142l.759 1.518A3.375 3.375 0 0010.125 17.5h.375a3.375 3.375 0 003.375-3.375v-.628a19.289 19.289 0 013.04-2.07.75.75 0 00.085-1.297A18.995 18.995 0 0113.92 3.845z" />
        </svg>
      </div>

      {/* Scrolling ticker */}
      <div className="overflow-hidden flex-1 h-full flex items-center px-3">
        <div className="notice-ticker-track">
          {twoPass.map((copy) => (
            <span
              key={copy}
              className="flex items-center gap-6 pr-16 font-dm-sans font-medium text-[12px] whitespace-nowrap"
              style={{ color: college.primaryColor }}
            >
              {items.map((item, i) => (
                <span key={i} className="flex items-center gap-6">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="text-[10px]"
                      style={{ color: withAlpha(college.primaryColor, 0.35) }}
                    >
                      ◆
                    </span>
                  )}
                  <span>
                    {item.text}
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                        style={{ color: college.accentColor }}
                      >
                        {item.linkText}
                      </a>
                    )}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
