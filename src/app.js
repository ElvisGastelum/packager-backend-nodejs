'use strict';

const Hapi = require('@hapi/hapi');
const { port, host, routes, webRtc } = require('./config');

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: host,
  });

  await server.register(webRtc);

  // await server.register(socketIo);

  await server.register(routes);

  await server.register(require('hapi-cors'));

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
