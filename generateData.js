var faker = require('faker');

var database = { users: [] };

for (var i=1; i<=10; i++) {
  database.users.push({
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
     lastName:faker.name.lastName(),
    email:faker.internet.email(),
  password:faker.internet.password() 
  });
}

console.log(JSON.stringify(database));