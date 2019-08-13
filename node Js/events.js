// var http = require('http');
// var fs = require('fs');
// var rs = fs.createReadStream('./index.html');
// rs.on('open', function() {
//     console.log('THe file is open');
// });



var events = require('events');
var eventemitter = new events.EventEmitter();

// initiate a event handler

var eventHandler = function() {
    console.log('A new event is generated');
}

// assign the event handler to the event
eventemitter.on('scream', eventHandler);

//emit the event
eventemitter.emit('scream');
