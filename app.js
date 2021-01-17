const express = require('express');
const partials = require('express-partials');
const moment = require('moment');
const releases = require('./data/releases.json');

let app = express();

app.use(partials());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

function getTimeSince(version) {
    let thatTime = releases[version].releaseTime;
    let timeDifferential = moment.duration(moment().diff(moment(thatTime, "YYYY-MM-DD"), 'milliseconds'));

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

    let version = req.params.version || ""

    const release = releases[version];
    let versiontitle;
    if (!release) {
        res.json({
            "error": "bad request."
        })
    } else {

        if (version.startsWith("1.16")) {
            versiontitle = "Performant Services When?"
            // res.render('pages/notyetreleased');
            // return;
        } else if (version.startsWith("1.15")) {
            versiontitle = "Bees? Seriously Mojang? ... You know what? Fuck off."
        } else if (version.startsWith("1.14")) {
            versiontitle = "We were getting closer to 1.13 performance at least..."
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

    let version = req.params.version || ""

    const release = releases[version];

    if (!release) {
        res.json({"error": "bad request."})
    }

    let releaseTime = releases[version].releaseTime
    let releaseDifferenceMS = moment.duration(moment().diff(moment(releaseTime, "YYYY-MM-DD"), 'milliseconds'));
    let timeSince = {
        "years": releaseDifferenceMS.years(),
        "months": releaseDifferenceMS.months(),
        "days": releaseDifferenceMS.days()
    }

    let determination;

    if (version.startsWith("1.16")) {
        determination = "At least it won't bring many breaking Bukkit api changes?"
    } else if (version.startsWith("1.15")) {
        determination = "Bees? Seriously Mojang? ..."
    } else if (version.startsWith("1.14")) {
        determination = "We're getting closer to 1.13 performance at least..."
    } else {
        determination = "I think you're overdue an upgrade..."
    }

    let apiOutput = {
        version,
        releaseTime,
        timeSince,
        launcherJSON: releases[version].url,
        determination
    }

    res.json(apiOutput);

});

app.listen(1337)
