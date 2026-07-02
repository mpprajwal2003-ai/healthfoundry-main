import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    key: 'unify',
    number: '01',
    title: 'Unify',
    description:
      'Clean and integrate data from fragmented legacy systems into a unified foundation for AI agents to act on.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    key: 'intelligence',
    number: '02',
    title: 'Intelligence',
    description:
      'Build a system of intelligence on your existing systems of record — leaping from raw data to operational action.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M2 15h2M20 15h2M2 9h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
  },
  {
    key: 'reliable',
    number: '03',
    title: 'Reliable',
    description:
      'Automate repeatable patient, operational, and financial workflows that deliver consistent outcomes at scale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    key: 'frictionless',
    number: '04',
    title: 'Frictionless',
    description:
      'Orchestrate seamless data transfer across departments and systems — from patient acquisition through billing, claims, and chronic care.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    key: 'scale',
    number: '05',
    title: 'Scale',
    description:
      'Replicate operational excellence across multiple facilities and care settings, regardless of staff experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '0.75rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = 'var(--card-bg-hover)';
        el.style.borderColor = 'var(--card-border-hover)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = 'var(--card-bg)';
        el.style.borderColor = 'var(--card-border)';
      }}
    >
      {/* Number + icon row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'var(--text-xs)',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
        }}>
          {pillar.number}
        </span>
        <span style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>
          {pillar.icon}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 'var(--text-xl)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: 0,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      }}>
        {pillar.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {pillar.description}
      </p>
    </div>
  );
}

export default function Mission() {
  return (
    <section style={{
      background: 'var(--bg-tertiary)',
      padding: '5rem 0',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-padding)',
      }}>
        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--section-label-color)',
          marginBottom: '0.75rem',
        }}>
          Mission
        </p>
        <h2 style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          margin: '0 0 3rem',
          maxWidth: '640px',
        }}>
          Build the system of intelligence to drive reliable, frictionless, and scalable healthcare outcomes.
        </h2>

        <div className="mission-pillar-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
        }}>
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.key} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
