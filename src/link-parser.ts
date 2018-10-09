import * as yargs from 'yargs';
import * as ogs from 'open-graph-scraper';

function parseLink() {
    const argv = yargs.options({
        link: {
            demand: true,
            alias: 'l',
            describe: 'set link that should be parsed',
            string: true
        }
    }).argv;

    ogs({'url': argv.link}, (error, results) => {
        console.error('error:', error);
        console.log('results:', results);
    });
}

parseLink();