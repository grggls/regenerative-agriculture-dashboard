import request from 'supertest';
import app from '../app';

describe('App Endpoints', () => {
    it('should return a welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Welcome to the Regenerative Agriculture Dashboard API');
    });
});