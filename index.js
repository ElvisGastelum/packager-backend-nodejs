const { init } = require('./src/app');

init()
  .then((port) => {
    console.log('Server running on %s', port);
  })
  .catch((err) => {
    console.error(err);
  });
