const { httpStatusCodes: statusCode } = require('../../util');

module.exports = async (request, h, server) => {
  const { id } = request.params;
  const connection = server.connectionManager.getConnection(id);
  if (!connection) {
    return h.response().code(statusCode.NotFound);
  }

  try {
    await connection.applyAnswer(request.payload);
    return h
      .response(connection.toJSON().remoteDescription)
      .code(statusCode.Ok);
  } catch (error) {
    console.log(error);
    return h.response().code(statusCode.InternalServerError);
  }
};
