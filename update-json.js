const m = require("moment");
const fs = require("fs");
const fetch = require('node-fetch');

var mojangreleasedata = "https://launchermeta.mojang.com/mc/game/version_manifest.json";

fetch(mojangreleasedata).then(res => res.json()).then(json => {
	release_data = json.versions.filter( function(value, index, arr) {
    return value.type == "release";
	});

	let restructuredReleaseData = new Object; 

	for (let data of release_data) {
	    restructuredReleaseData[data.id] = {
	        releaseTime: data.releaseTime,
	        url: data.url
	    }
	}

    fs.writeFile("./data/releases.json", JSON.stringify(restructuredReleaseData, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
});

