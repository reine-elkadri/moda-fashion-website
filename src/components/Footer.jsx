import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const [showGuide, setShowGuide] = useState(false);
  const location = useLocation();
  const isShoesPage = location.pathname === '/shoes';

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>MODA</h3>
          <p>
            Inspired by Mediterranean grace.
            Modern fashion for the young woman of today.
          </p>
        </div>

        <div className="footer-col">
          <h4>SHOP</h4>
          <ul>
            <li><Link to="/clothes">Clothes</Link></li>
            <li><Link to="/bags">Bags</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>INFO</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button>Shipping</button></li>
            <li><button>Returns</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>
              <button
                className="size-guide-btn"
                onClick={() => setShowGuide(true)}> Size Guide
              </button>
            </li>

            <li><button>FAQ</button></li>
            <li><button>Track Order</button></li>

          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MODA FASHION. ALL RIGHTS RESERVED.</p>

       <div className="footer-icons">
        <i className="bi bi-twitter"></i>
         <i className="bi bi-instagram"></i>
         <i className="bi bi-facebook"></i>
         </div>

      </div>

      {showGuide && (
        <div className="size-modal">
          <div className="size-content">
            <button
              className="close-btn"
              onClick={() => setShowGuide(false)} > ✕
            </button>

            <h2>
              {isShoesPage ? 'Shoe Size Guide' : 'Clothing Size Guide'}
            </h2>

            <table>
              {isShoesPage ? (
                <>
                  <thead>
                    <tr>
                      <th>EU</th>
                      <th>US</th>
                      <th>UK</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>36</td>
                      <td>5.5</td>
                      <td>3.5</td>
                    </tr>

                    <tr>
                      <td>37</td>
                      <td>6.5</td>
                      <td>4.5</td>
                    </tr>

                    <tr>
                      <td>38</td>
                      <td>7</td>
                      <td>5</td>
                    </tr>

                    <tr>
                      <td>39</td>
                      <td>8</td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </>

              ) : (

                <>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Bust</th>
                      <th>Waist</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>S</td>
                      <td>84 cm</td>
                      <td>64 cm</td>
                    </tr>

                    <tr>
                      <td>M</td>
                      <td>90 cm</td>
                      <td>70 cm</td>
                    </tr>

                    <tr>
                      <td>L</td>
                      <td>96 cm</td>
                      <td>76 cm</td>
                    </tr>
                  </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;