var express = require('express');
var moment = require('moment');
var releases = require('./data/releases.json');

var app = express();

app.set('view engine', 'ejs');

function getTimeSince(version) {
    thatTime = releases[version].releaseTime;
    timeDifferential = moment.duration(moment().diff(moment(thatTime, "YYYY-MM-DD"), 'milliseconds'));

    return {
        years: timeDifferential.years(), 
        months: timeDifferential.months(), 
        days: timeDifferential.days()
    }

}

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/coming-soon', function(req, res) {
    res.render('pages/coming-soon');
});

app.get('/maintenance', function(req, res) {
    res.render('pages/maintenance');
});

app.get("/:version", function(req, res) {

    version = req.params.version || ""

    const release = releases[version];
    if (!release) {
        res.json({
            "error": "bad request."
        })
    } else {

        if (version == "1.14.4") {
            versiontitle = "We're getting closer to 1.13 performance at least..."
        } else {
            versiontitle = "I think it's time for an upgrade..."
        }

        timeSince = getTimeSince(version);
        res.render('pages/generic-update', {
            versiontitle,
            version,
            years: timeSince.years,
            months: timeSince.months,
            days: timeSince.days
        });
    }
});

app.get("/api/v1/releases/", function(req, res) {
    res.json(releases); 
});


app.get("/api/v1/:version", function(req, res) {

    version = req.params.version || ""

    const release = releases[version];

    if (!release) {
        res.json({"error": "bad request."})
    } 

    releaseTime = releases[version].releaseTime
    releaseDifferenceMS = timeDifferential = moment.duration(moment().diff(moment(releaseTime, "YYYY-MM-DD"), 'milliseconds'));
    timeSince = {
        "years": releaseDifferenceMS.years(),
        "months": releaseDifferenceMS.months(),
        "days": releaseDifferenceMS.days()
    }

    if (version == "1.14.4") {
        determination = "We're getting closer to 1.13 performance at least..."
    } else {
        determination = "I think it's time for an upgrade..."
    }

    apiOutput = {
        version,
        releaseTime,
        timeSince,
        launcherJSON: releases[version].url,
        determination
    }

    res.json(apiOutput); 

});

app.listen(1337)