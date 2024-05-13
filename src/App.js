import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/consumer/Home"
import Product from './pages/consumer/Product';
import Cart from './pages/consumer/Cart';
import Checkout from "./pages/consumer/Checkout"

const App = () => {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
    </Router>
  );
};

export default App;
