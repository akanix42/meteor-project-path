'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectPath = getProjectPath(process.cwd().replace(/\\/g, '/'));
exports.default = projectPath;


function getProjectPath(directory) {
  if (_fs2.default.existsSync(_path2.default.join(directory, '.meteor'))) {
    return directory;
  }
  var pathAbove = _path2.default.resolve(directory, '..');
  if (pathAbove === directory) {
    return null;
  }
  return getProjectPath(pathAbove);
}
//# sourceMappingURL=main.js.map
