const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
  it('responds with GET message', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toBe('GET');
  });
});

describe('GET /users/:id', () => {
  it('responds with GET ID message', async () => {
    const response = await request(app).get('/users/123');
    expect(response.status).toBe(200);
    expect(response.text).toBe('GET ID');
  });
});
