const argv = require('yargs').argv;
const colors = require('color-name');
const setColor = require('./setColor');

let red = parseInt(argv.r) || 0;
let green = parseInt(argv.g) || 0;
let blue = parseInt(argv.b) || 0;

if (argv.color) {
    const rgb = colors[argv.color];

    red = rgb[0];
    green = rgb[1];
    blue = rgb[2];
}

setColor(red, green, blue);
