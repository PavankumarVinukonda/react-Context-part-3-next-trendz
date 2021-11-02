import React from 'react'

const CartContext = React.createContext({
  CartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
