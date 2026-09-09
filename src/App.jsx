import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductSection from './components/ProductSection.jsx'
import BrandStory from './components/BrandStory.jsx'
import BookingForm from './components/BookingForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [selectedId, setSelectedId] = useState('')
  const [reserveToken, setReserveToken] = useState(0)

  const handleReserve = (id) => {
    setSelectedId(id)
    setReserveToken((token) => token + 1)
    document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection onReserve={handleReserve} />
        <BrandStory />
        <BookingForm
          selectedId={selectedId}
          onProductChange={setSelectedId}
          reserveToken={reserveToken}
        />
      </main>
      <Footer />
    </>
  )
}
