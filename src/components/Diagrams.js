import React from 'react';

// Inline SVG diagrams. Colors are literal hex values so they render the same everywhere.
const C = {
  box: '#1f2937',
  line: '#6b7280',
  text: '#e5e7eb',
  muted: '#9ca3af',
  accent: '#60a5fa',
  accentFill: 'rgba(37, 99, 235, 0.14)',
};

const ArrowMarker = ({ id }) => (
  <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,0 L10,5 L0,10 z" fill={C.line} />
  </marker>
);

const Box = ({ x, y, w, h, title, sub, accent }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill={accent ? C.accentFill : C.box} stroke={accent ? C.accent : C.line} />
    <text x={x + w / 2} y={sub ? y + h / 2 - 2 : y + h / 2 + 4} textAnchor="middle" fill={C.text} fontSize="12" fontWeight="600">
      {title}
    </text>
    {sub && (
      <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fill={C.muted} fontSize="11">
        {sub}
      </text>
    )}
  </g>
);

const Arrow = ({ x1, y1, x2, y2, id, both }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={C.line}
    strokeWidth="1.5"
    markerEnd={`url(#${id})`}
    markerStart={both ? `url(#${id})` : undefined}
  />
);

const Label = ({ x, y, children }) => (
  <text x={x} y={y} fill={C.muted} fontSize="10" letterSpacing="1.5">
    {children}
  </text>
);

/* Pipeline behind the AI morning briefing assistant (simplified). */
export const BriefingDiagram = () => (
  <svg
    viewBox="0 44 760 286"
    width="100%"
    style={{ minWidth: 640 }}
    role="img"
    aria-labelledby="briefing-title briefing-desc"
  >
    <title id="briefing-title">AI morning briefing pipeline</title>
    <desc id="briefing-desc">
      News feeds, emails and Slack messages flow through RSS ingestion, article clustering, story generation and
      personalization. The result goes to ElevenLabs text-to-speech and becomes a morning briefing with audio
      synchronized to the text. The stages run as asynchronous Node.js and TypeScript services on AWS ECS using
      NestJS and Redis with BullMQ, with retry and failure handling.
    </desc>
    <defs>
      <ArrowMarker id="briefing-arrow" />
    </defs>

    <Label x="20" y="58">SOURCES</Label>
    <Box x={20} y={70} w={110} h={30} title="News (RSS)" />
    <Box x={20} y={115} w={110} h={30} title="Emails" />
    <Box x={20} y={160} w={110} h={30} title="Slack & more" />

    <g stroke={C.line} strokeWidth="1.5" fill="none">
      <path d="M130 85 H142 V175 H130" />
      <line x1="130" y1="130" x2="142" y2="130" />
    </g>
    <Arrow x1={142} y1={130} x2={158} y2={130} id="briefing-arrow" />

    <Label x="160" y="88">EVENT-DRIVEN WORKFLOW</Label>
    <Box x={160} y={100} w={130} h={60} title="RSS ingestion" accent />
    <Box x={314} y={100} w={130} h={60} title="Article clustering" accent />
    <Box x={468} y={100} w={130} h={60} title="Story generation" accent />
    <Box x={622} y={100} w={130} h={60} title="Personalization" sub="per user preferences" accent />

    <Arrow x1={290} y1={130} x2={312} y2={130} id="briefing-arrow" />
    <Arrow x1={444} y1={130} x2={466} y2={130} id="briefing-arrow" />
    <Arrow x1={598} y1={130} x2={620} y2={130} id="briefing-arrow" />

    <Arrow x1={687} y1={160} x2={687} y2={198} id="briefing-arrow" />
    <Box x={622} y={200} w={130} h={50} title="Text-to-speech" sub="ElevenLabs" />
    <Arrow x1={620} y1={225} x2={562} y2={225} id="briefing-arrow" />
    <Box x={370} y={200} w={190} h={50} title="Morning briefing" sub="audio synced with text" />

    <rect x="20" y="272" width="732" height="42" rx="8" fill="none" stroke={C.line} strokeDasharray="5 4" />
    <text x="386" y="297" textAnchor="middle" fill={C.muted} fontSize="12">
      Node.js / TypeScript, NestJS · Redis + BullMQ · AWS ECS · retries and failure handling
    </text>
  </svg>
);

/* nexus-rpc: build-time stub generation and the runtime channel between two services. */
export const NexusDiagram = () => (
  <svg
    viewBox="0 0 640 340"
    width="100%"
    style={{ minWidth: 560 }}
    role="img"
    aria-labelledby="nexus-title nexus-desc"
  >
    <title id="nexus-title">nexus-rpc architecture</title>
    <desc id="nexus-desc">
      At build time a schema compiler turns a service schema into stubs for Python, Go and TypeScript. At runtime two
      services, each using a generated stub, talk over a nexus-rpc channel that uses mTLS without a service-mesh
      sidecar, multiplexed streams over fixed 44-byte frames, HMAC capability tickets, ChaCha20-Poly1305 or AES-GCM
      encrypted payloads, W3C trace IDs and raw float32 embedding transport.
    </desc>
    <defs>
      <ArrowMarker id="nexus-arrow" />
    </defs>

    <Label x="20" y="18">BUILD TIME</Label>
    <Box x={20} y={30} w={120} h={50} title="Service schema" />
    <Arrow x1={140} y1={55} x2={178} y2={55} id="nexus-arrow" />
    <Box x={180} y={30} w={120} h={50} title="Schema compiler" accent />
    <Arrow x1={300} y1={55} x2={338} y2={35} id="nexus-arrow" />
    <Arrow x1={300} y1={55} x2={338} y2={69} id="nexus-arrow" />
    <Arrow x1={300} y1={55} x2={338} y2={103} id="nexus-arrow" />
    <Box x={340} y={22} w={140} h={26} title="Python stub" />
    <Box x={340} y={56} w={140} h={26} title="Go stub" />
    <Box x={340} y={90} w={140} h={26} title="TypeScript stub" />
    <text x="500" y="73" fill={C.muted} fontSize="11">generated service stubs</text>

    <Label x="20" y="150">RUNTIME</Label>
    <Box x={20} y={200} w={120} h={80} title="Service A" sub="generated stub" />
    <Box x={500} y={200} w={120} h={80} title="Service B" sub="generated stub" />

    <Arrow x1={140} y1={240} x2={170} y2={240} id="nexus-arrow" both />
    <Arrow x1={470} y1={240} x2={500} y2={240} id="nexus-arrow" both />

    <rect x="170" y="165" width="300" height="160" rx="10" fill={C.accentFill} stroke={C.accent} />
    <text x="320" y="190" textAnchor="middle" fill={C.accent} fontSize="13" fontWeight="600">
      nexus-rpc channel
    </text>
    {[
      'mTLS, no service-mesh sidecar',
      'Multiplexed streams, fixed 44-byte frames',
      'HMAC capability tickets for auth',
      'ChaCha20-Poly1305 / AES-GCM payloads',
      'W3C trace IDs',
      'Raw float32 embedding transport',
    ].map((line, i) => (
      <text key={line} x="320" y={214 + i * 20} textAnchor="middle" fill={C.text} fontSize="12">
        {line}
      </text>
    ))}
  </svg>
);
