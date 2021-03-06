const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=> {

	describe('#add', () => {
		it('should add two numbers', ()=> {
  var res = utils.add(33,11);

expect(res).toBe(44).toBeA('number');

//   if (res !== 44) {
//   throw new Error(`Expected 44, but got ${res}.`)
// }
});

	})
	

it('should async add two numbers', (done) => {
   utils.asyncAdd(4, 3, (sum) => {
     expect(sum).toBe(7).toBeA('number');
     done();
   });
});



it('should produce the square of the number', ()=> {
	var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});

it('should async square a number', (done)=> {
	utils.asyncSquare(5, (product) => {
		expect(product).toBe(25).toBeA('number');
		done();
	});
  });
});



it('should have two strings', ()=> {
	var user = {location: "Brooklyn", age: 45};
	var res = utils.setName(user, 'Michael Wiss');

	expect(res).toInclude({
		firstName: 'Michael',
		lastName: 'Wiss'
	});
});




// it('should expect some values', ()=>{
//    // expect(12).toNote(12);
//    // expect({name: 'michael'}).toNotEqual({name: 'Michael'});
//    expect([2,3,3]).toExclude(1);
// });

// expect({
// 	name: 'Michael',
// 	age: 45,
// 	location: 'New York'
// }).toInclude({
//    age: 45
// })



