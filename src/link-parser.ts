import * as ogs from 'open-graph-scraper';

export class LinkParser {

  constructor(private link) {
  }

  public parseLink(): Promise<any> {
    return new Promise((resolve, reject) =>
      ogs({'url': this.link}, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }));
  }
}
