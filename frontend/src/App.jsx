
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <AuthProvider>
  
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      
    </AuthProvider>
  )
}

export default App
