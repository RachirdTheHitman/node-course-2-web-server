module.exports.add = (a, b) => {
  return a + b;
};

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000); //attention: if you test your func more than 2 sec, mocha gonna assume it's not the behaviour you want
};

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(this.square(x));
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
