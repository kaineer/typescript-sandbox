import g = require('./g');

/** Keep this */
var f = function (name: string) {
  g();
  console.log('Hello, ' + name);
};

export = f;