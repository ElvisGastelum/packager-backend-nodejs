'use strict';

const Hapi = require('@hapi/hapi');
const { port, host, routes, socketIo } = require('./config');

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: host,
    routes: {
      cors: true,
    },
  });

  const io = require('socket.io')(server.listener, {
    serveClient: false,
    log: true,
  });

  server.decorate('server', 'io', io);

  await server.register(socketIo);

  await server.register(routes);

  await server.start();

  return server.info.uri;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = {
  init,
};
