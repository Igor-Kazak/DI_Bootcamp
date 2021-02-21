class User {
  constructor(name, address, language_spoken) {
    this.name = name;
    this.address = address;
    this.language_spoken = language_spoken;
  }
}

exports.fakeUsers = (name, address, language) => {
  var faker = require('faker');
  var users = [];
  users.push(new User(name, address, language));
  for (let i = 0; i < 10; i++) {
    users.push(new User(faker.name.findName(), faker.address.streetAddress(), faker.address.country()));
  }
  return users;
}
