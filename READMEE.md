# Storefront Backend Project

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- Top 5 most popular products 
- Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- signup N[token required]
- signin N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- Completed Orders by user (args: user id)[token required]

#### Categores
- Index [token required]
- Create [token required]


## Data Shapes
#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

#### Orders
- category_id -> number
- category_name -> string
- created_at ->Date