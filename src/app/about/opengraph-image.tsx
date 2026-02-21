import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'About Us | ProGen';
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
          ProGen · About Us
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
          Who We Are
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#F8F5E888',
            maxWidth: '750px',
            lineHeight: 1.5,
          }}
        >
          Saudi Arabia&apos;s premier career-focused academy bridging school education and professional excellence, aligned with Vision 2030.
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
