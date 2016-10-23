const os = require('os');
const execute = require('child_process').exec;

switch (os.platform()) {
  case 'win32':
    execute('if not exist "./node_modules/app" mklink /J "./node_modules/app" "./app"');
    break;
  default:
    execute('ln -sf ../app ./node_modules/app');
}
