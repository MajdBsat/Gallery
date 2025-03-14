import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} /> 
      </Routes>
    </Router>
  )
}

export default App
