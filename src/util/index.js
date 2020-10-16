/**
 * toFirstUpperCase is used to return only the first letter in upper case
 *
 * @param {String} word
 */
exports.toFirstUpperCase = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
};

/**
 * pluginName is used to return a name of plugin
 *
 * @param {Array<String>} values
 */
exports.pluginName = (...values) => {
  let name = '';
  values.forEach((value, index) => {
    if (index === 0) {
      name += value.toLowerCase();
    } else {
      name += this.toFirstUpperCase(value);
    }
  });
  return name;
};
