const ROUTE_NAME = 'video';
const METHOD = 'post';
const PATH = '/api/video';
const CONTROLLER = require(`../../controllers/${ROUTE_NAME}/${METHOD}.controller`);

const { pluginName } = require('../../util');

module.exports = {
  name: pluginName(ROUTE_NAME, METHOD, 'route'),
  version: '1.0.0',
  register(server) {
    server.route({
      method: METHOD.toUpperCase(),
      path: PATH,
      handler: (r, h) => CONTROLLER(r, h, server),
    });
  },
};
