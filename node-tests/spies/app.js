let db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
  // Check if email exists
  db.saveUser({ email, password });
  // Save user to data base
  // Send welcome email
};
