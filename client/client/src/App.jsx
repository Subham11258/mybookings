import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from "./pages/Login"
import Home from './pages/Home/Home';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

 
    </div>

  )
}
