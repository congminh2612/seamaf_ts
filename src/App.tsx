import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './component/layout/Layout';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import ProductDetail from './pages/productDetail/ProductDetail';
import { useState, useEffect } from 'react';
import { Products } from './interface';
import axios from 'axios';
import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/detail">
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
