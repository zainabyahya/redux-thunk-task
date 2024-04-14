import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductDetails from './ProductDetails';
import { getProducts } from "../store";
import ShoppingCart from "./ShoppingCart";



function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()); // Dispatch the action to fetch products
    }, [dispatch]);

    return (

        <div className="flex w-1/2 flex-wrap m-10 gap-12">
            <ShoppingCart />
            {products.map((product) => (
                <ProductDetails key={product.id} product={product} /> // Pass each product to productItem
            ))}
        </div>
    );
};

export default ProductList;

