import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ProductDetail from "./pages/productDetail";
import PaymentInformation from "./pages/paymentInformation";
import StatusOfPurchase from "./pages/statusOfPurchase";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/payment-info" element={<PaymentInformation />} />
        <Route path="/status-purchase" element={<StatusOfPurchase />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
