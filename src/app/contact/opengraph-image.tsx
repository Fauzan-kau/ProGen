import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Contact Us | ProGen';
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
          ProGen · Contact
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
          Get In Touch
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#F8F5E888',
            maxWidth: '700px',
            lineHeight: 1.5,
            marginBottom: '48px',
          }}
        >
          Enroll in a free demo session or ask us anything. Our team responds within 24 hours.
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {['Free Demo Session', 'Riyadh, Saudi Arabia', 'hello@progen.com'].map((item) => (
            <div
              key={item}
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
              {item}
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
