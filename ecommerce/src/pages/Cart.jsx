import { useState } from 'react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items for testing
    {
      id: 1,
      name: 'Sample Product',
      price: 99.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ])

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
