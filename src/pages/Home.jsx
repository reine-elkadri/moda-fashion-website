import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-section">
      <div className="home-left">
        <h1>Welcome<br />to <span>Moda</span></h1>
        <p>Discover a collection of soft, elegant, and modern fashion designed for the young woman of today.</p>
        <button className="shop-btn" onClick={() => navigate('/clothes')}>
          SHOP NOW
        </button>
      </div>

      <div className="home-right">
        <h2>Featured Categories</h2>
        <div className="categories-grid">

          <div className="category-card" onClick={() => navigate('/clothes')}>
            <img src="/images/clothes.png" alt="Clothes" />
            <span className="category-label">CLOTHES</span>
          </div>

          <div className="category-card" onClick={() => navigate('/bags')}>
            <img src="/images/bags.png" alt="Bags" />
            <span className="category-label">BAGS</span>
          </div>

          <div className="category-card" onClick={() => navigate('/accessories')}>
            <img src="/images/acc.png" alt="Accessories" />
            <span className="category-label">ACCESSORIES</span>
          </div>

          <div className="category-card" onClick={() => navigate('/shoes')}>
            <img src="/images/shoes.jpg" alt="Shoes" />
            <span className="category-label">SHOES</span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home;