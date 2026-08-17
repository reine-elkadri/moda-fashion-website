import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function showError() {
    if (error !== '') {
      return <p className="error-message">{error}</p>
    }
  }

  function handleSubmit() {
    if (email === '' || password === '') {
      setError('Please enter email and password')
      return
    }
    setError('')
    alert('Login successful')
  }

  return (
    <section className="login-section">
      <div className="login-form">

        <h2>Login</h2>

        {showError()}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="shop-btn" onClick={handleSubmit}>
          Login
        </button>

        <p className="login-switch">
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')}>Register</span>
        </p>

      </div>
    </section>
  )
}

export default Login;