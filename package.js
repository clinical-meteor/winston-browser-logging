Package.describe({
  name: 'clinical:winston-browser-logging',
  summary: 'Winston library to provide isomorphic client-sid logging.  Meteor 1.4+',
  version: "0.2.3",
  git: "https://github.com/farpoint/meteor-winston-client.git"
});

Npm.depends({
  "util": "0.10.3"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');
  
  api.use("infinitedg:winston@0.7.3");
  api.imply("infinitedg:winston@0.7.3");
  
  api.use('meteor', 'server');
  api.addFiles('client.js', 'client');
  api.addFiles('server.js', 'server');

  api.export("Winston", 'client');
});
