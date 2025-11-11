import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Index from './Index.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
