import React, { useState } from 'react';
import '../App.css';
let mockProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stockQuantity: 50 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 15.99, stockQuantity: 30 },
  ];
  localStorage.setItem('productsnumber',2);
  const ProductsManagement = () => {
    const [products, setProducts] = useState(mockProducts);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
    const [showAddForm, setShowAddForm] = useState(false);
    const deleteProduct = (productId) => {
      setProducts(products.filter(product => product.id !== productId));
      localStorage.setItem('productsnumber',mockProducts.length);
    };
    const editProduct = (productId) => {
      const productToEdit = products.find(product => product.id === productId);
      setSelectedProduct(productToEdit);
      mockProducts = productToEdit;
      setNewProduct(productToEdit);
      setShowAddForm(true);
    };
    const addProduct = () => {
      if (selectedProduct) {
        const updatedProducts = products.map(product => {
          if (product.id === selectedProduct.id) {
            return { ...product, ...newProduct };
          }
          return product;
        });
        setProducts(updatedProducts);
        mockProducts = updatedProducts;
        setSelectedProduct(null);
      } else {
        const newProductId = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
        const updatedProducts = [...products, { id: newProductId, ...newProduct }];
        setProducts(updatedProducts);
        mockProducts = updatedProducts;
        localStorage.setItem('productsnumber',mockProducts.length);
      }
      setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
      setShowAddForm(false);
    };
  
    return (
      <div className="products-container">
        <h2>Products Management</h2>
        <button className="add-btn" onClick={() => setShowAddForm(true)}>Add Product</button>
        {showAddForm && (
          <div className="add-form-container">
            <h3>{selectedProduct ? "Edit Product" : "Add New Product"}</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Stock Quantity"
                value={newProduct.stockQuantity}
                onChange={e => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
              />
            </div>
            <button className="save-btn" onClick={addProduct}>Save</button>
            <button className="cancel-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button className="edit-btn" onClick={() => editProduct(product.id)}>Edit</button>
                  <small> </small>
                  <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
  };

  export default ProductsManagement;