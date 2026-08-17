import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ cart }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <NavLink to="/">
        <img src="/images/Moda_logo.png" alt="Moda Logo" className="logo"/>
      </NavLink>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>

        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
        <li><NavLink to="/clothes" onClick={() => setMenuOpen(false)}>CLOTHES</NavLink></li>
        <li><NavLink to="/bags" onClick={() => setMenuOpen(false)}>BAGS</NavLink></li>
        <li><NavLink to="/accessories" onClick={() => setMenuOpen(false)}>ACCESSORIES</NavLink></li>
        <li><NavLink to="/shoes" onClick={() => setMenuOpen(false)}>SHOES</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>

      </ul>

      <div className="nav-icons">

        <a onClick={() => navigate('/search')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-search"></i>
        </a>

        <a onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-person"></i>
        </a>

        <a onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-bag"></i>

          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </a>

      </div>

    </nav>
  )
}

export default Navbar;