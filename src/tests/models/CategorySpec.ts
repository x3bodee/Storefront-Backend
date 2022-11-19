import { Category, CategoryModel } from "../../models/Category.model";

const category = new CategoryModel();

describe('Category Model',()=>{

    it('should have an create method', () => {
        expect(category.create).toBeDefined();
    });
    
    it('should have an show method', () => {
        expect(category.show).toBeDefined();
    });

    it('should have an index method', () => {
        expect(category.index).toBeDefined();
    });

    it('create method should add a category', async () => {
        const result = await category.create("Test Category");
        expect({category_id:result.category_id,
                category_name:result.category_name})
                .toEqual({category_id:8, category_name:"Test Category"});
    });


});