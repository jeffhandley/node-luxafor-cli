const Luxafor = require('node-luxafor');
const light = new Luxafor();

module.exports = function setColor(red, green, blue) {
    light.color(red, green, blue).exec();
}
