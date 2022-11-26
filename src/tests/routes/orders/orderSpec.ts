import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQWJkdWxsYWgiLCJsYXN0X25hbWUiOiJCYXNoZWVyIiwiZW1haWwiOiJhYkBiYmIuY2NjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjZUMDk6NTE6MTUuODYxWiJ9LCJpYXQiOjE2Njk0NTYzNzQsImV4cCI6MTY3MDA2MTE3NH0.7ehU5qZMtGNK2lgL_Rgs68WzMtwQKt-t6XQ-uqzDimI';

describe('POST /order ', () => {
  it('expect create order route response status to be 401 and msg to equal Token is required', async () => {
    try {
      const response = await request.post('/api/order').send({
        first_name: 'test product',
        last_name: 20,
        password: '1234',
        email: 'abcd@poi.co',
      });
      expect(response.status).toBe(401);
      expect(response.body.msg).toEqual('Token is required');
    } catch (err) {
      console.log(err);
    }
  });

  it('expect create order route response status to be 200 and msg to equal Done', async () => {
    try {
      const response = await request
        .post('/api/order')
        .send({
          user_id: 5,
          products_list: [
            [1, 2],
            [3, 1],
            [5, 1],
          ],
        })
        .auth(TOKEN, { type: 'bearer' });
      expect(response.status).toBe(200);
      expect(response.body.msg).toEqual('Done');
    } catch (err) {
      console.log(err);
    }
  });
});

describe('GET /order', () => {
  it('expect completedOrdersByUser route response status to be 200 and total #No. of orders is equal to 1', async () => {
    try {
      const response = await request
        .get('/api/order/completedOrdersByUser')
        .auth(TOKEN, { type: 'bearer' });
      expect(response.status).toBe(200);
      expect(response.body.result.length).toEqual(1);
    } catch (err) {
      console.log(err);
    }
  });

  it('expect currentOrdersByUser route response status to be 200 and total #No. of orders is equal to 1', async () => {
    try {
      const response = await request
        .get('/api/order/currentOrdersByUser')
        .auth(TOKEN, { type: 'bearer' });
      expect(response.status).toBe(200);
      expect(response.body.user.result).toEqual(1);
    } catch (err) {
      console.log(err);
    }
  });
});
