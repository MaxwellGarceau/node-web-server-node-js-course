const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  const res = utils.square(5);

  expect(res).toBe(25).toBeA('number');
  // if (res !== 25) {
  //   throw new Error(`Expected 25, but got ${res}.`);
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (sum) => {
    expect(sum).toBe(25).toBeA('number');
  });
  done();
});

it('should verify first and last names are set', () => {
  const user = { location: 'Nashville', age: 26 };
  const res = utils.setName(user, 'Max Garceau');
  
  expect(res).toInclude({
    firstName: 'Max',
    lastName: 'Garceau'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Max'}).toNotEqual({name: 'max'});
//   // expect([2,3,4,5]).toExclude(1);
//   // expect({
//   //   name: 'Max',
//   //   age: 26,
//   //   location: 'Nashville'
//   // }).toExclude({
//   //   age: 23
//   // });

// });
