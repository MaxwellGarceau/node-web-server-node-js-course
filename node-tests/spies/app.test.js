const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Max', 26);
    expect(spy).toHaveBeenCalledWith('Max', 26);
  });

  it('should call saveUser with user object', () => {
    const email = 'maxgarceau@comcast.net';
    const password = '123abc';

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
