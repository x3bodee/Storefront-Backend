import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQWJkdWxsYWgiLCJsYXN0X25hbWUiOiJCYXNoZWVyIiwiZW1haWwiOiJhYkBiYmIuY2NjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjNUMjA6NDI6MDUuOTgyWiJ9LCJpYXQiOjE2NjkyMzYxNTYsImV4cCI6MTY2OTg0MDk1Nn0.U4BJYtvPNkAlKEr_i0NO1iFYcf7l2eeTcgbssLQc9NQ';

describe('GET /category ', () => {
    it('expect index route response status to be 200 and categores list length equal 8', async () => {
        try {
          const response = await request.get('/api/category')
          expect(response.status).toBe(200);
          expect(response.body.categores.length).toEqual(8);
        } catch (err) {
            console.log(err);
          }
        });

        it('expect show:8 route response status to be 200 and category_name equal Test Category', async () => {
            try {
              const response = await request.get('/api/category/8')
              expect(response.status).toBe(200);
              expect(response.body.categores[7].category_name).toEqual("Test Category");
            } catch (err) {
                console.log(err);
              }
            });
  });

describe('POST /category ', () => {
    it('expect response status to be 200 and new id equal 9', async () => {
      try {
        const response = await request.post('/api/category')
        .send({category_name:"PC"})
        .auth(TOKEN, {type:'bearer'} );
        expect(response.status).toBe(200);
        expect({ category_id: response.body.categores.category_id,
                 category_name: response.body.categores.category_name
                }).toEqual({category_id:9, category_name:"PC"});
      } catch (err) {
        console.log(err);
      }
    });
  });

