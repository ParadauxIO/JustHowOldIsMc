var moment = require('moment');
var momentDurationFormatSetup = require("moment-duration-format");

exports.seven_ten = moment.duration(moment().diff(moment('2014-06-25', 'YYYY-MM-DD'), 'milliseconds'));
exports.eight_nine = moment.duration(moment().diff(moment('2015-12-9', 'YYYY-MM-DD'), 'milliseconds'));
exports.nine_four = moment.duration(moment().diff(moment('2016-5-10', 'YYYY-MM-DD'), 'milliseconds'));
exports.ten_two = moment.duration(moment().diff(moment('2016-6-23', 'YYYY-MM-DD'), 'milliseconds'));
exports.eleven_two = moment.duration(moment().diff(moment('2016-12-21', 'YYYY-MM-DD'), 'milliseconds'));
exports.twelve_two = moment.duration(moment().diff(moment('2017-9-18', 'YYYY-MM-DD'), 'milliseconds'));
exports.thirteen_two = moment.duration(moment().diff(moment('2018-11-22', 'YYYY-MM-DD'), 'milliseconds'));
exports.fourteen_two = moment.duration(moment().diff(moment('2019-6-24', 'YYYY-MM-DD'), 'milliseconds'));