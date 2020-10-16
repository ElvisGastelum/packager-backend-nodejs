module.exports = async (request, h) => {
  console.log(request.payload);
  return request.payload;
};
