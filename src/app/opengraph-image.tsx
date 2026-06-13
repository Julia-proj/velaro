import { ImageResponse } from 'next/og';

export const alt = 'Velaro — Limpieza exterior profesional en Madrid';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(120% 120% at 80% 0%, #16223a 0%, #0a0c10 55%)',
          color: '#f4f6fb',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 34,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#5f93df',
            fontWeight: 600,
          }}
        >
          Limpieza exterior profesional · Madrid
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            Limpieza de placas solares
          </div>
          <div
            style={{
              display: 'flex',
              gap: 22,
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            <span>y exteriores en</span>
            <span style={{ color: '#5f93df' }}>Madrid</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 30,
            color: '#aeb6c4',
          }}
        >
          <div style={{ display: 'flex' }}>
            Patios · Fachadas · Placas solares · Cubiertas · Madrid
          </div>
          <div style={{ display: 'flex', fontSize: 52, fontWeight: 700, color: '#f4f6fb', letterSpacing: 4 }}>
            VELARO
          </div>
        </div>
      </div>
    ),
    size
  );
}
