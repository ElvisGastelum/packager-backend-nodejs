const PLUGIN_NAME = 'web-rtc';

const { pluginName } = require('../../util');
const WebRtcConnectionManager = require('./services/web-rtc-connection-manager');
const { beforeOffer } = require('./web-rtc-before-offer');

module.exports = {
  name: pluginName(PLUGIN_NAME, 'plugin'),
  version: '1.0.0',
  register(server) {
    const connectionManager = WebRtcConnectionManager.create({ beforeOffer });

    server.decorate('server', 'connectionManager', connectionManager);
  },
};
