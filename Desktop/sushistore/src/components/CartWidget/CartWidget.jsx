import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa'
import './CartWidget.scss'


const CartWidget = () => {
    const { cart, totalCantidad } = 
    useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget 