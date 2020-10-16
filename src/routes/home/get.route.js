const ROUTE_NAME = 'home';
const METHOD = 'get';
const PATH = '/';
const CONTROLLER = require(`../../controllers/${ROUTE_NAME}/${METHOD}.controller`);

const { pluginName } = require('../../util');

module.exports = {
  name: pluginName(ROUTE_NAME, METHOD, 'route'),
  version: '1.0.0',
  register(server) {
    server.route({
      method: METHOD.toUpperCase(),
      path: PATH,
      handler: CONTROLLER,
    });
  },
};
