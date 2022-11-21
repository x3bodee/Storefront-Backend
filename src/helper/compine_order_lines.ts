import { CreatedOrder,Order } from '../models/Order.model';

function getIndex (orders:Order[],id:number):number{
    let result:number = -1;
    if(!orders.length) return result;
    
    orders.forEach((e,i)=>{
        if(e.order_id === id) result= i;
    })
    return result;
}

export  function compine_order_lines_after(list:CreatedOrder[]):Order[]{
    
    let orders: Order[] = [];
    if(!list.length) return orders;

    list.forEach((e)=>{
        let index = getIndex(orders,e.order_id);
        if(index == -1){
            orders.push({
                        order_id:e.order_id,
                        user_id:e.user_id ,
                        status:e.status,
                        created_at:e.created_at,
                        products_data_list:[ 
                                {
                                    product_name: e.product_name, 
                                    category_name: e.category_name, 
                                    price: e.price, 
                                    quantity: e.product_quantity, 
                                    product_id: e.product_id, 
                                    category_id: e.category_id
                                }]
                        })
        }else{
            orders[index].products_data_list?.push(
                {
                    product_name: e.product_name, 
                    category_name: e.category_name, 
                    price: e.price, 
                    quantity: e.product_quantity, 
                    product_id: e.product_id, 
                    category_id: e.category_id
                });
        }// end of the else
    });
    
    return orders;
}