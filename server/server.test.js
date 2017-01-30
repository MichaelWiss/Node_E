const request = require('supertest');
const expect = require('expect');




var app = require('./server').app;

describe('Server', ()=> {
	describe('#Get', ()=> {

it('should return hello world response', (done) => {
	request(app)
	.get('/')
	.expect(404)
	.expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
	})
	.end(done);
});
});

describe('#Users', ()=> {

it('should return user object', (done) => {
	request(app)
	.get('/users')
	.expect(404)
	.expect((res) => {
	  expect(res.body).toInclude({
		name: 'Mike',
		age: 45,
		name: 'Andrew',
		age: 25
	});
})

	.end(done);
});
});
});
