import React, { useState } from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const mockOrders = [
    { id: 101, customerName: 'Customer 1', orderDate: '2024-03-12', status: 'Pending' },
    { id: 102, customerName: 'Customer 2', orderDate: '2024-03-13', status: 'Shipped' },
  ];
  localStorage.setItem('ordernumbers',2);
const OrdersManagement = () => {

    const [orders, setOrders] = useState(mockOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [status, setStatus] = useState({...orders,status:''});
    const [showUpdateForm, setUpdateForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [showCalender, setShowCalender] = useState(false);
    const deleteOrder = (orderId) => {
      setOrders(orders.filter(order => order.id !== orderId));
    };
    const editOrder = (orderId) => {
      const orderToEdit = orders.find(order => order.id === orderId);
      setSelectedOrder(orderToEdit);
      setStatus(orderToEdit);
      setUpdateForm(true);
    };
  const updateStatus = () => 
  {
    const updatedStatus = orders.map(order => {
      if (order.id === selectedOrder.id) {
        return { ...order, ...status };
      }
      return order;
    });
    setOrders(updatedStatus);
    setSelectedOrder(null);
    setUpdateForm(false);
  }
  const filterOrdersByDate = (date) => {
    const filteredOrders = mockOrders.filter(order => {
      const orderDate = new Date(order.orderDate);
      return orderDate.getDate() === date.getDate() &&
             orderDate.getMonth() === date.getMonth() &&
             orderDate.getFullYear() === date.getFullYear();
    });
    setOrders(filteredOrders);
  };
  const clearFilter = () => {
    setOrders(mockOrders);
    setSelectedDate('');
    setShowCalender(false);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterOrdersByDate(date);
  };
  const ApplyFilters = () =>
  {
    setShowCalender(true);
  }
    return (
      <div className="orders-container">
        <h2>Orders Management</h2>
        <div className="orders-calendar-container">
        <div className="calendar-container">
        <button onClick={ApplyFilters}>Apply Filters</button>
        <small>
        </small>
        <button onClick={clearFilter}>Clear Filter</button>
          { showCalender && 
          <>
           <h4>Orders Calendar View </h4>
           <Calendar
            onChange={handleDateChange}
            value={selectedDate.selectedDate}
          />
          </>
         }
         </div>
      </div>
        {showUpdateForm && (
          <div className="add-form-container">
            <h3>Update Status</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Status"
                value={status.status}
                onChange={e => setStatus({status: e.target.value })}
              />
            </div>
             <button className="save-btn" onClick={updateStatus}>Save</button>
             <button className="cancel-btn" onClick={() => setUpdateForm(false)}>Cancel</button>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => editOrder(order.id)}>Edit</button>
                  <small> </small>
                  <button className="delete-btn" onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default OrdersManagement;