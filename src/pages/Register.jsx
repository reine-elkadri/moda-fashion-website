import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
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
    if (name === '' || email === '' || password === '') {
      setError('Please fill all fields')
      return
    }
    setError('')
    alert('Registration successful')
  }

  return (
    <section className="login-section">
      <div className="login-form">

        <h2>Register</h2>

        {showError()}

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Register
        </button>

        <p className="login-switch">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Login</span>
        </p>

      </div>
    </section>
  )
}

export default Register;