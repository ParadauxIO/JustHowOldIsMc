var express = require('express');
var moment = require('moment');

var app = express();
var momentDurationFormatSetup = require("moment-duration-format");

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

function getTimeSince(release) {
    currentTime = moment();

    switch (release) {
        case "two_five": 
            timeDifferential = moment.duration(currentTime.diff(moment('2012-04-4', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "three_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2012-08-16', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "four_seven": 
            timeDifferential = moment.duration(currentTime.diff(moment('2013-01-9', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "five_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2013-05-2', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "six_four": 
            timeDifferential = moment.duration(currentTime.diff(moment('2013-09-19', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "seven_ten": 
            timeDifferential = moment.duration(currentTime.diff(moment('2014-06-25', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "eight_nine": 
            timeDifferential = moment.duration(currentTime.diff(moment('2015-12-9', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "nine_four": 
            timeDifferential = moment.duration(currentTime.diff(moment('2016-5-10', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "ten_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2016-6-23', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "eleven_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2016-12-21', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "twelve_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2017-9-18', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "thirteen_two": 
            timeDifferential = moment.duration(currentTime.diff(moment('2018-11-22', 'YYYY-MM-DD'), 'milliseconds'));
            break
        case "fourteen_three": 
            timeDifferential = moment.duration(currentTime.diff(moment('2019-6-24', 'YYYY-MM-DD'), 'milliseconds'));
            break
    }

    return {
        years: timeDifferential.years(), 
        months: timeDifferential.months(), 
        days: timeDifferential.days()
    }

}

app.get('/1.2.5', function(req, res) {

    timeSince = getTimeSince("two_five");

    res.render('pages/1-2-5', {
        years: timeSince.years,
        months: timeSince.months,
        days: timeSince.days
    });

});

app.get('/1.3.2', function(req, res) {

    timeSince = getTimeSince("three_two");

    res.render('pages/1-3-2', {
        years: timeSince.years,
        months: timeSince.months,
        days: timeSince.days
    });

});

app.get('/1.4.7', function(req, res) {

    timeSince = getTimeSince("four_seven");

    res.render('pages/1-4-7', {
        years: timeSince.years,
        months: timeSince.months,
        days: timeSince.days
    });

});
app.get('/1.5.2', function(req, res) {

    timeSince = getTimeSince("five_two");

    res.render('pages/1-5-2', {
        years: timeSince.years,
        months: timeSince.months,
        days: timeSince.days
    });

});
app.get('/1.6.4', function(req, res) {

    timeSince = getTimeSince("six_four");

    res.render('pages/1-6-4', {
        years: timeSince.years,
        months: timeSince.months,
        days: timeSince.days
    });

});
app.get('/1.7.10', function(req, res) {

	timeSince = getTimeSince("seven_ten");

    res.render('pages/1-7-10', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });

});

// 9/12/15
app.get('/1.8.9', function(req, res) {
	
	timeSince = getTimeSince("eight_nine");

    res.render('pages/1-8-9', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });

});

// 10/5/16
app.get('/1.9.4', function(req, res) {
	
	timeSince = getTimeSince("nine_four");

    res.render('pages/1-9-4', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 23/6/16
app.get('/1.10.2', function(req, res) {
	
	timeSince = getTimeSince("ten_two");

    res.render('pages/1-10-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 21/12/16
app.get('/1.11.2', function(req, res) {
	
	timeSince = getTimeSince("eleven_two");

    res.render('pages/1-11-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 18/9/17
app.get('/1.12.2', function(req, res) {
	
	timeSince = getTimeSince("twelve_two");

    res.render('pages/1-12-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 22/11/18
app.get('/1.13.2', function(req, res) {
	
	timeSince = getTimeSince("thirteen_two");

    res.render('pages/1-13-2', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

// 24/6/19
app.get('/1.14.3', function(req, res) {
	
	timeSince = getTimeSince("fourteen_three");

    res.render('pages/1-14-3', {
    	years: timeSince.years,
    	months: timeSince.months,
    	days: timeSince.days
    });
    
});

app.listen(1337);