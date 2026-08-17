import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Clothes from './pages/Clothes'
import Bags from './pages/Bags'
import Shoes from './pages/Shoes'
import Accessories from './pages/Accessories'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product, quantity) {
    const found = cart.find(item => item.id === product.id)

    if (found) {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity }
        }
        return item
      })
      setCart(newCart)
    } else {
      setCart([
        ...cart,
        { ...product, quantity: quantity }  
      ])
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  function updateQuantity(id, quantity) {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity }
      }
      return item
    })
    setCart(newCart)
  }

  return (                      
    <BrowserRouter>
      <Navbar cart={cart} />
      <Marquee />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clothes" element={<Clothes addToCart={addToCart} />} />
        <Route path="/bags" element={<Bags addToCart={addToCart} />} />
        <Route path="/shoes" element={<Shoes addToCart={addToCart} />} />
        <Route path="/accessories" element={<Accessories addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}                                    

export default App;