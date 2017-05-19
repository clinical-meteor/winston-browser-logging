var log = function(level, args) {
  if(['silly', 'input', 'verbose', 'prompt', 'debug', 'info', 'data', 'help', 'warn', 'error'].includes(level)){
    if(args && args[0]){
      console.log(args[0]);
    }
  }
  if(['silly', 'input', 'verbose', 'prompt', 'debug', 'info', 'data', 'help', 'warn', 'error'].includes(level)){
    Meteor.call("winston-client.log", level, args);
  } 
}

Winston = {
  log:      function(level) { log(level, arguments)},
  silly:    function() { log('silly', arguments); },
  input:    function() { log('input', arguments); },
  verbose:  function() { log('verbose', arguments); },
  prompt:   function() { log('prompt', arguments); },
  debug:    function() { log('debug', arguments); },
  info:     function() { log('info', arguments); },
  data:     function() { log('data', arguments); },
  help:     function() { log('help', arguments); },
  warn:     function() { log('warn', arguments); },
  error:    function() { log('error', arguments); }
};


