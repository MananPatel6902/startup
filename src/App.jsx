import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Process from './pages/Process'
import Team from './pages/Team'
import Contact from './pages/Contact'
import DesignPreview from './pages/DesignPreview'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/process" element={<Process />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design-preview" element={<DesignPreview />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  )
}
