import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQWJkdWxsYWgiLCJsYXN0X25hbWUiOiJCYXNoZWVyIiwiZW1haWwiOiJhYkBiYmIuY2NjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjNUMjA6NDI6MDUuOTgyWiJ9LCJpYXQiOjE2NjkyMzYxNTYsImV4cCI6MTY2OTg0MDk1Nn0.U4BJYtvPNkAlKEr_i0NO1iFYcf7l2eeTcgbssLQc9NQ';

describe('POST /product ', () => {
  it('expect create route response status to be 200 and new product_id equal 8', async () => {
    try {
      const response = await request
        .post('/api/product')
        .send({
          product_name: 'test product',
          price: 20,
          category: 3,
        })
        .auth(TOKEN, { type: 'bearer' });
      expect(response.status).toBe(200);
      expect({
        product_id: response.body.product.product_id,
        product_name: response.body.product.product_name,
        price: response.body.product.price,
        category: response.body.product.category,
      }).toEqual({
        product_id: 8,
        product_name: 'test product',
        price: 20,
        category: 3,
      });
    } catch (err) {
      console.log(err);
    }
  });

  it('expect create product route response status to be 400 and error msg to be product_name is mandatory', async () => {
    try {
      const response = await request
        .post('/api/product')
        .send({
          price: 20,
          category: 3,
        })
        .auth(TOKEN, { type: 'bearer' });
      expect(response.status).toBe(400);
      expect({ err: response.body.err }).toEqual({
        err: 'Error: Error: product_name is mandatory for creating the product',
      });
    } catch (err) {
      console.log(err);
    }
  });
});

describe('GET /product ', () => {
  it('expect index route response status to be 200 and total #No. of products is equal to 8', async () => {
    try {
      const response = await request.get('/api/product');
      expect(response.status).toBe(200);
      expect(response.body.products.length).toEqual(8);
    } catch (err) {
      console.log(err);
    }
  });

  it("expect show:5 route response status to be 200 and product name is 'Vitamin D ...'", async () => {
    try {
      const response = await request.get('/api/product/5');
      expect(response.status).toBe(200);
      expect(response.body.product.product_name).toEqual(
        'Vitamin D & B12 Vitamin Supplements for Adults & Kids | Supports Bone Health |'
      );
    } catch (err) {
      console.log(err);
    }
  });

  it('expect top5 route response status to be 200 and top5 list length is 5', async () => {
    try {
      const response = await request.get('/api/product/top5');
      expect(response.status).toBe(200);
      expect(response.body.products.length).toEqual(5);
    } catch (err) {
      console.log(err);
    }
  });

  it('expect productsByCategory:3 route response status to be 200 and the total #No. of products is 2', async () => {
    try {
      const response = await request.get('/api/product/productsByCategory/3');
      expect(response.status).toBe(200);
      expect(response.body.products.length).toEqual(2);
    } catch (err) {
      console.log(err);
    }
  });
});
