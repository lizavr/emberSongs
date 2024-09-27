import Route from '@ember/routing/route';
// import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
// import Band from 'rarwe/models/band';
// import Song from 'rarwe/models/song';
import wait from 'rarwe/utils/wait';
export default class BandsRoute extends Route {
  @service catalog;
  async model() {
    await wait(500);
    return this.catalog.fetchAll('bands');
  }
}

// export class Band {
//   @tracked name;
//   @tracked songs;

//   constructor({ id, name, songs }) {
//     this.id = id;
//     this.name = name;
//     this.songs = songs || [];
//   }
// }

// export class Song {
//   constructor({ title, rating, band }) {
//     this.title = title;
//     this.rating = rating ?? 0;
//     this.band = band;
//   }
// }
////////////////////////////////////////////////////////////////////
// async model() {
//   let response = await fetch('/bands');
//   let json = await response.json();
//   for (let item of json.data) {
//     let { id, attributes, relationships } = item;
//     let rels = {};
//     for (let relationshipName in relationships) {
//       rels[relationshipName] = relationships[relationshipName].links.related;
//     }
//     let record = new Band({ id, ...attributes }, rels);

//     this.catalog.add('band', record);
//   }
//   return this.catalog.bands;
// }
