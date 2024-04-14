import './App.css';
import ProductList from "./components/ProductList";
import { Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
