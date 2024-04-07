# Redux Thunk - Shopping Cart Task

This project is a task aimed at creating a products page and a shopping cart using Redux and Redux Thunk.

It involves setting up two reducers - one for managing the products and the other for managing the shopping cart. Additionally, React is utilized to create pages for displaying the products list, product details, and a component for managing the shopping cart.

For getting the products data, you'll be using [This API](https://dummyjson.com/products).

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository.

   ```bash
   git clone git@github.com:TheCodePeople/redux-thunk-task.git
   cd redux-thunk-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Redux Setup

This project utilizes Redux for state management. Two reducers are implemented:

- Product Reducer: Manages the state related to the products.
- Cart Reducer: Manages the state related to the shopping cart.

**Redux Thunk** middleware is used for handling asynchronous actions, such as fetching products data from an API.

## Components

1. **ProductList**
   This component is responsible for displaying a list of products. It fetches the product data from the Redux store and renders each product as a separate item.

2. **ProductDetails**
   This component displays the details of a specific product. It retrieves the product details from the Redux store based on the product ID.

3. **ShoppingCart**
   The ShoppingCart component manages the shopping cart functionality. It displays the list of products added to the cart.

**NOTE**: You're free to style your application using any CSS library of your choice.
