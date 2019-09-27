const
    frontend = require("./src/frontend/webpack.config.js"),
    electron = require("./src/electron/webpack.config.js");

const path = require('path');

module.exports = [
    frontend,
    electron
];
