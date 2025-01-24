import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import { Routes ,Router} from 'react-router-dom'
import Home from './component/Home.jsx'
import AddProduct from './component/AddProduct.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <>
      <Navbar/>

      <Routes>
        <Router path ='/' element={<Home/>} />
        <Router path ='/addProduct' element={<AddProduct/>} />

      </Routes>
      </>
    
  )
}


export default App
