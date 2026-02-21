import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Programs | ProGen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#313743',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '8px',
            height: '100%',
            background: '#FC5B50',
          }}
        />

        <div
          style={{
            color: '#FC5B50',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          ProGen · Programs
        </div>

        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#F8F5E8',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Our Programs
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#F8F5E888',
            marginBottom: '48px',
            maxWidth: '700px',
          }}
        >
          CBSE Tuition, NEET & JEE Preparation, and Coding & Software Development in Riyadh.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: 'CBSE Tuition', desc: 'Classes 6–12 · All Subjects' },
            { name: 'NEET & JEE Preparation', desc: 'Regular & Crash Courses' },
            { name: 'Coding & Software Development', desc: 'Practical, Industry-Ready Skills' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FC5B50' }} />
              <span style={{ color: '#F8F5E8', fontSize: '20px', fontWeight: 600 }}>{p.name}</span>
              <span style={{ color: '#F8F5E850', fontSize: '16px' }}>· {p.desc}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#F8F5E840',
            fontSize: '16px',
          }}
        >
          www.progenksa.com
        </div>
      </div>
    ),
    { ...size },
  );
}
