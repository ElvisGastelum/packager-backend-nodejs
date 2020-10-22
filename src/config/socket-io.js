const PLUGIN_NAME = 'socket-io';

const { pluginName } = require('../util');

const fs = require('fs');

module.exports = {
  name: pluginName(PLUGIN_NAME, 'plugin'),
  version: '1.0.0',
  register(server) {
    const io = require('socket.io')(server.listener, {
      serveClient: false,
      log: true,
    });

    server.decorate('server', 'io', io);

    io.on('connect', function (socket) {
      console.log('client incoming: ', socket.id);
      socket.on('upload-video', (data) => {
        const videoName = data.videoName === '' ? 'sample' : data.videoName;
        fs.writeFile(
          `video-uploads/${videoName}.webm`,
          data.videoBlob,
          function (err) {
            if (err) {
              console.log('error: ', err);
            }
          }
        );
        console.log('video Recivied');
      });
    });

    console.log('SocketIo Connection Started');
  },
};
