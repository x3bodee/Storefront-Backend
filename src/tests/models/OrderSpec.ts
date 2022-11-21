import {  OrderModel } from "../../models/Order.model";

const order = new OrderModel();

describe('Order Model',()=>{

    it('should have an create method', () => {
        expect(order.create).toBeDefined();
    });
    
    it('should have an show method', () => {
        expect(order.completedOrdersByUser).toBeDefined();
    });

    it('should have an index method', () => {
        expect(order.currentOrdersByUser).toBeDefined();
    });

    it('create method should create new order', async () => {
        const result = await order.create(1,[[1,1],[3,2],[4,1]]);
        expect({ order_id:result.order_id})
                .toEqual({ order_id:7 });
    });

    it('currentOrdersByUser method should display all unfinished orders for this user(1)', async () => {
        let result = await order.currentOrdersByUser(1);
        expect(result[0].status)
                .toEqual(false);
    });
    
    it('completedOrdersByUser method should display all completed orders for this user(1)', async () => {
        let result = await order.completedOrdersByUser(1);
        expect(result[0].status)
                .toEqual(true);
    });


});