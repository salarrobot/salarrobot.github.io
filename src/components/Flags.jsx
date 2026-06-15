// Inline SVG flags — render reliably everywhere (Windows Chrome doesn't draw
// country-flag emoji). 3:2 ratio, ~20px wide in chips.

const wrap = {
  display: 'inline-block',
  flexShrink: 0,
  borderRadius: 2,
  boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
};

export const UsFlag = ({ style, ...props }) => (
  <svg viewBox="0 0 30 20" width="22" height="15" style={{ ...wrap, ...style }} {...props}>
    <rect width="30" height="20" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((i) => (
      <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#b22234" />
    ))}
    <rect width="12" height={(7 * 20) / 13} fill="#3c3b6e" />
    {[...Array(4)].map((_, r) =>
      [...Array(5)].map((_, c) => (
        <circle key={`${r}-${c}`} cx={1.4 + c * 2.3} cy={1.3 + r * 2.6} r="0.5" fill="#fff" />
      ))
    )}
  </svg>
);

export const AzFlag = ({ style, ...props }) => (
  <svg viewBox="0 0 30 20" width="22" height="15" style={{ ...wrap, ...style }} {...props}>
    <rect width="30" height="20" fill="#3f9c35" />
    <rect width="30" height={20 / 3} fill="#0092bc" />
    <rect y={20 / 3} width="30" height={20 / 3} fill="#ef3340" />
    <circle cx="14" cy="10" r="3.1" fill="#fff" />
    <circle cx="15.1" cy="10" r="2.5" fill="#ef3340" />
    <path
      d="M16.7 8.2l.5 1.2 1.3.1-1 .9.3 1.3-1.1-.7-1.1.7.3-1.3-1-.9 1.3-.1z"
      fill="#fff"
    />
  </svg>
);

export const TrFlag = ({ style, ...props }) => (
  <svg viewBox="0 0 30 20" width="22" height="15" style={{ ...wrap, ...style }} {...props}>
    <rect width="30" height="20" fill="#e30a17" />
    <circle cx="12" cy="10" r="4.2" fill="#fff" />
    <circle cx="13.4" cy="10" r="3.3" fill="#e30a17" />
    <path
      d="M17.7 7.9l.7 1.7 1.8.1-1.4 1.2.5 1.8-1.6-1-1.5 1 .5-1.8-1.4-1.2 1.8-.1z"
      fill="#fff"
    />
  </svg>
);

// Iran — historical Lion and Sun flag: green/white/red tricolour with a
// golden sun (disc + rays) and a simplified lion over the centre stripe.
export const IrLionSunFlag = ({ style, ...props }) => (
  <svg viewBox="0 0 30 20" width="22" height="15" style={{ ...wrap, ...style }} {...props}>
    <rect width="30" height="20" fill="#fff" />
    <rect width="30" height={20 / 3} fill="#239f40" />
    <rect y={(2 * 20) / 3} width="30" height={20 / 3} fill="#da0000" />
    {/* sun rays + disc */}
    <g fill="#d4a017">
      {[...Array(12)].map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <rect
            key={i}
            x="14.6"
            y="6.2"
            width="0.8"
            height="2.1"
            transform={`rotate(${i * 30} 15 10)`}
          />
        );
      })}
      <circle cx="15" cy="10" r="2.6" />
    </g>
    {/* simplified lion silhouette */}
    <g fill="#8a5a00">
      <ellipse cx="14.4" cy="10.4" rx="2" ry="1.1" />
      <circle cx="12.7" cy="9.7" r="0.9" />
      <rect x="12.9" y="11" width="0.5" height="1.4" />
      <rect x="15.4" y="11" width="0.5" height="1.4" />
      <path d="M16.4 9.4l1.4-0.8-0.2 0.9-1.1 0.4z" />
    </g>
  </svg>
);

const FLAGS = [UsFlag, AzFlag, TrFlag, IrLionSunFlag];

export function LangFlag({ index, ...props }) {
  const Flag = FLAGS[index] || UsFlag;
  return <Flag {...props} />;
}
