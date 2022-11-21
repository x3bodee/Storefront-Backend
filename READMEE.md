# Storefront Backend Project

## API Endpoints

``` 

in this case there was no token available for the request where token is required
Unsuccessful: {
    "status": false,
    "msg": "Token is required",
    "err": "ERROR: Token is required"
}

``` 
#### Products
- [X] Index : [GET]
``` 
this end point will not accepte any args and it's going to return products[] as an array.
URL : 'http://localhost:PORT/api/product'
Success: {
    "status": true,
    "msg": "Done",
    "products": [list of products]
} 

ERROR: {
    "status": false,
    "msg": "Error",
    "err": "Error: error: relation \"product\" does not exist"
}
```

- [X] Show : [GET]
```
this end point will  accepte one arg (product_id) and it's going to return this product data if it's available.
*** product_id is mandatory ***

URL : 'http://localhost:PORT/api/product/5'
Success: {
    "status": true,
    "msg": "Done",
    "product": {product object}
}

in thiss case I used non-exist product for ex:50
Unsuccessful: {
    "status": true,
    "msg": "There is no such a product"
}
```

- [X] Create [token required]: [POST]
```
this end point will accepte three arg via post method (product_name, price and category) and it's going to return the new created product data if it's success.
*** product_name, price and category is mandatory fields ***

URL : 'http://localhost:PORT/api/product'
Success: {
    "status": true,
    "msg": "Done",
    "product": {the new product object}
}

in thiss case I did not send product_name
Unsuccessful: {
    "status": false,
    "msg": "Error",
    "err": "Error: Error: product_name is mandatory for creating the product"
}

```
- [X] Top 5 most popular products : [GET]
```
URL : 'http://localhost:PORT/api/product/top5'
Success: {
    "status": true,
    "msg": "Done",
    "product": [list of top5 products]
}

```
- [X] Products by category (args: product category) : [GET]
```
*** category_id is mandatory ***

URL : 'http://localhost:PORT/api/product/productsByCategory/5'
Success: {
    "status": true,
    "msg": "Done",
    "product": [list of products under category 5]
}

in thiss case I used non-exist category for ex:30
Unsuccessful: {
    "status": true,
    "msg": "There is no products available under this category"
}
```

#### Users
- [X] Index [token required] : [GET]
```

this end point will not accepte any args and it's going to return products[] as an array.
URL : 'http://localhost:PORT/api/user'
Success: {
    "status": true,
    "msg": "Done",
    "users": [ list of users without the password field ]
} 

in case there is no users yet.
Success: {
    "status": true,
    "msg": "there is no registered users yet"
}

```
- [X] Show [token required] : [GET]
```
this end point will  accepte one arg (user_id) and it's going to return this user data if it's available.
*** user_id is mandatory ***

URL : 'http://localhost:PORT/api/user/5'
Success: {
    "status": true,
    "msg": "Done",
    "user": {user object without password}
}

in thiss case I used non-exist user for ex:50
Unsuccessful: {
    "status": true,
    "msg": "there is no such a user"
}
```
- [X] signup (return token): [POST]
```
this end point will accepte four arg via post method (first_name, last_name, email and passowrd) and it's going to return a token if it's success.
*** first_name, last_name, email and passowrd is mandatory ***

URL : 'http://localhost:PORT/api/user'
Success: {
    "status": true,
    "msg": "Done",
    "token": "eyJhbGciOsdvdsnR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlsdsdfsdaXJzdF9uYW1lIjoiMTIzNCIsImxhc3RfbmFtZSI6IjEyMzQiLCJlbWFpbCI6ImFiY0BiYmJ0LmNjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjFUwefwe#%f556Tk6NTguMTk2WiJ9LCJpYXQiOjE2NjkwNjE5OTgsImV4cCI6MTY2OTY2Njc5OH0.hRyRd9lwGh7gh_giVki3fgweyogYQBR2qtyVEGQ7WYo"
}

in thiss case I did not send email for
Unsuccessful: {
    "status": false,
    "msg": "Error",
    "err": "Error: Error: email is mandatory for creating the user"
}
```
- [X] signin (return token): [POST]
```
this end point will accepte two arg via post method (email and passowrd) and it's going to return a token if it's loged in successfully.
*** email and passowrd is mandatory ***

URL : 'http://localhost:PORT/api/user/signin'
Success: {
    "status": true,
    "msg": "Done",
    "token": "eyJhbGciOsdvdsnR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlsdsdfsdaXJzdF9uYW1lIjoiMTIzNCIsImxhc3RfbmFtZSI6IjEyMzQiLCJlbWFpbCI6ImFiY0BiYmJ0LmNjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjFUwefwe#%f556Tk6NTguMTk2WiJ9LCJpYXQiOjE2NjkwNjE5OTgsImV4cCI6MTY2OTY2Njc5OH0.hRyRd9lwGh7gh_giVki3fgweyogYQBR2qtyVEGQ7WYo"
}

in thiss case I did not send email for
Unsuccessful: {
    "status": false,
    "msg": "Error",
    "err": "Error: Error: email is mandatory for login the user"
}
```

#### Orders
- [X] Create Order [token required] : [POST]
```
this end point will accepte two arg via post method (user_id and product_list['product_id','quantity']) and it's going to return a an order if it's was created successfully.
*** user_id and product_list['product_id','quantity'] is mandatory ***

URL : 'http://localhost:PORT/api/order'
Success: {
    "status": true,
    "msg": "Done",
    "order_id": id
}

in thiss case I will use non-existing product for ex: [[1,1],[3,2],[20,1]]
Unsuccessful: {
    "status": false,
    "msg": "Error",
    "err": "Error: Error: Error: there is a wrong product in the list!!"
}

```
- [X] Current Order by user (args: user id)[token required] : [GET]
```
this end point will not accepte any args (it's going to take the args from the token dirictly) and it's going to return active orders[] as an array for the user in the token.
URL : 'http://localhost:PORT/api/order/currentOrdersByUser'
Success: {
    "status": true,
    "msg": "Done",
    "result": [ list of orders where the status is active, each order with it's products ]
} 

in case there is no orders for this user yet.
Success: {
    "status": true,
    "msg": "there is no pending orders for this user"
}
```
- [X] Completed Orders by user (args: user id)[token required] : [GET]
```
this end point will not accepte any args (it's going to take the args from the token dirictly) and it's going to return completed orders[] as an array for the user in the token.
URL : 'http://localhost:PORT/api/order/completedOrdersByUser'
Success: {
    "status": true,
    "msg": "Done",
    "result": [ list of orders where the status is completed, each order with it's products ]
} 

in case there is no orders for this user yet.
Success: {
    "status": true,
    "msg": "there is no completed orders for this user"
}
```

#### Categores
- [X] Index : [GET]
```
this end point will not accepte any args and it's going to return categores[] as an array.
URL : 'http://localhost:PORT/api/category'
Success: {
    "status": true,
    "msg": "Done",
    "categores": [ list of categores ]
} 

in case there is no category yet.
Success: {
    "status": true,
     "msg": "there is no data"
}

```
- [X] Show : [GET]
```
this end point will accepte one arg (category_id) and it's going to return categores[] as an array.

*** category_id is mandatory ***

URL : 'http://localhost:PORT/api/category/5'
Success: {
    "status": true,
    "msg": "Done",
    "category": { category object }
} 

in case the category is wrong for ex: 50
Success: {
    "status": true,
    "msg": "there is no such a category"
}
```
- [X] Create [token required] : [POST]
```
this end point will accepte one arg via post method (category_name) and it's going to return a a category if it's was created successfully.
*** category_name is mandatory ***

URL : 'http://localhost:PORT/api/category'
Success: {
    "status": true,
    "msg": "Done",
    "category": { category object }
}

in thiss case I will use non-existing product for ex: used category (Entertainment)
Unsuccessful: {
    "status": false,
    "msg": "Error",
    "err": "Error: Error: Error: This record alredy exist!!"
}
```


## Data Shapes
#### Product
- product_id
- product_name
- price
- category
- category_name? : in case of returning the product I will join the category id to it's description.
- created_at? : crated by defulat at creation time.
- count? : in case of top5 to return how many times it's was orderd.

#### User
- user_id
- firstName
- lastName
- email : UNIQE so you will be signing in by the email.
- password
- created_at? : crated by defulat at creation time.

#### Orders
there is two types for the order part: 
because of the M:N relation between the order and the product I created a table to split this M:N relationship.
so I am using CreatedOrder type to store eatch product belong to whiech order and the status of this line.
CreatedOrder type represent the lines of the order where the order is the header part and the CreatedOrder is the line part where i store the product details of each product ordered in this order with the quantity , price and category of the product.


### CreatedOrder
- order_id
- status ( active : false or complete : true )
- user_id
- created_at : crated by defulat at creation time.
- product_id
- product_name
- product_quantity
- price
- category_id
- category_name

so basiclay, I using CreatedOrder to store the order and the product in the same record then before returning the result to the user I will reorder the order shape to match order_id, user_id, products_data_list(where I will store the info of each product in this order).


### Order
- order_id?: number;
- user_id: number;
- products_list? :[product_id:number,quantity:number][] // NOTE: this how i will receive the order from the user.
- products_data_list? :[{
    product_name, category_name, price,
    quantity, product_id, category_id
    }] // NOTE: this where I will put the products data of the order before I return the result.
- status? : by default the order status will be false. (whiche is equalt to active).
- created_at? : crated by defulat at creation time.

#### Category
- category_id 
- category_name
- created_at : crated by defulat at creation time.

this will represent the table where I will breake the M:N relation between Order and Product tables.
#### order_product
- order_id
- product_id
- quantity
- created_at
