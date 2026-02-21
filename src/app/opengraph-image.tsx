import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ProGen — Where Education Becomes a Career Strategy';
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
        {/* Red accent bar */}
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

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              background: '#FC5B5020',
              border: '1px solid #FC5B5050',
              borderRadius: '999px',
              padding: '8px 20px',
              color: '#FC5B50',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Riyadh, Saudi Arabia
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#F8F5E8',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}
        >
          Pro<span style={{ color: '#FC5B50' }}>Gen</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: '#F8F5E888',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Where Education Becomes a Career Strategy
        </div>

        {/* Programs row */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['CBSE Tuition', 'NEET & JEE', 'Coding & Dev'].map((p) => (
            <div
              key={p}
              style={{
                background: '#F8F5E810',
                border: '1px solid #F8F5E820',
                borderRadius: '12px',
                padding: '10px 20px',
                color: '#F8F5E8',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#F8F5E840',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          www.progenksa.com
        </div>
      </div>
    ),
    { ...size },
  );
}
