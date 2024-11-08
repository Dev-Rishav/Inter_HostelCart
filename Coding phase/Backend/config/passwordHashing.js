const bcrypt = require('bcrypt');
const saltRounds = 10; 

const plainTextPassword = 'I am chakraborty'; 

bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }
    console.log('Hashed password:', hash);
});