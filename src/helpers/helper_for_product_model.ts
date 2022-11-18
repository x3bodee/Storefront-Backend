import { Product } from "../models/Product.model";

function convert_ids_to_sql_list(list:[product_id:number,quantity:number][]|undefined):number[]{
    
    if (list === undefined) throw new Error(`Error: the list of peoducts is wrong!!`);

    const l = list?.map(e=> e[0])
    return l;
}

function check_if_product_is_missing (product_list:Product[], converted_list:string):boolean{
    console.log(product_list);
    console.log(converted_list);
    return false;
}

function check_product_list(products:Product[], data_list:number[]):boolean{
        console.log(products, data_list);
    let flag:boolean = true;
    data_list.forEach((e,i)=>{
        console.log(products.some((ele=> ele.product_id === e)))
      if( products.some((ele=> ele.product_id === e)) ) ''
      else flag=false;
    })
    
    
    return flag;
  }

export  { convert_ids_to_sql_list, check_if_product_is_missing, check_product_list };