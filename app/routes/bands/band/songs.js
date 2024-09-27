import Route from '@ember/routing/route';
import { service } from '@ember/service';
import wait from 'rarwe/utils/wait';

export default class BandsBandSongsRoute extends Route {
  // model() {
  //   let band = this.modelFor('bands.band');
  //   return band.songs;
  // }
  // setupController(controller) {
  //   super.setupController(...arguments);
  //   controller.set('band', this.modelFor('bands.band'));
  // }

  @service catalog;

  queryParams = {
    sortBy: {
      as: 's',
    },
    searchTerm: {
      as: 'q',
    },
  };

  async model() {
    let band = this.modelFor('bands.band');
    await wait(500);
    await this.catalog.fetchRelated(band, 'songs');
    return band;
    // return Promise.reject();
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
