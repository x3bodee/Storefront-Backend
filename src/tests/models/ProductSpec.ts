import { ProductModel } from '../../models/Product.model';

const product = new ProductModel();
describe('Product Model', () => {
  it('should have an create method', () => {
    expect(product.create).toBeDefined();
  });

  it('should have an show method', () => {
    expect(product.show).toBeDefined();
  });

  it('should have an index method', () => {
    expect(product.index).toBeDefined();
  });

  it('should have an productsByCategory method', () => {
    expect(product.productsByCategory).toBeDefined();
  });

  it('should have an top5 method', () => {
    expect(product.top5).toBeDefined();
  });

  it('productsByCategory method should return an array of 1 product under this category:5', async () => {
    const result = await product.productsByCategory(5);
    expect(result.length).toEqual(1);
  });

  it('top5 method should return an array of the top5 products ordered by users', async () => {
    const result = await product.top5();
    expect(result).toEqual([
      {
        product_id: 3,
        product_name:
          'EVS Sports TP199 Knee / Shin Guard, (Black / Hi-Viz Yellow, Large/X-Large)',
        price: 99.99,
        category: 3,
        count: '3',
      },
      {
        product_id: 2,
        product_name:
          'Meaningful Beauty 5-Piece Starter Kit, Gift Set, various color',
        price: 73.2,
        category: 2,
        count: '3',
      },
      {
        product_id: 1,
        product_name:
          'Sunny Days Entertainment Bath Time Sing Along Play Center',
        price: 9.99,
        category: 1,
        count: '3',
      },
      {
        product_id: 6,
        product_name: 'JBL Vibe 200TWS True Wireless Earbuds - Black',
        price: 25.99,
        category: 6,
        count: '2',
      },
      {
        product_id: 5,
        product_name:
          'Vitamin D & B12 Vitamin Supplements for Adults & Kids | Supports Bone Health |',
        price: 10,
        category: 5,
        count: '2',
      },
    ]);
  });
});
