
import './App.css'
import Navbar from './Components/Navbar'
import Layout from './Layout/Layout1'
import HomeScreen from './Screens/HomeScreen'
import Dashboard from './Screens/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
  
     <Router>
    <Routes>





      <Route path="/" element={<Layout>< HomeScreen /></Layout>} />
      <Route path="/dashboard" element={<Layout>< Dashboard /></Layout>} />





      
    </Routes>
  </Router>
 
    </>
)
}

export default App
