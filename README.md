# ERP System

Welcome to the ERP System! This README will guide you through setting up and using the application.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Dashboard](#dashboard)
  - [Products Management](#products-management)
  - [Orders Management](#orders-management)
  - [Orders Calendar View](#orders-calendar-view)
- [Contributing](#contributing)
- [License](#license)

## About

The ERP System is a comprehensive tool for managing various aspects of a business, including products, orders, and delivery schedules. This application provides functionalities for viewing key metrics, managing products and orders, and visualizing order schedules through a calendar view.

## Features

- **Dashboard:** Display summary metrics and quick navigation links.
- **Products Management:** Present a list of products with add, edit, and delete functionalities.
- **Orders Management:** Show a list of orders with optional viewing, updating, and deletion functionalities.
- **Orders Calendar View:** Display orders on their expected delivery dates with the ability to view orders for a specific date.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- npm (Node Package Manager) installed on your local machine

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine:
```bash
  git clone https://github.com/Tarunvats9068/ERP.git
```
2. Navigate to the project directory:
```bash
  cd ASSIGN
```
3. Install dependencies:
```bash
  npm install 
```
4. To run the Project After Installation
```bash
  npm start 
```
## Usage
To run the application, follow these steps:
### Dashboard

The Dashboard provides an overview of key metrics and features:

1. Total number of products
2. Total number of orders
3. Quick navigation links to the Products and Orders management pages

### Products Management

The Products Management page allows you to manage products:

1. View a list of products with details such as name, category, price, and stock quantity.
2. Add new products.
![Add Product]((https://github.com/Tarunvats9068/ERP/blob/main/public/AddProduct.jpg))
3. Edit existing products.
4. Delete products.

### Orders Management

The Orders Management page allows you to manage orders:

1. View a list of orders with details such as order ID, customer name, order date, and status.
2. view order details.
3. Update order status.
4. Delete orders.

### Orders Calendar View

The Orders Calendar View provides a visual representation of order schedules:

1. View orders on their expected delivery dates same day will be in red color mark but not selected to select a day we need to click on that date.
![Filter Orders](https://github.com/Tarunvats9068/ERP/blob/main/public/FilterOrder.jpg))
In above Screenshot 13 March 2024 is selected to filter Orders and 15 March is the present date that why colored with red.
2. Click on a date to view all orders due for delivery that day.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
