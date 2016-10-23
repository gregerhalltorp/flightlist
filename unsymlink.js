var fs = require('fs');

fs.unlink('./node_modules/app', (err) => {
  console.log('UNLINKED', err);
});
