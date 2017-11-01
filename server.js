var util = Npm.require("util");
var lastMessage = ''; // The message to return to the user

/**
A custom transport for winston that is used by winston-client to send log messages back to the client
@class MeteorClient
*/
var MeteorClient = Winston.transports.MeteorClient = function (options) {
  this.name = 'meteorClient';
  this.level = options.level || 'silly';
};

util.inherits(MeteorClient, Winston.Transport);


MeteorClient.prototype.log = function (level, msg, meta, callback) {
  callback(null, true);
};

Winston.add(Winston.transports.MeteorClient, {});


Meteor.methods({
    'winston-client.log': function() {
        Winston.log.apply(this, arguments);
    }
});


