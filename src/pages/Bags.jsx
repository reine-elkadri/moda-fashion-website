import { useState } from 'react'
import products from '../data/products'

function Bags({ addToCart }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [quantities, setQuantities] = useState({})

  const bagsProducts = products.filter(
    (product) => product.category === 'bags'
  )

  const filters = ['All', 'Handbags', 'Crossbody', 'Tote Bags', 'Mini Bags']

  const filteredProducts = activeFilter === 'All'
    ? bagsProducts
    : bagsProducts.filter((product) => product.subcategory === activeFilter)

  const getQuantity = (productId) => {
    return quantities[productId] || 1
  }

  const increaseQty = (productId) => {
    setQuantities({ ...quantities, [productId]: getQuantity(productId) + 1 })
  }

  const decreaseQty = (productId) => {
    if (getQuantity(productId) > 1) {
      setQuantities({ ...quantities, [productId]: getQuantity(productId) - 1 })
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1>Bags</h1>
        <p>DISCOVER OUR LATEST BAG COLLECTION</p>
      </div>

      <div className="products-section">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h5>{product.name}</h5>
                <p className="product-price">${product.price}.00</p>

                <div className="quantity-selector">
                  <button className="qty-btn" onClick={() => decreaseQty(product.id)}>−</button>
                  <span className="qty-number">{getQuantity(product.id)}</span>
                  <button className="qty-btn" onClick={() => increaseQty(product.id)}>+</button>
                </div>

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product, getQuantity(product.id))}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bags;