import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()

    const handleRemoveItem = () => {
        dispatch(removeItem(id))
    }

    const handleIncreaseItem = () => {
        dispatch(increase({id, title}))
    }

    const handleDecreaseItem = () => {
        if (amount === 1) {
            dispatch(removeItem(id))
            return
        }
        
        dispatch(decrease({id, title}))
    }

    return (
        <article className="cart-item">
            <img src={img} alt={title} />

            <div>
                <h4>{title}</h4>
                <h4 className="item-price">
                    ${price}
                </h4>

                <button className='remove-btn' onClick={handleRemoveItem}>remove</button>
            </div>

            <div>
                <button className='amount-btn' onClick={handleIncreaseItem}>
                    <ChevronUp></ChevronUp>
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={handleDecreaseItem}>
                    <ChevronDown></ChevronDown>
                </button>
            </div>
        </article>
    )
}

export default CartItem