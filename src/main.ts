import * as yargs from "yargs";
import {LinkParser} from "./link-parser";

const argv = yargs.options({
  link: {
    demand: true,
    alias: 'l',
    describe: 'set link that should be parsed',
    string: true
  }
}).argv;

const linkParser = new LinkParser(argv.link);

linkParser.parseLink()
  .then(result => console.log(result))
  .catch(error => console.error(error));
