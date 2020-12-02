// Initializes the `log` service on path `/log`
const { Log } = require('./log.class');
const hooks = require('./log.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/log', new Log(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('log');

  service.hooks(hooks);
};
