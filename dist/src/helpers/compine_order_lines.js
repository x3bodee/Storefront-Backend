"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compine_order_lines_after = void 0;
function getIndex(orders, id) {
    if (!orders.length)
        return -1;
    orders.forEach(function (e, i) {
        if (e.order_id === id)
            return i;
    });
    return -1;
}
function compine_order_lines_after(list) {
    var orders = [];
    if (!list.length)
        return orders;
    list.forEach(function (e) {
        var _a;
        var index = getIndex(orders, e.order_id);
        if (index == -1) {
            orders.push({
                order_id: e.order_id,
                user_id: e.user_id,
                status: e.status,
                created_at: e.created_at,
                products_data_list: [
                    {
                        product_name: e.product_name,
                        category_name: e.category_name,
                        price: e.price,
                        quantity: e.product_quantity,
                        product_id: e.product_id,
                        category_id: e.category_id
                    }
                ]
            });
        }
        else {
            (_a = orders[index].products_data_list) === null || _a === void 0 ? void 0 : _a.push({
                product_name: e.product_name,
                category_name: e.category_name,
                price: e.price,
                quantity: e.product_quantity,
                product_id: e.product_id,
                category_id: e.category_id
            });
        } // end of the else
    });
    return orders;
}
exports.compine_order_lines_after = compine_order_lines_after;
