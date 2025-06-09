const fs = require('fs');
const app = require('./app');
const request = require('supertest');

(async () => {
    const res = await request(app).get('/');
    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/index.html', res.text, 'utf8');
    console.log('Static files built successfully in the public directory.');
})();