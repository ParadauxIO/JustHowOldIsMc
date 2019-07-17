var express = require('express');
var moment = require('moment');
var releases = require('./data/releases.json');

var app = express();

app.set('view engine', 'ejs');

function getTimeSince(version) {
    thatTime = releases[version].releaseTime;
    timeDifferential = moment.duration(moment().diff(moment(thatTime), 'milliseconds'));

    return {
        years: timeDifferential.years(), 
        months: timeDifferential.months(), 
        days: timeDifferential.days()
    }

}

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get("/:version", function(req, res) {

    version = req.params.version || ""

    const release = releases[version];
    if (!release) {
        res.json({
            "error": "bad request."
        })
    } else {

        timeSince = getTimeSince(version);
        res.render('pages/generic-update', {
            version,
            years: timeSince.years,
            months: timeSince.months,
            days: timeSince.days
        });
    }
});

app.get("/api/v1/:version", function(req, res) {
    res.json(releases[req.params.version]);
});

app.listen(1338)