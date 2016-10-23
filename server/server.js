import Express from 'express';
import path from 'path';

const app = new Express();

if (process.env.DEV) {
  const webpack = require('webpack'); // eslint-disable-line global-require
  const webpackConfig = require('../webpack.config.client'); // eslint-disable-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
} else {
  app.use('/public',
    Express.static(path.resolve(__dirname, './public'),
    { maxAge: '0' }
  ));
}

app.get('/alive', (req, res) => res.status(200).send('OK'));

app.use((req, res) => res.status(200).send(`
  <html>
    <head>
      <link ref="stylesheet" type="text/css" href="/public/app.css" />
    </head>
    <body>
      <div id="app"></div>
      <script src="/public/app.js"></script>
    </body>
  </html>
  `)
);

app.use((req, res) => res.status(404).send(''));

app.use((err, req, res) => res.status(500).send((err && err.message) || 'ERROR'));

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  err && console.log('FAILED TO START SERVICE', err); // eslint-disable-line no-unused-expressions, no-console
  !err && console.log(`Running on port ${port}`); // eslint-disable-line no-unused-expressions, no-console
});

export default app;
