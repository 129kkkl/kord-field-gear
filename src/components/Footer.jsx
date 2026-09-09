const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="brand-word">KORD</span>
            <p>为复杂地形设计的可维修装备系统。高质量，不是更贵的外观；耐用，是还能修、还能用。</p>
          </div>
          <div>
            <h3>目录</h3>
            <ul>
              <li>
                <a href="#line">装备</a>
              </li>
              <li>
                <a href="#story">手册</a>
              </li>
              <li>
                <a href="#reserve">预订</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>联络</h3>
            <ul>
              <li>
                <a href="mailto:desk@kord.field">desk@kord.field</a>
              </li>
              <li>杭州 · 野外装备工坊</li>
              <li>
                <a href="#top">回到顶部</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {year} KORD FIELD GEAR</span>
          <span>PREORDER DEMO · NO PAYMENT</span>
        </div>
      </div>
    </footer>
  )
}
