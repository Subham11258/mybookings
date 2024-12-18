import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from "./pages/Login"
import Home from './pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoutes';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
            <Home />
            </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

 
    </div>

  )
}
