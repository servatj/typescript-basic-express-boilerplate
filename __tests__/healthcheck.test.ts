import request from 'supertest';
import app from '../src/index';

describe('Health Check Endpoint', () => {
  it('should return OK', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});
