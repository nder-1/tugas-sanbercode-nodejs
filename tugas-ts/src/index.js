"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productService = require("./services/productService");
var userService = require("./services/userService");
var orderService = require("./services/orderService");
var validate_1 = require("./utils/validate");
var productSchema_1 = require("./schemas/productSchema");
var userSchema_1 = require("./schemas/userSchema");
var orderSchema_1 = require("./schemas/orderSchema");
var products = [];
var users = [];
var orders = [];
var newProduct = {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1500,
    category: "Electronics",
    stock: 100
};
if ((0, validate_1.validate)(newProduct, productSchema_1.productSchema)) {
    products = productService.addProduct(products, newProduct);
}
else {
    console.log("Invalid product data");
}
var newUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    address: "123 Main St"
};
if ((0, validate_1.validate)(newUser, userSchema_1.userSchema)) {
    users = userService.addUser(users, newUser);
}
else {
    console.log("Invalid user data");
}
var newOrder = {
    id: 1,
    userId: 1,
    products: [{ productId: 1, quantity: 1 }],
    totalAmount: 1500,
    orderDate: new Date(),
    status: "pending"
};
if ((0, validate_1.validate)(newOrder, orderSchema_1.orderSchema)) {
    orders = orderService.placeOrder(orders, newOrder);
}
else {
    console.log("Invalid order data");
}
console.log(productService.getProducts(products));
console.log(userService.getUsers(users));
console.log(orderService.getOrders(orders));
orders = orderService.updateOrderStatus(orders, 1, "shipped");
console.log(orderService.getOrders(orders));
