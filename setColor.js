const Luxafor = require('node-luxafor');
const light = new Luxafor();
const fs = require('fs');

module.exports = function setColor(red, green, blue) {
    fs.writeFileSync('/Users/i848715/code/node-luxafor-cli/setColor.log', JSON.stringify({red, green, blue}));

    light.color(red, green, blue).exec();
}
