# MERN eCOMMERCE

# Lessons

1. Introduction
2. Install Tools
3. Create react app
4. Create git repository
5. List product - react
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.Js Server
   1. Update package.json set type: module (for es6)
   2. Nodemon for dev dependency --> npm install nodemon --save-dev
   3. Add "start" command/any other command in script for nodemon
8. Fetch Products From Backend
   1. set proxy in package.json - in the frontend
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from useReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
12. Create Product detail screen
    1. fetch product from backend
    2. Create 3 columns for image , info and action
13. Create loading and message component
    1. Create loading component
    2. use spinner component
    3. create message component
    4. create util.js to define getError function
14. Implement add to cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete add to cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create cart screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete cart screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Sign-in Screen
    1. create sign-in form
    2. add email and password
    3. add sign in button
19. Connect to MongoDB Database
    1. create atlas mongoDB database
    2. install local mongoDB database
    3. npm install mongoose
    4. connect to mongoose database
20. Seed sample data
    1. create product model
    2. create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed sample Users
    1. create user model
    2. seed sample users
    3. create user routes
22. Create sign-in backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
23. Complete sign-in screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
25. Create Signup Screen
    1. create input forms
    2. handle submit
    3. create backend api
26. Implement Select payment method screen
    1. create input forms
    2. handle submit
27. Create place order screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api
