export default function BrandStory() {
  return (
    <section className="section story" id="story">
      <div className="wrap story-grid">
        <div>
          <p className="kicker">FIELD MANUAL</p>
          <h2>从材料开始，而不是从外观开始</h2>
          <p className="story-lead">
            KORD 把装备当成可维修的系统：先定负载路径和磨损点，再决定剪裁。每一季不换造型，只改被野外证伪的细节。
          </p>
          <p className="story-body">
            面料、拉链、扣具均可单独更换。我们不承诺“永不损坏”，而是保证损坏后仍能继续用。这是高质量与高实用性重叠的那一段：少一点装饰，多一条维修通道。
          </p>
        </div>

        <dl className="manual">
          <div className="manual-head">
            <span>SPEC / 01</span>
            <span>WHY IT STAYS</span>
          </div>
          <div className="manual-row">
            <dt>耐用</dt>
            <dd>主仓采用 1680D 尼龙与加固缝线。接缝按侧风承重走线，不以外观裁掉应力路径。</dd>
          </div>
          <div className="manual-row">
            <dt>可修</dt>
            <dd>拉链牙、腰带扣、压缩带均为标准件。寄回或就近更换，不要求整包报废。</dd>
          </div>
          <div className="manual-row">
            <dt>实用</dt>
            <dd>口袋尺寸按地图折页、头灯、手套实测。挂点与 RIDGE / NOMAD 共用，减少重复负重。</dd>
          </div>
          <div className="manual-row">
            <dt>工况</dt>
            <dd>连续 72 小时负重行进、暴雨侧风、碎石灌入三项作为出厂门槛，不做实验室单项表演。</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
