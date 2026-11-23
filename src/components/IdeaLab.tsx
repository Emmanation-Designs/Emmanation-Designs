import { useEffect, useRef, useState } from 'react';

interface IdeaLabProps {
  onSendToTeam: (payload: { message: string; service: string }) => void;
}

const MATCHERS: [RegExp, string][] = [
  [/shop|store|sell|product|cart/i, 'E-commerce'],
  [/course|learn|school|student|class|teach/i, 'Education platforms'],
  [/\bai\b|chatbot|automat|assistant/i, 'AI integration'],
  [/app|software|dashboard|tool|system|portal/i, 'Custom software'],
  [/design|ui|ux|brand|prototype/i, 'UI/UX design'],
];

export default function IdeaLab({ onSendToTeam }: IdeaLabProps) {
  const [idea, setIdea] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const [activeCount, setActiveCount] = useState(0);
  const [detectedService, setDetectedService] = useState('Website development');
  const [submittedIdea, setSubmittedIdea] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);

  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleShapeIdea = () => {
    clearTimers();
    const v = idea.trim();
    setShowSendButton(false);

    if (v.length < 10) {
      setLines([
        'Add a little more detail (at least 10 characters) so we can shape it.',
      ]);
      setActiveCount(1);
      return;
    }

    let sv = 'Website development';
    for (const [pattern, serviceName] of MATCHERS) {
      if (pattern.test(v)) {
        sv = serviceName;
        break;
      }
    }

    const q = v.length > 80 ? `${v.slice(0, 80)}…` : v;
    const outputLines = [
      `Discover: we’d start by learning who “${q}” is for and what success looks like.`,
      'Plan & Design: map the key journeys and design the experience before any code.',
      'Build & Refine: build in stages you can test, then refine with your feedback.',
      'Launch & Support: release carefully and stay on hand afterwards.',
      `Suggested starting point: ${sv}.`,
    ];

    setDetectedService(sv);
    setSubmittedIdea(v);
    setLines(outputLines);

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) {
      setActiveCount(outputLines.length);
      setShowSendButton(true);
      return;
    }

    setActiveCount(0);
    outputLines.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setActiveCount(i + 1);
      }, i * 600);
      timersRef.current.push(t);
    });

    const endTimer = window.setTimeout(() => {
      setShowSendButton(true);
    }, outputLines.length * 600);
    timersRef.current.push(endTimer);
  };

  const handleSend = () => {
    onSendToTeam({
      message: `My idea: ${submittedIdea}\n\n(Shaped in the Idea lab)`,
      service: detectedService,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const y = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="lab">
      <div className="w lb">
        <div className="rv">
          <p className="lbl">Idea lab</p>
          <h2>Describe it. Watch it take shape.</h2>
          <p className="lead" style={{ marginTop: '20px' }}>
            Type your idea and see how a project like it would move through our
            four stages. Then send it to us in one click.
          </p>
        </div>

        <div className="tm rv">
          <label htmlFor="idea">
            Your idea
            <textarea
              id="idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. An online store for handmade fabrics with a custom order tool"
            />
          </label>

          <button
            className="ed-btn p"
            id="go"
            type="button"
            onClick={handleShapeIdea}
          >
            Shape my idea
          </button>

          <ol id="out" aria-live="polite">
            {lines.map((line, i) => (
              <li key={`${i}-${line}`} className={i < activeCount ? 'on' : undefined}>
                {line}
              </li>
            ))}
          </ol>

          <button
            className="ed-btn o"
            id="snd"
            type="button"
            hidden={!showSendButton}
            onClick={handleSend}
          >
            Send this to our team
          </button>
        </div>
      </div>
    </section>
  );
}
