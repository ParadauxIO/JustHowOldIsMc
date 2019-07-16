var express = require('express');
var moment = require('moment');
var dates = require('./dates.js')

var app = express();
var momentDurationFormatSetup = require("moment-duration-format");

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

 function getTimeSince(release) {
 	return {
 		years: release.years(), 
 		months: release.months(), 
 		days: release.days()
 	}
}


app.get('/1.7.10', function(req, res) {

	timeSince = getTimeSince(dates.seven_ten);

    res.render('pages/1-7-10', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });

});

// 9/12/15
app.get('/1.8.9', function(req, res) {
	
	timeSince = getTimeSince(dates.eight_nine);

    res.render('pages/1-8-9', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });

});

// 10/5/16
app.get('/1.9.4', function(req, res) {
	
	timeSince = getTimeSince(dates.nine_four);

    res.render('pages/1-9-4', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 23/6/16
app.get('/1.10.2', function(req, res) {
	
	timeSince = getTimeSince(dates.ten_two);

    res.render('pages/1-10-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 21/12/16
app.get('/1.11.2', function(req, res) {
	
	timeSince = getTimeSince(dates.eleven_two);

    res.render('pages/1-11-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 18/9/17
app.get('/1.12.2', function(req, res) {
	
	timeSince = getTimeSince(dates.twelve_two);

    res.render('pages/1-12-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 22/11/18
app.get('/1.13.2', function(req, res) {
	
	timeSince = getTimeSince(dates.thirteen_two);

    res.render('pages/1-13-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 24/6/19
app.get('/1.14.3', function(req, res) {
	
	timeSince = getTimeSince(dates.fourteen_two);

    res.render('pages/1-14-3', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

app.listen(1337);