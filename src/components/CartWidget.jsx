import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/ShoppingCartContext';

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/cart">
        Carrito
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget