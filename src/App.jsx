
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import  Home  from './components/Home';
import Contact from './components/Contact';


function App() {

  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default App
