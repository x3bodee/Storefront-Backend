# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

## Data Shapes
#### Product
- product_id :number
- product_name :string
- price :number
- category :number
- category_name? :string : in case of returning the product I will join the category id to it's description.
- created_at? :date : crated by defulat at creation time.
- count? :number : in case of top5 to return how many times it's was orderd.

#### User
- user_id :number
- firstName :string
- lastName :string
- email :string : UNIQE so you will be signing in by the email.
- password :string
- created_at? :date : crated by defulat at creation time.

#### Orders
there is two types for the order part: 
because of the M:N relation between the order and the product I created a table 
to split this M:N relationship.
so I am using CreatedOrder type to store eatch product belong to whiech order and 
the status of this line.
CreatedOrder type represent the lines of the order where the order is the header part 
and the CreatedOrder is the line part where i store the product details of each product 
ordered in this order with the quantity , price and category of the product.


### CreatedOrder
- order_id :number
- status  :boolean ( active : false or complete : true )
- user_id :number
- created_at :date : crated by defulat at creation time.
- product_id :number
- product_name :string
- product_quantity :number
- price :number
- category_id :number
- category_name :string

so basiclay, I using CreatedOrder to store the order and the product in the same record 
then before returning the result to the user I will reorder the order shape to match order_id, user_id, products_data_list(where I will store the info of each product in this order).


### Order
- order_id?: number;
- user_id: number;
- products_list? :[product_id:number,quantity:number][] // NOTE: this how i will receive the order from the user.
- products_data_list? :[{
    product_name, category_name, price,
    quantity, product_id, category_id
    }] // NOTE: this where I will put the products data of the order before I return the result.
- status?:boolean, : by default the order status will be false. (whiche is equalt to active).
- created_at?:Date : crated by defulat at creation time.:number

#### Category
- category_id :number
- category_name:string
- created_at:date : crated by defulat at creation time.

this will represent the table where I will breake the M:N relation between Order and Product tables.
#### order_product
- order_id:number
- product_id:number
- quantity:number
- created_at:date