const expect = require('expect');

const utils = require('./utils');

// it('should add two numbers', () => {
//   var res = utils.add(33, 11);
//
//   // if (res !== 44) {
//   //   throw new Error(`Expected 44, but got ${res}.`);
//   // }
//   expect(res).toBe(44).toBeA('number');
// });
//
// it('should async add two numbers', (done) => {
//   utils.asyncAdd(4, 3, (sum) => {
//     expect(sum).toBe(7).toBeA('number');
//     done();
//   });
// });
//
// it('should square a number', () => {
//   var res = utils.square(4);
//
//   // if (res !== 16) {
//   //   throw new Error(`Expected 16, but got ${res}.`);
//   // }
//   expect(res).toBe(16).toBeA('number');
// });
//
// it('should async square a number', (done) => {
//   utils.asyncSquare(3, (multiplication) => {
//     expect(multiplication).toBe(11).toBeA('number');
//     done();
//   })
// });
//
// it('should expect some value', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'richard'}).toNotEqual({name: 'Richard'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Richard',
//     age: 28,
//     location: 'Australia'
//   }).toInclude({
//     age: 28
//   })
// });
//
// it('should verify first and last names are set', () => {
//   var user = {firstName: '', lastName: ''};
//   var res = utils.setName(user, "Richard Zhang");
//
//   expect(res).toInclude({
//     firstName: 'Richard',
//     lastName: 'Zhang'
//   }).toBeA('object');
//
// })
