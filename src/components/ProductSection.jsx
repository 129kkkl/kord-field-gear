import { products } from '../data/products.js'
import ProductVisual from './ProductVisual.jsx'

export default function ProductSection({ onReserve }) {
  const featured = products.find((item) => item.featured) ?? products[0]
  const rest = products.filter((item) => item.id !== featured.id)

  return (
    <section className="section" id="line">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">LINE / 04 UNITS</p>
          <h2 className="section-title">装备目录</h2>
          <p className="section-note">
            四件构成一套可拆卸系统。主仓、硬壳、下装、腰部模块共用挂点与维修规格。
          </p>
        </div>

        <article className="featured">
          <div className="featured-visual">
            <ProductVisual type={featured.visual} />
          </div>
          <div className="featured-body">
            <span className="product-index">
              {featured.index} / {featured.sku}
            </span>
            <h3 className="product-name">{featured.name}</h3>
            <p className="product-zh">{featured.nameZh}</p>
            <p className="product-desc">{featured.description}</p>
            <div className="product-specs">
              {featured.specs.map((spec) => (
                <span className="spec-chip" key={spec}>
                  {spec}
                </span>
              ))}
            </div>
            <div className="product-foot">
              <div className="price">
                <small>建议零售</small>
                {featured.priceLabel}
              </div>
              <button
                className="btn btn-solid"
                type="button"
                onClick={() => onReserve(featured.id)}
              >
                加入预订
              </button>
            </div>
          </div>
        </article>

        <div className="product-grid">
          {rest.map((item) => (
            <article className="card" key={item.id}>
              <div className="card-visual">
                <ProductVisual type={item.visual} />
              </div>
              <div className="card-body">
                <span className="product-index">
                  {item.index} / {item.sku}
                </span>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-zh">{item.nameZh}</p>
                <p className="product-desc">{item.description}</p>
                <div className="product-specs">
                  {item.specs.map((spec) => (
                    <span className="spec-chip" key={spec}>
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="product-foot">
                  <div className="price">
                    <small>建议零售</small>
                    {item.priceLabel}
                  </div>
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={() => onReserve(item.id)}
                  >
                    加入预订
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
