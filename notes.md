# Next Amazona: Build ECommerce Website Like Amazon By Next.JS

## 1. Introduction

**Introduction**

Technologies that we will use.

- Next js Framework react.
- Vercel to deployment.
- Tailwind css framework
- Google map to use the locator
- Paypal to use the payment system
- Cloudinary to upload the images
- MongoDB to use the Database
- NextAuth package to authenticate
- React Chartjs to create graphics
- React Hook Form to create forms
- Headless
- Heroicons to use icons

**Install tools On Windows**

- installing vs code, git, node, google.

**Install Tools On Mac**

- Ok.

**Configure VS Code & Install Extensions**

- Install Prettier extension
- Install ESLint extension
- Install Javascript ES6
- Install ES7 React

## 1. NextJS App

**Create Next App**

- Created Next Application.
- Installed Tailwind css

**Publish Code to Github**

**Create Layout Component**

- Created laoyout component and added header, main and footer divs and style

## ECommerce Products

**List Products**

- Created list of products in Home Page
- Created component Product Item.
- Created type of data and products

**Details Product**

- Created product page
- Created product details

## Shopping Cart

**Handle Add to Cart**

- Created context provider.
- Created add quantity handle function
- Added number of products added into the cart on header cart

**Create Cart Page**

- Create cart.js
- Use context to get cart items
- List items in cart items
- Redirect to cart screen after add to cart

**Update Quantity In The Cart**

- Add select box for quantity
- Handle select box change

**Save Cart Items**

- install js-cookie package
- save and retreive cart items in cookies

## User Authentication

**Create Login Form**

- install react hook fom
- create input boxes
- add login button

**Connect to MongoDB**

- Install mongoose
- Install mongodb or use mongodb atlas
- Save connection url in .env file
- Create sample users

**Create Login API**

- install next-auth
- create nextauth.js
- implement signin
- use signin in login form

**Add User Menu**

- Check user authentication
- Install headlessui
- Show user menu

# Checkout Wizard

**Create Shipping Screen**

- Display address fields
- Save address in context

**Create payment Methodd Screen**

- Display payment methods
- Save payment method in context

# Load Products From MongoDB

**Seed Sample Products**

- Insert sample products to mongoDB
- Load products from db in home and product screen
- Check product count in stock in add to cart

**Load Products MongoDB**

- Load products in home page from mongodb
- Load products in product page from mongodb
- Use product api to check count in stock in add to cart

**Create place order screen**

- display shipping address
- display payment method
- display order items
- implement create order

**Create order screen**

- Implement backend api for order details
- Load order data from backend
- Display order details

**Create Register Screen**

- add signup api
- create register page
- call api on form submit

**Pay Order By PayPal**

- add paypal button
- handle payment
- create backend api
- update order state

**Create Order History Screen**

- Create my order api
- Create order history component
- Fetch orders and display them

**Publish on Vercel**

- Create vercel account
- Connect to github
- Set next auth and mongodb db in env vars
- Push code to github

**Update User Profile**

- Create profile screen
- Show user info
- Handle update user info

**Create Admin Dashboard**

- Create Admin Menu
- Create dashboard screen
- Implement admin summary api

**List Orders For Admin**

- create orders page
- create orders api
- use api in page

**Deliver Order For Admin**

- create deliver api
- add deliver button
- implement click handler

  **List Products For Admin**

- create products page
- create products api
- use api in page

**Create Product Edit Page**

- create edit page
- create api for product
- show product data in form

**Upload Product Image**

- create cloudinary account
- get cloudinary keys
- create upload api
- upload files in edit page

**Create And Delete Products**

- add create product button
- build new product api
- add handler for delete
- implement delete api

**List Users For Admin**

- create users page
- create users api
- use api in page

**Add Carousel**

- create featured products
- feed carousel data
- show popular products
