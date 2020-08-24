# MEAN-MERN2

Practical exercises for MEAN/MEARN certification

*********************************************************************************
Description
*********************************************************************************
This is a cart page API made using React.
This API allows a user to add products with a certain amout of stock to the cart.
It takes in consideration the following cenarios:

- Scenario: 1. Webshop initial load
GIVEN a store
WHEN I enter it for the first time or if I refresh the page
THEN  I can see (as presented in the mock below)

store title
cart icon
0 as the number of items that exist in my cart
"Items" string
3 products each with the following: a name, description, image, stock quantity (with the green indication that has high availability) and increase and decrease buttons

- Scenario: 2. Add products to cart
GIVEN that there is still stock for a given product
WHEN I click in the + button of a that product
THEN  number of items in the cart is increased
THEN  number of available stock for that product is decreased



- Scenario: 3. Remove products from cart
GIVEN that a given product has been added to the cart
WHEN I click in the - button of a that product
THEN  number of items in the cart is decreased
THEN  number of available stock for that product is increased



- Scenario: 4. Stock Level Info Display
GIVEN that I have a product displayed with a given stock level
WHEN the stock level is  >= 16
THEN  stock color indicator should be green
WHEN the stock level is 6 <= 15
THEN  stock color indicator should be yellow
WHEN the stock level is  1 <= 5 
THEN  stock color indicator should be orange
WHEN the stock level is  0 == 0  
THEN  stock color indicator should be red
THEN it should not be possible to add more of this product to the cart

*********************************************************************************
Requirements
*********************************************************************************
To use this API youll need to make sure the port 3000 is free

*********************************************************************************
How to install
*********************************************************************************
1- Open a command window
2- On the command window go to the root of the folder
3- Run the command "npm install" to install the dependencies
4- Run the command "npm start" to start the API

*********************************************************************************
How to use:
*********************************************************************************
On "localhost:3000"
 
 1- Click on the buttons + to add products to the cart
 2- Click on the buttons - to remove products to the cart

*********************************************************************************
Thank You
*********************************************************************************
