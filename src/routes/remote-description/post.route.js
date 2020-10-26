const ROUTE_NAME = 'remote-description';
const METHOD = 'post';
const PATH = '/connections/{id}/remote-description';
const CONTROLLER = require(`../../controllers/${ROUTE_NAME}/${METHOD}.controller`);

const { pluginName } = require('../../util');

module.exports = {
  name: pluginName(ROUTE_NAME, METHOD, 'route'),
  version: '1.0.0',
  register(server) {
    server.route({
      method: METHOD.toUpperCase(),
      path: PATH,
      options: {
        handler: (r, h) => CONTROLLER(r, h, server),
      },
    });
  },
};
