# E-commerce website 

## Description
   This is a Simple Web application that selling products. I allows user to do the folloing things:
   
   1. Users are able to register and login. User information will be stored in to a mysql table.
   2. Users are able to change their username and password.
   3. Users are able to add an item to cart. The items in cart will be saved. Items are still there after user logout and login again.
   4. Users are able to sort product based on it's category, server will only return the products in that category.
   
   This website is not done yet. 
   I want add "check order" which can let users see their placed order in the future. Also, I want to add a review function to let user leave reviews under each items.

## Bugs 

   I didn't find any bugs currently.
  
## Technologies
    Bootstrap, Node.js, Javascript, HTML, CSS, Postman, Mysql, nodemon.
## ERD
![Assignment 4](https://user-images.githubusercontent.com/55290301/168504601-877d0ec9-5358-4313-bc9f-ef95d1dd62c8.png)
 * Customer is used to create user table, used by login, register, edit and delete account fnctions.
 * Product is used to create products table, used by showAll, showByCategory functions.
 * Cart is used to create items table, used by add to cart, check out functions.
 * Order and review should be used to create Review table and order table.
## HOW TO USE IT
---
   1. Open esite file, open terminal inside server folder.
   2. Type npm intall to download all the dependencies.
   3. Type nodemon index.js to run the server.
   4. Open .env file and set the following four variables.
      * MYSQL_USERNAME = Your mysql username
      * MYSQL_PSWD = Your password
      * MYSQL_HOST = localhost
      * MYSQL_DB = your db name
   5. set up three tables. One named "items", one named "carts" and one named "users".
   
Items setting
![item setting](https://user-images.githubusercontent.com/55290301/168502552-59177749-a4c6-4cb3-a23d-059957a69a21.png)

Carts setting
![cart](https://user-images.githubusercontent.com/55290301/168502598-a3da9920-3a85-4e4a-a299-e37fb5165576.png)

User setting
![user](https://user-images.githubusercontent.com/55290301/168502602-284570dc-7987-41d0-b7fd-f6d472feacd2.png)



## WHAT DOES IT LOOK LIKE


Login page
![loginhome](https://user-images.githubusercontent.com/55290301/168497319-41a6d1dd-1981-4814-817c-7197d3040f07.png)
---

Home page
![homepage](https://user-images.githubusercontent.com/55290301/168497211-0c9b1c54-26f2-4317-b8c4-b7f05f753779.png)
---

Register page
![registerpage](https://user-images.githubusercontent.com/55290301/168497367-61db4f6a-6c85-445c-8058-0acd0c3edca6.png)
---

Profile page
![profile](https://user-images.githubusercontent.com/55290301/168497547-09ee8774-a940-47db-8716-dbc0ff7f5986.png)
---

Add to cart
![addtocart](https://user-images.githubusercontent.com/55290301/168497608-c42e69eb-db9a-4756-b942-a520c2e719e5.png)
---

Check out
![checkout](https://user-images.githubusercontent.com/55290301/168497616-2d4738ec-33bd-4de9-a34b-8c1c834ec38a.png)
---

Sort by category
![sort](https://user-images.githubusercontent.com/55290301/168497628-a9043337-6fb8-441d-a414-f7619304ff02.png)
---

