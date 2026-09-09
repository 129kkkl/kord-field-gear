const visuals = {
  pack: Pack,
  shell: Shell,
  pant: Pant,
  hip: Hip,
}

export default function ProductVisual({ type, className }) {
  const Graphic = visuals[type] ?? Pack
  return <Graphic className={className} />
}

function Pack({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 520" role="img" aria-label="RIDGE 28L 技术背包示意图">
      <rect width="640" height="520" fill="#1a1e16" />
      <g fill="none" stroke="#3a4032" strokeWidth="1">
        <path d="M40 40h560M40 480h560M80 20v480M560 20v480" />
      </g>
      <text x="48" y="32" fill="#8a8676" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        UNIT / KG-PK-28
      </text>
      <g transform="translate(168 46)">
        <path
          d="M92 28h120l28 36v28l36 18v248c0 18-16 32-36 32H64c-20 0-36-14-36-32V110l36-18V64z"
          fill="#2a3124"
          stroke="#d8d2c2"
          strokeWidth="2.2"
        />
        <path d="M70 118h164v196H70z" fill="#22281c" stroke="#c4b89a" strokeWidth="1.4" />
        <path d="M86 136h132v28H86z" fill="#1a1e16" stroke="#8a8676" />
        <path d="M92 28h120l-8 42H100z" fill="#d85a1a" />
        <path d="M56 248h20M228 248h20" stroke="#e8e2d4" strokeWidth="6" />
        <path d="M118 332h68v48h-68z" fill="#32382a" stroke="#b8ad90" />
        <circle cx="152" cy="356" r="8" fill="none" stroke="#e8e2d4" />
        <path d="M78 414h148" stroke="#d85a1a" strokeWidth="3" />
      </g>
      <g fill="#9a9686" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        <text x="48" y="500">LOAD 28L</text>
        <text x="520" y="500">1.18 KG</text>
      </g>
    </svg>
  )
}

function Shell({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 520" role="img" aria-label="VECTOR SHELL 防护硬壳示意图">
      <rect width="640" height="520" fill="#181c15" />
      <g fill="none" stroke="#3a4032" strokeWidth="1">
        <path d="M32 80h576M32 440h576" />
      </g>
      <g transform="translate(150 70)">
        <path
          d="M170 18c28 8 48 34 52 64l38 18 18 196c2 36-18 62-52 70l-22 8H136l-22-8c-34-8-54-34-52-70l18-196 38-18c4-30 24-56 52-64z"
          fill="#262b20"
          stroke="#e8e2d4"
          strokeWidth="2"
        />
        <path d="M128 118h88v168h-88z" fill="none" stroke="#c4b89a" />
        <path d="M118 40c16-18 72-18 88 0" fill="none" stroke="#d85a1a" strokeWidth="6" />
        <path d="M96 210h20M228 210h20" stroke="#e8e2d4" strokeWidth="5" />
        <path d="M170 118v168" stroke="#8a8676" strokeDasharray="4 6" />
      </g>
      <text x="40" y="56" fill="#8a8676" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        SHELL / 20K·20K
      </text>
    </svg>
  )
}

function Pant({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 520" role="img" aria-label="TRAILFORM 机能长裤示意图">
      <rect width="640" height="520" fill="#171b14" />
      <g transform="translate(190 36)">
        <path
          d="M70 16h124l12 28-18 48 28 280-54 48-36-210-10 210-54-48 24-280-16-48z"
          fill="#24291e"
          stroke="#e8e2d4"
          strokeWidth="2"
        />
        <path d="M96 92h78" stroke="#d85a1a" strokeWidth="4" />
        <path d="M88 210h36v48H88z" fill="#32382a" stroke="#b8ad90" />
        <path d="M80 318h42M148 318h42" stroke="#8a8676" />
      </g>
      <text x="40" y="40" fill="#8a8676" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        BOTTOM / 4-WAY
      </text>
    </svg>
  )
}

function Hip({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 520" role="img" aria-label="NOMAD MOD 模块腰包示意图">
      <rect width="640" height="520" fill="#191d16" />
      <g transform="translate(120 150)">
        <path d="M20 70h360" stroke="#8a8676" strokeWidth="10" />
        <path d="M110 18h180l28 46v86c0 16-12 28-28 28H110c-16 0-28-12-28-28V64z" fill="#2a3124" stroke="#e8e2d4" strokeWidth="2" />
        <path d="M132 46h136v28H132z" fill="#1a1e16" stroke="#c4b89a" />
        <path d="M124 18h152l-10 20H134z" fill="#d85a1a" />
        <circle cx="200" cy="118" r="7" fill="none" stroke="#e8e2d4" />
      </g>
      <text x="40" y="40" fill="#8a8676" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        MOD / 3.5L
      </text>
    </svg>
  )
}
