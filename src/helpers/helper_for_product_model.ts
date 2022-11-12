import { Product } from "../models/Product.model";

function convert_ids_to_sql_list(list:[product_id:number,quantity:number][]|undefined):string{
    
    if (list === undefined) throw new Error(`Error: the list of peoducts is wrong!!`);

    const l = list?.map(e=> e[0]);
    let s = '(';
    for (let i = 0; i < l.length; i++) {
        if(i==0)s+='$'+(i+1);
        else{
            if (i+1 == l.length) s+=','+(i+1)+')';
            else s+=','+(i+1);
        }
    }
    return  s;
}

function check_if_product_is_missing (product_list:Product[], converted_list:string):boolean{
    console.log(product_list);
    console.log(converted_list);
    return false;
}

export  { convert_ids_to_sql_list, check_if_product_is_missing };