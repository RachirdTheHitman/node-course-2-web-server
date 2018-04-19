const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hell world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect({
      error: 'Page not found.'
    })
    .end(done);
});
