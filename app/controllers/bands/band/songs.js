import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import { Song } from 'rarwe/routes/bands';
// import Song from 'rarwe/models/song';
import { service } from '@ember/service';
import { capitalize } from 'rarwe/helpers/capitalize';

export default class BandsBandSongsController extends Controller {
  @tracked showAddSong = true;
  @tracked title = '';
  @tracked sortBy = 'title';
  @tracked searchTerm = '';

  get hasNoTitle() {
    return !this.title;
  }

  @service catalog;

  get matchingSongs() {
    let searchTerm = this.searchTerm.toLowerCase();
    return this.model.songs.filter((song) => {
      return song.title.toLowerCase().includes(searchTerm);
    });
  }

  get sortedSongs() {
    let sortBy = this.sortBy;
    let isDescendingSort = false;
    if (sortBy.charAt(0) === '-') {
      sortBy = this.sortBy.slice(1);
      isDescendingSort = true;
    }

    return this.matchingSongs.sort((song1, song2) => {
      if (song1[sortBy] < song2[sortBy]) {
        return isDescendingSort ? 1 : -1;
      }
      if (song1[sortBy] > song2[sortBy]) {
        return isDescendingSort ? -1 : 1;
      }
      return 0;
    });
  }

  get newSongPlaceholder() {
    let bandName = this.model.name;
    return `New ${capitalize([bandName])} song`;
  }

  @action
  async updateRating(song, rating) {
    song.rating = rating;
    // let payload = {
    //   data: {
    //     id: song.id,
    //     type: 'songs',
    //     attributes: {
    //       rating,
    //     },
    //   },
    // };
    // await fetch(`/songs/${song.id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/vnd.api+json',
    //   },
    //   body: JSON.stringify(payload),
    // });
    this.catalog.update('song', song, { rating });
  }

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;
  }

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
  // @action
  // saveSong() {
  //   let song = new Song({ title: this.title, band: this.model });
  //   this.catalog.add('song', song);
  //   this.model.songs = [...this.model.songs, song];
  //   this.title = '';
  //   this.showAddSong = true;
  // }
  @action
  async saveSong() {
    // let payload = {
    //   data: {
    //     type: 'songs',
    //     attributes: { title: this.title },
    //     relationships: {
    //       band: {
    //         data: {
    //           id: this.model.id,
    //           type: 'bands',
    //         },
    //       },
    //     },
    //   },
    // };
    // let response = await fetch('/songs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/vnd.api+json' },
    //   body: JSON.stringify(payload),
    // });
    // let json = await response.json();
    // let { id, attributes, relationships } = json.data;
    // let rels = {};
    // for (let relationshipName in relationships) {
    //   rels[relationshipName] = relationships[relationshipName].links.related;
    // }
    // let song = new Song({ id, ...attributes }, rels);
    // this.catalog.add('song', song);

    let song = await this.catalog.create(
      'song',
      { title: this.title },
      { band: { data: { id: this.model.id, type: 'bands' } } },
    );

    this.model.songs = [...this.model.songs, song];
    this.title = '';
    this.showAddSong = true;
  }

  @action
  cancel() {
    this.title = '';
    this.showAddSong = true;
  }
}
