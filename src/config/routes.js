const glob = require('glob')

exports.getRoutes = () => {
  return glob.sync('../routes/**/*.route.js', { cwd: __dirname }).map((route) => {
    return require(route)
  })
}