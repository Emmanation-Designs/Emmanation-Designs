const credibilityItems = [
  {
    metric: '120+',
    label: 'Projects Delivered',
    detail: 'Websites, platforms & digital products shipped globally',
  },
  {
    metric: '15+',
    label: 'Expert Team',
    detail: 'Multidisciplinary engineers, UI/UX & visual specialists',
  },
  {
    metric: '5 Pillars',
    label: 'Integrated Capabilities',
    detail: 'Web, custom software, AI, platforms & product design',
  },
  {
    metric: '10:00–18:00',
    label: 'Core Hours · WAT (UTC+1)',
    detail: 'Structured communication & milestone delivery',
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Agency credentials"
      className="border-y border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B1221] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
          {credibilityItems.map((item, idx) => (
            <div
              key={item.label}
              className={idx === 0 ? 'lg:pr-8' : idx === credibilityItems.length - 1 ? 'lg:pl-8' : 'lg:px-8'}
            >
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#1E3A8A] dark:text-blue-400 tabular-nums">
                {item.metric}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {item.label}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
