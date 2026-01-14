# E-commerce Backend System

This project implements the **backend of an e-commerce application**, focusing on
**core business logic, RESTful APIs, and data modeling**.

The project was built to understand how real-world e-commerce systems handle
users, products, carts, and orders at the backend level.

---

## 🚀 Features

- User authentication and authorization using JWT
- Product management APIs
- Cart management (add, update, remove items)
- Order placement and order history
- Backend-first design with clear business workflows

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Mongoose ODM

---

## 📂 Project Structure

E-commerce-Backend-System/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── server.js
└── package.json


The project follows a **structured backend architecture** with clear separation
between routes, controllers, models, and utilities.

---

## 🔄 Core Workflows

### Authentication
- Users can register and log in
- JWT tokens are generated for authenticated requests
- Protected routes require valid authentication

### Cart Workflow
- Users can add products to the cart
- Cart quantities can be updated
- Cart data is validated on the server side

### Order Workflow
- Orders are created from cart data
- Each order stores product details and quantities
- Users can view their order history

---

## ▶️ How to Run the Project

1. Clone the repository

2. Navigate to the project folder

3. Install dependencies

4. Start the server

The backend server will start running locally.

---

## 🧪 API Testing

The APIs can be tested using tools like:
- Postman
- Thunder Client
- Any REST API client

Authentication tokens must be included in request headers for protected routes.

---

## 📌 Notes

- This project focuses **only on backend development**
- Frontend integration can be added later using these APIs
- The main goal of this project was to build and understand backend workflows
rather than UI design

---

## 📚 Learning Outcomes

- Understanding backend architecture and API design
- Implementing authentication and authorization
- Designing real-world e-commerce workflows
- Working with MongoDB and Mongoose

---

## 👤 Author

**Sahil Gore**

---

