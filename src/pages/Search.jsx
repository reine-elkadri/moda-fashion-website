import { useState } from 'react'
import products from '../data/products'

function Search({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [quantities, setQuantities] = useState({})

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="page-header">
        <h1>Search</h1>
        <p>FIND WHAT YOU ARE LOOKING FOR</p>
      </div>

      <div className="search-section">

        <div className="search-bar">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search for clothes, bags, shoes..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        {searchTerm === '' ? (
          <div className="search-empty">
            <p>Start typing to search products </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="search-empty">
            <p>No products found for "{searchTerm}" </p>
          </div>
        ) : (
          <div>
            <p className="search-results-count">
              {filteredProducts.length} result(s) found for "{searchTerm}"
            </p>
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
        )}

      </div>
    </div>
  )
}

export default Search;