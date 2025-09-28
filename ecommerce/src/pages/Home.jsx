import { products } from '../data/products'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to E-Shop</h1>
        <p>Discover Premium Products</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <h3>Electronics</h3>
            <p>Latest Gadgets</p>
          </div>
          <div className="category">
            <h3>Fashion</h3>
            <p>Trending Styles</p>
          </div>
          <div className="category">
            <h3>Home & Living</h3>
            <p>Decor & More</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
