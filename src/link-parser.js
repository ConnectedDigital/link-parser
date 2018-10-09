"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var ogs = require("open-graph-scraper");
function parseLink() {
    var argv = yargs.options({
        link: {
            demand: true,
            alias: 'l',
            describe: 'set link that should be parsed',
            string: true
        }
    }).argv;
    ogs({ 'url': argv.link }, function (error, results) {
        console.error('error:', error);
        console.log('results:', results);
    });
}
parseLink();
//# sourceMappingURL=link-parser.js.map