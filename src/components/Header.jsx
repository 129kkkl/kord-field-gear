import { useEffect, useState } from 'react'

const links = [
  { href: '#line', label: '装备' },
  { href: '#story', label: '手册' },
  { href: '#reserve', label: '预订' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={close}>
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 3h8.4L18.2 16 12.4 29H4l6-13L4 3z" fill="#E8E2D4" />
            <path d="M21 3h7v26h-7V3z" fill="#D85A1A" />
          </svg>
          <span>
            <span className="brand-word">KORD</span>
            <span className="brand-sub">FIELD GEAR</span>
          </span>
        </a>

        <nav className="nav" aria-label="主导航">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-solid" href="#reserve">
            预订装备
          </a>
          <button
            className={`menu-toggle${open ? ' is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              ) : (
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`drawer${open ? ' is-open' : ''}`}>
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-solid" href="#reserve" onClick={close}>
          预订装备
        </a>
      </div>
    </header>
  )
}
