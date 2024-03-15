import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'; 
const Dashboard = () => {
    const navigateTo = useNavigate();
    return (
      <div className="dashboard-container">
          <div className="dashboard-actions">
          <button onClick={() => navigateTo('/products')}>Manage Products</button>
          <small> </small>
          <button onClick={() => navigateTo('/orders')}>Manage Orders</button>
        </div>
        <h2>Dashboard</h2>
        <div className="dashboard-summary">
          <div className="summary-item">
            <p>Products</p>
            <span>{
             localStorage.getItem('productsnumber')
           }</span>
          </div>
          <div className="summary-item">
            <p>Orders Placed</p>
            <span>{localStorage.getItem('ordernumbers')}</span>
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;