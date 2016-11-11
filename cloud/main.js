var _ = require('underscore');
var schedule = require('node-schedule');			// https://www.npmjs.com/package/node-schedule
var rp = require('request-promise');

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

Parse.Cloud.define("scrapeWebPage", function(request, response) {
	var myUrl = process.env.URL;
	console.log("URL: " + myUrl);
	
	Parse.Cloud.httpRequest({
		url: myUrl
	}).then(function(httpResponse) {
		// success
		console.log(httpResponse.text);
		response.success("success");
	},function(httpResponse) {
		// error
		console.error('Request failed with response code ' + httpResponse.status);
	});
});

Parse.Cloud.define("testRequestPromise1", function(request, response) {
	var options = {
			uri: 'https://api.github.com/user/repos',
			qs: {
				access_token: '0ed7b8ae84c30a720e69b54e1fab1ecaa45fae6c' // -> uri + '?access_token=xxxxx%20xxxxx' 
			},
			headers: {
				'User-Agent': 'Request-Promise'
			},
			json: true // Automatically parses the JSON string in the response 
	};
	
	
	var myUrl = process.env.URL;
	console.log("URL: " + myUrl);
	
	rp(options).then(function (htmlString) {
		console.log(htmlString);
		response.success("success");
	}).catch(function (err) {
		console.error('Request failed with error: ' + err);
	});
});

