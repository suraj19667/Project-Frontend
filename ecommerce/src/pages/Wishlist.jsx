import { useState } from 'react'

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([])

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {/* Add wishlist items here */}
        </div>
      )}
    </div>
  )
}

export default Wishlist
