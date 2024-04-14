import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';  // Import addToCart action
import cartItems from "./ShoppingCart"

const ProductDetails = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const { id, title, price, quantity } = product;
        dispatch(addToCart({ id, title, price, quantity: 1 }));
    };


    return (
        <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                {/* <img className="p-8 rounded-t-lg" src={product.images[0]} alt="product image" /> */}
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 class="m-1 text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <div className='m-1 flex justify-start'>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">Rating: {product.rating}/5</span>

                </div>

                <div className="m-1 flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <a href="#" onClick={handleAddToCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails

