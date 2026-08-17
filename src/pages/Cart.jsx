import { useNavigate } from 'react-router-dom'

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <div className="page-header">
        <h1>Shopping Cart</h1>
        <p>YOUR SELECTED ITEMS</p>
      </div>

      <div className="cart-section">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty!</p>
            <button className="shop-btn" onClick={() => navigate('/clothes')}>
              START SHOPPING
            </button>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h5>{item.name}</h5>
                    <p className="product-price">${item.price}.00</p>
                    <div className="quantity-selector">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span className="qty-number">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <p className="cart-item-total">${item.price * item.quantity}.00</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Items ({cart.length})</span>
                <span>${total}.00</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total}.00</span>
              </div>
              <button className="shop-btn" style={{width: '100%', textAlign: 'center'}}>
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}