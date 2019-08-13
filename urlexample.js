var http = require('http');
var url = require('url');

var adr = "http://localhost:8080/default.htm?year=2019&month=february";
var q = url.parse(adr, true);
console.log(q.query);
console.log(q.pathname);
console.log(q.hash);
console.log(q.protocol);
console.log(q.search);
var querydata = q.query;
console.log(querydata.month);
