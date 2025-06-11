const bcrypt = require('bcryptjs');
const fs = require('fs');

const password = 'mySecretPassword123';

// Generate hash
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;

  // Save to file
  fs.writeFileSync('password.txt', hash);
  console.log('Password hashed and saved:', hash);
});
