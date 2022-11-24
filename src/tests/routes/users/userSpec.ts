import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQWJkdWxsYWgiLCJsYXN0X25hbWUiOiJCYXNoZWVyIiwiZW1haWwiOiJhYkBiYmIuY2NjIiwiY3JlYXRlZF9hdCI6IjIwMjItMTEtMjNUMjA6NDI6MDUuOTgyWiJ9LCJpYXQiOjE2NjkyMzYxNTYsImV4cCI6MTY2OTg0MDk1Nn0.U4BJYtvPNkAlKEr_i0NO1iFYcf7l2eeTcgbssLQc9NQ';

describe('POST /user ', () => {
    it('expect create user (signup) route response status to be 200 and msg to equal Done', async () => {
      try {
        const response = await request.post('/api/user')
        .send({
            first_name:"test product",
            last_name:20,
            password:'1234',
            email:'abcd@poi.co'
        })
        expect(response.status).toBe(200);
        expect(response.body.msg)
        .toEqual('Done');
      } catch (err) {
        console.log(err);
      }
    });

    it('expect login user route (signin) response status to be 200 and token to be truthy', async () => {
        try {
          const response = await request.post('/api/user/signin')
          .send({
            email:'abcd@poi.co',
            password:'1234'
          })
          expect(response.status).toBe(200);
          expect(response.body.token)
          .toBeTruthy();
        } catch (err) {
          console.log(err);
        }
    });
});


describe('GET /user ', () => {
    it('expect index route response status to be 200 and total #No. of users is equal to 7', async () => {
        try {
          const response = await request.get('/api/user')
          .auth(TOKEN, {type:'bearer'} );
          expect(response.status).toBe(200);
          expect(response.body.users.length).toEqual(7);
        } catch (err) {
            console.log(err);
          }
        });

        it("expect show:5 route response status to be 200 and user first_name equal 'Adwa'", async () => {
            try {
              const response = await request.get('/api/user/5')
              .auth(TOKEN, {type:'bearer'} );
              expect(response.status).toBe(200);
              expect(response.body.user.first_name).toEqual("Adwa");
            } catch (err) {
                console.log(err);
              }
        });
});


