export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-meta">
            <span>FIELD UNIT 04</span>
            <span>EST. LAT 30.6°</span>
            <span>REPAIRABLE</span>
          </div>
          <h1 className="hero-title">
            <span>为未知地形</span>
            <span>装备一套</span>
            <span>
              <em>可维修</em>的系统
            </span>
          </h1>
          <p className="hero-lead">
            KORD 不做季节款。每一件装备按负载、磨损和维修路径设计——高强度面料、可更换构件，能在野外继续用下去。
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#line">
              查看装备
            </a>
            <a className="btn btn-ghost" href="#reserve">
              提交预订意向
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <svg className="hero-schematic" viewBox="0 0 620 620" role="img" aria-label="KORD 装备系统结构示意图">
            <rect width="620" height="620" fill="#151812" />
            <g stroke="#2d3326" fill="none">
              <circle cx="310" cy="300" r="196" />
              <circle cx="310" cy="300" r="138" />
              <path d="M56 300h508M310 56v488" />
            </g>
            <g fill="none" stroke="#e8e2d4" strokeWidth="2.2">
              <path d="M248 108h124l36 44v32l38 18v236c0 20-16 34-38 34H212c-22 0-38-14-38-34V202l38-18v-32z" />
              <path d="M230 204h160v196H230z" />
              <path d="M248 108h124l-10 40H258z" stroke="#d85a1a" />
            </g>
            <path d="M210 286h26M384 286h26" stroke="#e8e2d4" strokeWidth="7" />
            <rect x="276" y="348" width="68" height="40" fill="none" stroke="#c4b89a" />
            <g fill="#d4ccb8" fontFamily="IBM Plex Mono, monospace" fontSize="13">
              <text x="28" y="40">SCHEMATIC / PACK SYSTEM</text>
              <text x="28" y="588">TOLERANCE ±2MM</text>
              <text x="520" y="588" textAnchor="end">REV 7.2</text>
              <text x="430" y="156">LID</text>
              <text x="430" y="248">COMPRESS</text>
              <text x="28" y="248">HIP BELT</text>
            </g>
            <circle cx="310" cy="300" r="4" fill="#d85a1a" />
          </svg>
        </div>
      </div>

      <div className="hero-rail">
        <div className="rail-item">
          <strong>1680D</strong>
          <span>尼龙主仓面料</span>
        </div>
        <div className="rail-item">
          <strong>72H</strong>
          <span>连续野外工况测试</span>
        </div>
        <div className="rail-item">
          <strong>终身</strong>
          <span>结构件维修通道</span>
        </div>
      </div>
    </section>
  )
}
