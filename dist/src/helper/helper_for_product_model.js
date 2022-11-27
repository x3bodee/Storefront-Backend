"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_product_list = exports.check_if_product_is_missing = exports.convert_ids_to_sql_list = void 0;
function convert_ids_to_sql_list(list) {
    if (list === undefined)
        throw new Error("Error: the list of peoducts is wrong!!");
    var l = list === null || list === void 0 ? void 0 : list.map(function (e) { return e[0]; });
    return l;
}
exports.convert_ids_to_sql_list = convert_ids_to_sql_list;
function check_if_product_is_missing(product_list, converted_list) {
    console.log(product_list);
    console.log(converted_list);
    return false;
}
exports.check_if_product_is_missing = check_if_product_is_missing;
function check_product_list(products, data_list) {
    console.log(products, data_list);
    var flag = true;
    data_list.forEach(function (e) {
        console.log(products.some(function (ele) { return ele.product_id === e; }));
        if (products.some(function (ele) { return ele.product_id === e; }))
            '';
        else
            flag = false;
    });
    return flag;
}
exports.check_product_list = check_product_list;
