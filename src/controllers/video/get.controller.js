module.exports = (request, h, server) => {
  const { io } = server;

  io.emit('custom-message', {
    message: 'Hello world! :D',
  });
  return 'Hello from video!';
};
