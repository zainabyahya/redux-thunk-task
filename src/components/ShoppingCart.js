import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../store';
import ProductDetails from './ProductDetails';

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate total price on cart item change
    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        dispatch(updateQuantity(productId, newQuantity));
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <ProductDetails product={item} />
                            <div className="cart-item-actions">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                                />
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div className="cart-total">
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
