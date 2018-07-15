const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (request, response) => {
  response.send([
    {
      name: 'Max',
      age: 26
    },
    {
      name: 'Andre',
      age: 24
    }
  ]);
});

app.listen(3001);

module.exports.app = app;

// }, {

// }, {
//   name: 'Rafael',
//   age: 31
// }, {
//   name: 'Keenan',
//   age: 31
// }, {
//   name: 'Fawn',
//   age: 30
// }, {
//   name: 'Kyle',
//   age: 26
// }
