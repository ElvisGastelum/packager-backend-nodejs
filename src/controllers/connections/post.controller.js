const { httpStatusCodes: statusCode } = require('../../util');

module.exports = async (request, h, server) => {
  try {
    const connection = await server.connectionManager.createConnection();
    return h.response(connection).code(statusCode.Created);
  } catch (error) {
    console.error(error);
    return h.response('Error creating connection').code(statusCode.InternalServerError);
  }
};
