# Storefront Backend Project

## API Endpoints
#### Products
- Index [X]
- Show [X]
- Create [token required] [X]
- Top 5 most popular products  [X]
- Products by category (args: product category) [X]

#### Users
- Index [token required] [X]
- Show [token required] [X]
- signup N[token required] [X]
- signin N[token required] [X]

#### Orders
- Create Order [token required] [X]
- Current Order by user (args: user id)[token required] [X]
- Completed Orders by user (args: user id)[token required] [X]

#### Categores
- [X] Index [X]
- Show [X]
- Create [token required] [X]


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