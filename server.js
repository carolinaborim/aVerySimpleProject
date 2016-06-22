'use strict';
var add = require('./src/add')
var subtract = require('./src/subtract')

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});

server.route({
  method: 'GET',
  path:'/add/{num1}/{num2}', 
  handler: function (request, reply) {
    var first = parseInt(request.params.num1);
    var second = parseInt(request.params.num2);
    return reply(add(first, second));
  }
});

server.route({
  method: 'GET',
  path:'/subtract/{num1}/{num2}', 
  handler: function (request, reply) {
    var first = parseInt(request.params.num1);
    var second = parseInt(request.params.num2);
    return reply(subtract(first, second));
  }
});

  server.start((err) => {

    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
