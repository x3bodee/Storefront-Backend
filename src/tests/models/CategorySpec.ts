import { CategoryModel } from '../../models/Category.model';

const category = new CategoryModel();

describe('Category Model', () => {
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
    const result = await category.create('Test Category');
    expect({ category_id: 8, category_name: result.category_name }).toEqual({
      category_id: 8,
      category_name: 'Test Category',
    });
  });

  it('index method should display all category', async () => {
    const result = await category.index();
    // this map only to remove the crated_at because it's not fixed date
    const result2 = result.map((e) => {
      return { category_id: e.category_id, category_name: e.category_name };
    });
    expect(result2).toEqual([
      { category_id: 1, category_name: 'Entertainment' },
      { category_id: 2, category_name: 'Beauty' },
      { category_id: 3, category_name: 'Sport' },
      { category_id: 4, category_name: 'Books' },
      { category_id: 5, category_name: 'Health' },
      { category_id: 6, category_name: 'Electronics' },
      { category_id: 7, category_name: 'Toys' },
      { category_id: 8, category_name: 'Test Category' },
    ]);
  });

  it('show method should display one specific category id = 1', async () => {
    const result = await category.show(1);
    // this obj only to remove the crated_at because it's not a fixed date
    expect({
      category_id: result.category_id,
      category_name: result.category_name,
    }).toEqual({ category_id: 1, category_name: 'Entertainment' });
  });
});
