const yargs = require('yargs');
const ogs = require('open-graph-scraper');

const argv = yargs.options({
    link: {
        demand: true,
        alias: 'l',
        describe: 'set link that should be parsed',
        string: true
    }
}).argv;

ogs({'url': argv.link}, function (error, results) {
    console.log('error:', error);
    console.log('results:', results);
});