import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import OrderPage from './Components/Order';
import ProductPage from './Components/Product';
const App = () => {
  
  return (
    <>
       <div className="app-container">
      <header>
        <h1>Admin Panel</h1>
      </header>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/products' element={<ProductPage />} />
    </ Routes>
    </BrowserRouter>
    </>
  );
};
export default App;