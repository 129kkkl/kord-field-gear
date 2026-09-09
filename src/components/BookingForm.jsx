import { useState } from 'react'
import { products } from '../data/products.js'

const empty = {
  name: '',
  email: '',
  note: '',
}

function validate(values, productId) {
  const errors = {}
  if (!values.name.trim()) errors.name = '请填写称呼'
  if (!values.email.trim()) {
    errors.email = '请填写邮箱'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = '邮箱格式不正确'
  }
  if (!productId) errors.productId = '请选择要预订的装备'
  return errors
}

function ticketId() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `KORD-RSV-${n}`
}

export default function BookingForm({ selectedId, onProductChange, reserveToken = 0 }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [ticket, setTicket] = useState('')
  const [summary, setSummary] = useState(null)
  const [seenToken, setSeenToken] = useState(reserveToken)

  if (reserveToken !== seenToken) {
    setSeenToken(reserveToken)
    setErrors({})
    setStatus('idle')
    setTicket('')
    setSummary(null)
  }

  const showingForm = status !== 'success'

  const setField = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleProductChange = (event) => {
    onProductChange(event.target.value)
    setErrors((prev) => ({ ...prev, productId: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values, selectedId)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('submitting')
    const product = products.find((item) => item.id === selectedId)
    window.setTimeout(() => {
      setTicket(ticketId())
      setSummary({
        name: values.name.trim(),
        email: values.email.trim(),
        product: product?.nameZh ?? product?.name,
      })
      setStatus('success')
    }, 700)
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setStatus('idle')
    setTicket('')
    setSummary(null)
    onProductChange('')
  }

  return (
    <section className="section booking" id="reserve">
      <div className="wrap booking-grid">
        <div>
          <p className="kicker">RESERVE / INTENT</p>
          <h2>提交预订意向</h2>
          <p className="booking-copy">
            这不是支付。留下称呼、邮箱和目标装备，我们会在 1–2 个工作日内确认库存与发货窗口。当前为前端演示流程，数据不会发到服务器。
          </p>
          <p className="booking-aside">FIELD DESK · UTC+8 09:00–18:00</p>
        </div>

        {showingForm ? (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="name">称呼</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={setField('name')}
                />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </div>
              <div className={`field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="email">邮箱</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={setField('email')}
                />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </div>
            </div>

            <div className={`field${errors.productId ? ' has-error' : ''}`}>
              <label htmlFor="product">目标装备</label>
              <select
                id="product"
                name="product"
                value={selectedId}
                onChange={handleProductChange}
              >
                <option value="">选择一件</option>
                {products.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} · {item.priceLabel}
                  </option>
                ))}
              </select>
              {errors.productId ? (
                <span className="field-error">{errors.productId}</span>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="note">备注（可选）</label>
              <textarea
                id="note"
                name="note"
                value={values.note}
                onChange={setField('note')}
                placeholder="尺码、出行日期、是否需要维修件说明"
              />
            </div>

            <div className="form-foot">
              <p className="form-hint">提交后不会扣款。库存确认前可随时邮件取消。</p>
              <button className="btn btn-solid" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? '提交中…' : '发送意向'}
              </button>
            </div>
          </form>
        ) : (
          <div className="success" role="status" aria-live="polite">
            <p className="kicker">RECEIVED</p>
            <h3>意向已记录</h3>
            <p>
              {summary?.name}，我们已记下你对 {summary?.product} 的预订意向，回访将发至{' '}
              {summary?.email}。
            </p>
            <p className="ticket">单号 {ticket}</p>
            <button className="btn btn-ghost" type="button" onClick={reset}>
              再提一份
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
