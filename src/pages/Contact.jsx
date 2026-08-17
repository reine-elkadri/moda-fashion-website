import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (name === '' || email === '') {
      alert('Please fill in all fields!')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
  return (
    <div className="msg">
      <h2>Thank You! 🌸</h2>
      <p>Your message has been sent successfully.</p>
    </div>
  )
}

  return (
    <div>
      <div className="page-header">
        <h1>Contact</h1>
        <p>GET IN TOUCH WITH MODA</p>
      </div>

      <div className="contact-section">
        <div className="contact-form">

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleSubmit} className="shop-btn">
            SEND MESSAGE
          </button>

        </div>
      </div>

    </div>
  )
}

export default Contact;