import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatShell } from './components/ChatShell'
import { Website } from './pages/Website'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatShell />} />
        <Route path="/website" element={<Website />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
