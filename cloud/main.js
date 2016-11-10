var _ = require('underscore');
var schedule = require('node-schedule');			// https://www.npmjs.com/package/node-schedule

var SUPERUSER = process.env.SUPER_USER;
var SUPERPASSWORD = process.env.SUPER_USER_PASS;

var APP_ID = process.env.APP_ID;
var MASTER_KEY = process.env.MASTER_KEY;
var SERVER_URL = process.env.SERVER_URL;

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello World from " + process.env.APP_NAME);
});