import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource/inter';
import './global.scss'
import Login from "./pages/login/Login.jsx"
import Reembolsos from "./pages/reembolsos/Reembolsos.jsx"
import Solicitacao from "./pages/solicitacao/Solicitacao.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolsos" element={<Reembolsos />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
      </Routes>
    </BrowserRouter>
  )
}