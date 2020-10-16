const PLUGIN_NAME = 'socket-io';

const { pluginName } = require('../util');

const fs = require('fs');

module.exports = {
  name: pluginName(PLUGIN_NAME, 'plugin'),
  version: '1.0.0',
  register(server) {
    const { io } = server;
    console.log('SocketIo Connection Started');

    io.on('connect', function (socket) {
      console.log('client incoming: ', socket.id);
      socket.on('upload-video', (data) => {
        fs.writeFile(`video-uploads/${data.videoName}.webm`, data.videoBlob, function (err) {
          if (err) {
            console.log('error: ', err);
          }
        });
        console.log('video Recivied')
      });
    });
  },
};
