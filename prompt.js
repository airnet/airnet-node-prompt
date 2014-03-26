airnet = require('airnet');

node = new airnet(3500, {file: 'data.airnet'});
node.start();
node.connect("54.186.21.235:3500");
